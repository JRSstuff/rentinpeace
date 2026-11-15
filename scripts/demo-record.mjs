/**
 * Rent in Peace — Playwright Pitch Video Recorder & Processor
 * 
 * Records 8 high-DPI (390x844 @ 2x DPR) mobile clips demonstrating the full
 * lease lifecycle, payment verification, cryptographic door PIN gating,
 * AI clause drafting with Gemini 3, and preset customization.
 * 
 * Outputs:
 * - docs/video/clips/01-landlord-create-lease.mp4 (Max 35s)
 * - docs/video/clips/02-tenant-join-register-sign.mp4 (Max 30s)
 * - docs/video/clips/03-tenant-upload-payment-proof.mp4 (Max 20s)
 * - docs/video/clips/04-landlord-verify-payment.mp4 (Max 25s)
 * - docs/video/clips/05-tenant-portal-live-update.mp4 (Max 20s)
 * - docs/video/clips/06-landlord-search-cross-index.mp4 (Max 15s)
 * - docs/video/clips/07-gemini-ai-clause-suggestion.mp4 (Max 20s)
 * - docs/video/clips/08-presets-reorder-placeholders.mp4 (Max 20s)
 * - docs/video/rough-cut.mp4 (Complete presentation video track with title cards)
 */

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import ffmpegPath from 'ffmpeg-static';

const ROOT_DIR = process.cwd();
const DOCS_DIR = path.resolve(ROOT_DIR, 'docs', 'video');
const CLIPS_DIR = path.resolve(DOCS_DIR, 'clips');
const FRAMES_DIR = path.resolve(DOCS_DIR, 'frames');
const TEMP_DIR = path.resolve(DOCS_DIR, '.temp_recordings');

// Ensure output directories exist
[DOCS_DIR, CLIPS_DIR, FRAMES_DIR, TEMP_DIR].forEach((d) => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

// Also mirror to devfest/docs/video if running from rent-in-peace
const PARENT_DOCS_DIR = path.resolve(ROOT_DIR, '..', 'docs', 'video');
try {
  [
    PARENT_DOCS_DIR,
    path.resolve(PARENT_DOCS_DIR, 'clips'),
    path.resolve(PARENT_DOCS_DIR, 'frames')
  ].forEach((d) => {
    if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
  });
} catch (_) {}

function mirrorFileToParent(filename, subfolder = 'clips') {
  try {
    const src = subfolder ? path.resolve(DOCS_DIR, subfolder, filename) : path.resolve(DOCS_DIR, filename);
    const dest = subfolder ? path.resolve(PARENT_DOCS_DIR, subfolder, filename) : path.resolve(PARENT_DOCS_DIR, filename);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
    }
  } catch (_) {}
}

function findBrowserBinary() {
  const candidates = [
    process.env.PLAYWRIGHT_CHROME_PATH,
    'C:\\Program Files (x86)\\Microsoft\\EdgeCore\\157.0.4341.46\\msedge.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  ];
  for (const c of candidates) {
    if (c && fs.existsSync(c)) return c;
  }
  return null;
}

async function findActivePort() {
  const ports = [5190, 5173, 3000];
  for (const p of ports) {
    try {
      const res = await fetch(`http://localhost:${p}/`);
      if (res.ok) return p;
    } catch (_) {}
  }
  return 5190;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function humanType(page, selector, text, delayMs = 45) {
  const loc = page.locator(selector).first();
  await loc.waitFor({ state: 'visible', timeout: 8000 });
  await loc.scrollIntoViewIfNeeded();
  await loc.click();
  await sleep(150);
  await loc.fill('');
  for (const char of text) {
    await loc.type(char, { delay: delayMs + Math.random() * 20 });
  }
  await sleep(400);
}

async function humanClick(page, selector, waitAfterMs = 700) {
  const loc = page.locator(selector).first();
  await loc.waitFor({ state: 'visible', timeout: 8000 });
  await loc.scrollIntoViewIfNeeded();
  await loc.click();
  await sleep(waitAfterMs);
}

async function injectRipple(contextOrPage) {
  const script = () => {
    window.addEventListener('click', (e) => {
      const ripple = document.createElement('div');
      ripple.style.position = 'fixed';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      ripple.style.width = '36px';
      ripple.style.height = '36px';
      ripple.style.borderRadius = '50%';
      ripple.style.backgroundColor = 'rgba(20, 83, 45, 0.45)';
      ripple.style.border = '2px solid rgba(241, 174, 23, 0.9)';
      ripple.style.transform = 'translate(-50%, -50%) scale(0.2)';
      ripple.style.pointerEvents = 'none';
      ripple.style.zIndex = '999999';
      ripple.style.boxShadow = '0 0 12px rgba(241, 174, 23, 0.6)';
      ripple.style.transition = 'transform 0.45s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 0.45s ease-out';
      document.body.appendChild(ripple);
      requestAnimationFrame(() => {
        ripple.style.transform = 'translate(-50%, -50%) scale(1.5)';
        ripple.style.opacity = '0';
      });
      setTimeout(() => ripple.remove(), 500);
    }, true);
  };
  await contextOrPage.addInitScript(script);
}

/**
 * Generate a transparent 780x1688 PNG lower-third banner overlay in brand colors
 */
async function generateLowerThirdPng(browser, { sceneNumber, stepBadge, title, subtitle, outputPath }) {
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2
  });

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          width: 390px;
          height: 844px;
          background: transparent;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          position: relative;
          overflow: hidden;
        }
        .lower-third-container {
          position: absolute;
          bottom: 16px;
          left: 14px;
          right: 14px;
          background: linear-gradient(135deg, rgba(11, 46, 27, 0.96) 0%, rgba(20, 76, 46, 0.97) 100%);
          border: 1.5px solid rgba(241, 174, 23, 0.85);
          border-radius: 20px;
          padding: 12px 14px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(241, 174, 23, 0.25);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .scene-pill {
          background: #F1AE17;
          color: #0b2e1b;
          font-weight: 900;
          font-size: 10px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 6px 9px;
          border-radius: 12px;
          line-height: 1;
          flex-shrink: 0;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        .content {
          flex: 1;
          min-width: 0;
        }
        .badge {
          font-size: 9px;
          font-weight: 800;
          color: #F1AE17;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 2px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .title {
          font-size: 13px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.25;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .subtitle {
          font-size: 10.5px;
          font-weight: 500;
          color: #cbd5e1;
          margin-top: 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>
    </head>
    <body>
      <div class="lower-third-container">
        <div class="scene-pill">CLIP ${sceneNumber}</div>
        <div class="content">
          <div class="badge">● ${stepBadge}</div>
          <div class="title">${title}</div>
          <div class="subtitle">${subtitle}</div>
        </div>
      </div>
    </body>
    </html>
  `;
  await page.setContent(html);
  await page.screenshot({ path: outputPath, omitBackground: true });
  await page.close();
}

/**
 * Generate a 780x1688 full-screen title card PNG
 */
async function generateTitleCardPng(browser, { sceneNumber, stepBadge, title, subtitle, outputPath }) {
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2
  });

  const logoPath = path.resolve(ROOT_DIR, 'public', 'assets', 'logo-full.png');
  const logoBase64 = fs.existsSync(logoPath)
    ? `data:image/png;base64,${fs.readFileSync(logoPath).toString('base64')}`
    : '';

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          width: 390px;
          height: 844px;
          background: linear-gradient(155deg, #092315 0%, #144C2E 45%, #071a10 100%);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px 24px;
          text-align: center;
          color: white;
          position: relative;
        }
        .logo-box {
          margin-bottom: 28px;
        }
        .logo-img {
          width: 140px;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.35);
        }
        .scene-badge {
          background: #F1AE17;
          color: #0b2e1b;
          font-weight: 900;
          font-size: 11px;
          padding: 5px 14px;
          border-radius: 9999px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 14px;
          box-shadow: 0 3px 8px rgba(0,0,0,0.25);
        }
        .step-label {
          font-size: 12px;
          font-weight: 700;
          color: #86efac;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        h1 {
          font-size: 24px;
          font-weight: 900;
          line-height: 1.25;
          color: #ffffff;
          margin-bottom: 12px;
          max-width: 320px;
        }
        p {
          font-size: 12.5px;
          color: #cbd5e1;
          line-height: 1.5;
          max-width: 310px;
        }
        .brand-bar {
          position: absolute;
          bottom: 24px;
          font-size: 10px;
          font-weight: 700;
          color: rgba(241, 174, 23, 0.85);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
      </style>
    </head>
    <body>
      <div class="logo-box">
        ${logoBase64 ? `<img src="${logoBase64}" class="logo-img" alt="Rent in Peace" />` : '<h2 style="color:#F1AE17;font-size:20px;font-weight:900;">RENT IN PEACE</h2>'}
      </div>
      <div class="scene-badge">SCENE ${sceneNumber}</div>
      <div class="step-label">${stepBadge}</div>
      <h1>${title}</h1>
      <p>${subtitle}</p>
      <div class="brand-bar">GDG CAGAYAN DE ORO · PITCH DEMO</div>
    </body>
    </html>
  `;
  await page.setContent(html);
  await page.screenshot({ path: outputPath });
  await page.close();
}

/**
 * Overlay lower-third on raw Playwright WebM and encode to crisp MP4 (Full Screen 780x1688)
 */
function postProcessClip(rawWebmPath, lowerThirdPngPath, finalMp4Path) {
  console.log(`  Encoding MP4 & applying lower-third: ${path.basename(finalMp4Path)}...`);
  execFileSync(ffmpegPath, [
    '-y',
    '-i', rawWebmPath,
    '-i', lowerThirdPngPath,
    '-filter_complex', '[0:v]scale=780:1688:flags=lanczos[scaled];[scaled][1:v]overlay=0:0:enable=\'between(t,0,4.5)\'',
    '-c:v', 'libx264',
    '-preset', 'fast',
    '-crf', '18',
    '-pix_fmt', 'yuv420p',
    '-r', '30',
    '-an',
    finalMp4Path
  ], { stdio: 'ignore' });
}

/**
 * Extract verification frames from an MP4 clip
 */
function extractVerificationFrames(mp4Path, sceneId) {
  try {
    const frame1 = path.resolve(FRAMES_DIR, `${sceneId}-start.png`);
    const frame2 = path.resolve(FRAMES_DIR, `${sceneId}-mid.png`);
    const frame3 = path.resolve(FRAMES_DIR, `${sceneId}-end.png`);

    execFileSync(ffmpegPath, ['-y', '-ss', '00:00:01', '-i', mp4Path, '-vframes', '1', frame1], { stdio: 'ignore' });
    execFileSync(ffmpegPath, ['-y', '-ss', '00:00:06', '-i', mp4Path, '-vframes', '1', frame2], { stdio: 'ignore' });
    execFileSync(ffmpegPath, ['-y', '-sseof', '-1', '-i', mp4Path, '-vframes', '1', frame3], { stdio: 'ignore' });

    mirrorFileToParent(`${sceneId}-start.png`, 'frames');
    mirrorFileToParent(`${sceneId}-mid.png`, 'frames');
    mirrorFileToParent(`${sceneId}-end.png`, 'frames');
  } catch (_) {}
}

// =========================================================================
// SCENE DEFINITIONS (01 - 08)
// =========================================================================

const SCENES = [
  {
    num: '01',
    id: '01-landlord-create-lease',
    role: 'landlord',
    stepBadge: 'Step 1: Lease Creation & Kasulatan',
    title: 'Landlord Creates Lease & Kasulatan',
    subtitle: 'Bilingual A4 agreement compiled; room code generated on save',
    maxSeconds: 35,
    run: async (landlordPage, tenantPage, appUrl) => {
      await landlordPage.goto(appUrl);
      await landlordPage.waitForSelector('#root', { state: 'visible' });

      // Start on Landlord Home
      await landlordPage.evaluate(async () => {
        await window.__appContext.loadDemoPitchData('LANDLORD');
        window.__appContext.setCurrentScreen('LANDLORD_HOME');
      });
      await sleep(1000);

      // Tap "+ Create Lease"
      await humanClick(landlordPage, 'button:has-text("Create Lease")', 900);

      // Wizard Step 1: Property classification -> Tap "Continue to Lease Terms"
      await humanClick(landlordPage, 'button:has-text("Continue to Lease Terms")', 900);

      // Wizard Step 2: Lease Details
      await humanType(landlordPage, 'input[placeholder*="Unit 3B"], input[placeholder*="Room"]', 'Room 301 - Deluxe Bedspace', 40);
      await humanType(landlordPage, 'input[type="number"]:first-of-type', '3500', 45);
      await sleep(600);

      // Continue to Review
      await humanClick(landlordPage, 'button:has-text("Continue to Review")', 900);

      // Review terms & Rent Control Act badge
      await sleep(800);
      await humanClick(landlordPage, 'button:has-text("Generate Kasulatan")', 1000);

      // Wizard Contract: Kasulatan bilingual preview
      await sleep(900);

      // Landlord Digital Signature: Auto-Sign
      await humanClick(landlordPage, 'button:has-text("Auto-Sign with Legal Name")', 800);

      // Save Kasulatan -> Generates room code and share link
      await humanClick(landlordPage, 'button:has-text("Save Kasulatan")', 1200);

      // Lands on All Done screen
      await landlordPage.waitForSelector('text=Tenant Room Code', { state: 'visible', timeout: 6000 });
      await sleep(600);

      // Copy share link
      await humanClick(landlordPage, 'button:has-text("Copy Link")', 1500);
    }
  },
  {
    num: '02',
    id: '02-tenant-join-register-sign',
    role: 'tenant',
    stepBadge: 'Step 2: Tenant Join & Review',
    title: 'Tenant Joins, Toggles Bisaya & Signs',
    subtitle: 'Full language transparency & touchscreen digital signing',
    maxSeconds: 30,
    run: async (landlordPage, tenantPage, appUrl) => {
      await tenantPage.goto(appUrl);
      await tenantPage.waitForSelector('#root', { state: 'visible' });

      // Start on Tenant Auth screen with fresh open room state
      await tenantPage.evaluate(async () => {
        try {
          const { doc, updateDoc } = await import('firebase/firestore');
          const { db } = await import('./src/lib/firebase');
          await updateDoc(doc(db, 'contracts', 'RIP-OPEN'), {
            status: 'open',
            tenantId: null,
            isSigned: false,
            tenantSigned: false,
            paymentVerified: false
          });
        } catch (_) {}

        await window.__appContext.loadDemoPitchData('TENANT');
        window.__appContext.setActiveCode('RIP-OPEN');
        window.__appContext.setCurrentScreen('TENANT_AUTH');
      });
      await sleep(800);

      // Tenant enters room code RIP-OPEN
      await humanType(tenantPage, 'input[placeholder*="RIP-"]', 'RIP-OPEN', 50);
      await sleep(700);

      // Fresh unique credentials to ensure registration proceeds smoothly
      const uniqueSuffix = Math.floor(Math.random() * 900 + 100);
      const tenantUser = `elena_${uniqueSuffix}`;
      const tenantPhone = `0918${Math.floor(Math.random() * 8999999 + 1000000)}`;

      // Form fill: Legal name, phone, username, password
      await humanType(tenantPage, 'input[placeholder*="Elena P. Salvador"]', 'Elena P. Salvador', 40);
      await humanType(tenantPage, 'input[type="tel"]', tenantPhone, 40);
      await humanType(tenantPage, 'input[placeholder*="username"], input[placeholder*="elena_salvador"]', tenantUser, 40);
      await humanType(tenantPage, 'input[type="password"]', 'Ten@ntSecure2026!', 40);
      await sleep(600);

      // Tap "Review Lease & Sign"
      await humanClick(tenantPage, 'button:has-text("Review Lease & Sign")', 1000);

      // Lands on Tenant Portal (Step 4: Review & Sign)
      await tenantPage.waitForSelector('text=Kasulatan sa Abang Clauses', { state: 'visible', timeout: 6000 });
      await sleep(600);

      // Toggle Bisaya Translation
      await humanClick(tenantPage, 'button:has-text("Bisaya Translation")', 900);

      // Check agreement checkbox
      await humanClick(tenantPage, 'input[type="checkbox"]', 600);

      // Auto-Sign with Legal Name
      await humanClick(tenantPage, 'button:has-text("Auto-Sign")', 800);

      // Submit signature
      await humanClick(tenantPage, 'button:has-text("Sign Agreement")', 1200);
    }
  },
  {
    num: '03',
    id: '03-tenant-upload-payment-proof',
    role: 'tenant',
    stepBadge: 'Step 3: Payment Submission & Protection',
    title: 'Tenant Submits GCash Payment Proof',
    subtitle: 'Access PIN strictly locked until landlord confirms funds',
    maxSeconds: 20,
    run: async (landlordPage, tenantPage, appUrl) => {
      await tenantPage.goto(appUrl);
      await tenantPage.waitForSelector('#root', { state: 'visible' });

      // Set up Step 5 GCash Proof submission state
      await tenantPage.evaluate(async () => {
        await window.__appContext.loadDemoPitchData('TENANT');
        const signedContract = {
          code: 'RIP-OPEN',
          roomCode: 'RIP-OPEN',
          roomNumber: 'Room 201 (Corner Studio)',
          propertyAddress: 'Block 4, Lot 12, Mahogany Avenue, Carmen, Cagayan de Oro City',
          propertyType: 'Apartment / Studio Unit',
          monthlyRent: 4500,
          advanceRent: 4500,
          deposit: 4500,
          dueDay: '5th',
          status: 'pending_payment',
          isSigned: true,
          tenantSigned: true,
          paymentVerified: false,
          gcashRef: null,
          accessCode: null
        };
        const sampleReceiptSvg = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="180" style="background:#005ce6;font-family:sans-serif;"><text x="150" y="35" fill="#fff" font-weight="900" font-size="14" text-anchor="middle">GCash E-Receipt</text><rect x="15" y="50" width="270" height="110" rx="10" fill="#fff"/><text x="150" y="90" fill="#0f172a" font-weight="900" font-size="18" text-anchor="middle">PHP 4,500.00</text><text x="150" y="120" fill="#005ce6" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">Ref: 902148192837</text><text x="150" y="142" fill="#64748b" font-size="10" text-anchor="middle">Tan Residence</text></svg>');
        window.__appContext.setActiveCode('RIP-OPEN');
        window.__appContext.setActiveTenantContract(signedContract);
        window.__appContext.setTenantName('Elena P. Salvador');
        window.__appContext.setGcashRefNumber('');
        window.__appContext.setGcashFileData({
          dataUrl: sampleReceiptSvg,
          name: 'gcash_receipt_advance.png',
          size: 245000
        });
        window.__appContext.setCurrentScreen('TENANT_PORTAL');
      });
      await sleep(900);

      // Type unique GCash Reference number into reference input
      const gcashRef = '9021' + Math.floor(Math.random() * 89999999 + 10000000);
      await humanType(tenantPage, 'input[placeholder*="9021481928"], input[type="text"]:last-of-type', gcashRef, 45);
      await sleep(600);

      // Tap "Submit Payment Proof"
      await humanClick(tenantPage, 'button:has-text("Submit Payment Proof")', 1200);

      // Shows verification in progress with door PIN locked (••••) on SuccessPinScreen
      await tenantPage.waitForSelector('text=Door Code is Protected', { state: 'visible', timeout: 6000 });
      await sleep(1800);
    }
  },
  {
    num: '04',
    id: '04-landlord-verify-payment',
    role: 'landlord',
    stepBadge: 'Step 4: Payment Audit & Door PIN Release',
    title: 'Landlord Audits & Verifies Payment',
    subtitle: '5-digit door access code released upon receipt verification',
    maxSeconds: 25,
    run: async (landlordPage, tenantPage, appUrl) => {
      await landlordPage.goto(appUrl);
      await landlordPage.waitForSelector('#root', { state: 'visible' });

      // Landlord dashboard with pending payment
      await landlordPage.evaluate(async () => {
        await window.__appContext.loadDemoPitchData('LANDLORD');
        window.__appContext.setSearchQuery('');
        window.__appContext.setCurrentScreen('LANDLORD_HOME');
      });
      await sleep(1000);

      // Scroll to Action Required banner and click Review & Verify
      await landlordPage.locator('text=Action Required').first().scrollIntoViewIfNeeded();
      await sleep(600);
      await humanClick(landlordPage, 'button:has-text("Review & Verify")', 1000);

      // Tenant Detail screen opens
      await landlordPage.waitForSelector('text=Resident Profile', { state: 'visible', timeout: 6000 });
      await sleep(800);

      // Click to zoom receipt
      await humanClick(landlordPage, 'img[alt*="Receipt"], div[title*="view full size"]', 1100);

      // Close zoom receipt modal by clicking the close button
      await humanClick(landlordPage, 'div.fixed.inset-0 button', 700);

      // Tap "Verify Payment"
      await humanClick(landlordPage, 'button:has-text("Verify Payment")', 800);

      // Confirm release of access code: "Yes, Verify"
      await humanClick(landlordPage, 'button:has-text("Yes, Verify")', 1200);

      // Access PIN released card appears
      await landlordPage.waitForSelector('text=Payment Verified', { state: 'visible', timeout: 6000 });
      await sleep(1800);
    }
  },
  {
    num: '05',
    id: '05-tenant-portal-live-update',
    role: 'tenant',
    stepBadge: 'Step 5: Resident Hub & Access PIN Unlocked',
    title: 'Tenant Hub Updates to Verified Active',
    subtitle: 'Access PIN unlocked with digital Kasulatan & ledger access',
    maxSeconds: 20,
    run: async (landlordPage, tenantPage, appUrl) => {
      await tenantPage.goto(appUrl);
      await tenantPage.waitForSelector('#root', { state: 'visible' });

      // Live update to Verified Active
      await tenantPage.evaluate(async () => {
        await window.__appContext.loadDemoPitchData('TENANT');
        window.__appContext.setCurrentScreen('TENANT_HOME');
      });
      await sleep(900);

      // Verified Active badge visible
      await tenantPage.waitForSelector('text=Verified Active', { state: 'visible', timeout: 5000 });
      await sleep(600);

      // Copy Access PIN 48291
      await humanClick(tenantPage, 'button:has-text("Copy")', 1000);

      // Scroll smoothly down to ledger
      await tenantPage.evaluate(() => window.scrollBy({ top: 320, behavior: 'smooth' }));
      await sleep(1800);
    }
  },
  {
    num: '06',
    id: '06-landlord-search-cross-index',
    role: 'landlord',
    stepBadge: 'Step 6: Unified Search Cross-Indexing',
    title: 'Unified Search Links All Records',
    subtitle: '1 search links PIN, contract, tenant & GCash proof',
    maxSeconds: 15,
    run: async (landlordPage, tenantPage, appUrl) => {
      await landlordPage.goto(appUrl);
      await landlordPage.waitForSelector('#root', { state: 'visible' });

      // Start on Landlord Home
      await landlordPage.evaluate(async () => {
        await window.__appContext.loadDemoPitchData('LANDLORD');
        window.__appContext.setSearchQuery('');
        window.__appContext.setCurrentScreen('LANDLORD_HOME');
      });
      await sleep(800);

      // Search by door PIN "48291"
      await humanType(landlordPage, 'input[placeholder*="Search by room code"], input[placeholder*="Search"]', '48291', 50);
      await sleep(800);

      // Click filtered lease card (Maria Teresa Santos is the active resident with PIN 48291)
      await humanClick(landlordPage, 'text=Maria Teresa Santos', 900);

      // Opens unified record
      await landlordPage.waitForSelector('text=Resident Profile', { state: 'visible', timeout: 6000 });
      await sleep(1500);
    }
  },
  {
    num: '07',
    id: '07-gemini-ai-clause-suggestion',
    role: 'landlord',
    stepBadge: 'Google Gemini 3: Natural Language House Rules',
    title: 'AI Clause Drafting with Gemini 3',
    subtitle: 'Drafts balanced bilingual clauses with landlord review',
    maxSeconds: 20,
    run: async (landlordPage, tenantPage, appUrl) => {
      await landlordPage.goto(appUrl);
      await landlordPage.waitForSelector('#root', { state: 'visible' });

      // Landlord on Customize Lease Presets
      await landlordPage.evaluate(async () => {
        await window.__appContext.loadDemoPitchData('LANDLORD');
        window.__appContext.setCurrentScreen('CUSTOMIZE_LEASE');
      });
      await sleep(900);

      // Open AI Suggest Clause Modal
      await humanClick(landlordPage, 'button:has-text("Suggest Clause")', 900);

      // Types house rules request
      await humanType(
        landlordPage,
        'input[placeholder*="Strict no pets"], input[placeholder*="What clause"]',
        'Quiet hours at 10 PM, visitors allowed until 8 PM only, no overnight guests.',
        35
      );
      await sleep(500);

      // Tap "Draft"
      await humanClick(landlordPage, 'button:has-text("Draft")', 1500);

      // Wait for real Gemini 3 response to render
      await landlordPage.waitForSelector('text=Editable AI Draft', { state: 'visible', timeout: 14000 });
      await sleep(1800);

      // Accept clause into preset
      await humanClick(landlordPage, 'button:has-text("Accept & Insert Clause")', 1200);
    }
  },
  {
    num: '08',
    id: '08-presets-reorder-placeholders',
    role: 'landlord',
    stepBadge: 'Custom Presets & Bilingual Preview',
    title: 'Preset Customizer & Live A4 Preview',
    subtitle: 'Drag & reorder, dynamic placeholders & bilingual preview',
    maxSeconds: 20,
    run: async (landlordPage, tenantPage, appUrl) => {
      await landlordPage.goto(appUrl);
      await landlordPage.waitForSelector('#root', { state: 'visible' });

      // Landlord on Customize Lease Presets
      await landlordPage.evaluate(async () => {
        await window.__appContext.loadDemoPitchData('LANDLORD');
        window.__appContext.setCurrentScreen('CUSTOMIZE_LEASE');
      });
      await sleep(900);

      // Switch preset tab to "Private Room with CR"
      await humanClick(landlordPage, 'button:has-text("Private Room")', 800);

      // Reorder: click move down on clause 2
      await humanClick(landlordPage, 'button[title="Move Down"]', 700);

      // Edit clause: open editor
      await humanClick(landlordPage, 'button[title="Edit Clause"]', 800);
      await landlordPage.waitForSelector('text=Edit Lease Clause', { state: 'visible', timeout: 5000 });
      await sleep(500);

      // Fill clause title
      await humanType(landlordPage, 'input[placeholder*="Visitors & Curfew"]', 'Payment Due & Utilities Policy', 35);
      await sleep(400);

      // Insert placeholder {{due_day}}
      await humanClick(landlordPage, 'button:has-text("{{due_day}}")', 700);

      // Save clause inside modal
      await humanClick(landlordPage, 'button:has-text("Save Clause")', 800);
      await landlordPage.locator('text=Edit Lease Clause').waitFor({ state: 'detached', timeout: 5000 });
      await sleep(600);

      // Open Live Preview Modal: "Live Preview"
      await humanClick(landlordPage, 'button:has-text("Live Preview")', 900);
      await landlordPage.waitForSelector('text=Kasulatan Live Preview', { state: 'visible', timeout: 5000 });

      // Scroll smoothly down the bilingual preview
      await landlordPage.evaluate(() => {
        const modal = document.querySelector('.overflow-y-auto');
        if (modal) modal.scrollBy({ top: 300, behavior: 'smooth' });
      });
      await sleep(1800);
    }
  }
];

// =========================================================================
// ROUGH-CUT CONCATENATION & TITLE CARD GENERATION
// =========================================================================

async function assembleRoughCut(browser) {
  console.log('\n========================================================================');
  console.log('  🎬 ASSEMBLING ROUGH CUT VIDEO TRACK (docs/video/rough-cut.mp4)');
  console.log('========================================================================\n');

  const concatListPath = path.resolve(TEMP_DIR, 'concat_list.txt');
  const concatLines = [];

  // 1. Intro Card (2.5s)
  const introPng = path.resolve(TEMP_DIR, 'card-intro.png');
  const introMp4 = path.resolve(TEMP_DIR, 'card-intro.mp4');
  await generateTitleCardPng(browser, {
    sceneNumber: 'INTRO',
    stepBadge: 'GDG Cagayan de Oro Pitching Competition',
    title: 'Rent in Peace',
    subtitle: 'Software-Only Lease & Payment-Ledger Web App for Boarding Houses',
    outputPath: introPng
  });
  execFileSync(ffmpegPath, [
    '-y', '-loop', '1', '-i', introPng, '-c:v', 'libx264', '-t', '2.5',
    '-pix_fmt', 'yuv420p', '-r', '30', introMp4
  ], { stdio: 'ignore' });
  concatLines.push(`file '${introMp4.replace(/\\/g, '/')}'`);

  // 2. Add each scene title card + clip
  for (const scene of SCENES) {
    const finalMp4 = path.resolve(CLIPS_DIR, `${scene.id}.mp4`);
    if (!fs.existsSync(finalMp4)) {
      console.warn(`  ⚠️ Skipping missing scene: ${scene.id}.mp4`);
      continue;
    }

    const cardPng = path.resolve(TEMP_DIR, `card-${scene.num}.png`);
    const cardMp4 = path.resolve(TEMP_DIR, `card-${scene.num}.mp4`);
    await generateTitleCardPng(browser, {
      sceneNumber: scene.num,
      stepBadge: scene.stepBadge,
      title: scene.title,
      subtitle: scene.subtitle,
      outputPath: cardPng
    });
    execFileSync(ffmpegPath, [
      '-y', '-loop', '1', '-i', cardPng, '-c:v', 'libx264', '-t', '1.8',
      '-pix_fmt', 'yuv420p', '-r', '30', cardMp4
    ], { stdio: 'ignore' });

    concatLines.push(`file '${cardMp4.replace(/\\/g, '/')}'`);
    concatLines.push(`file '${finalMp4.replace(/\\/g, '/')}'`);
  }

  // 3. Outro Card (2.5s)
  const outroPng = path.resolve(TEMP_DIR, 'card-outro.png');
  const outroMp4 = path.resolve(TEMP_DIR, 'card-outro.mp4');
  await generateTitleCardPng(browser, {
    sceneNumber: 'OUTRO',
    stepBadge: 'Impact Across Northern Mindanao',
    title: 'Rent in Peace: Peace of Mind for All',
    subtitle: 'Zero hardware · 100% Mobile PWA · Daghang Salamat GDG CDO!',
    outputPath: outroPng
  });
  execFileSync(ffmpegPath, [
    '-y', '-loop', '1', '-i', outroPng, '-c:v', 'libx264', '-t', '2.5',
    '-pix_fmt', 'yuv420p', '-r', '30', outroMp4
  ], { stdio: 'ignore' });
  concatLines.push(`file '${outroMp4.replace(/\\/g, '/')}'`);

  fs.writeFileSync(concatListPath, concatLines.join('\n'), 'utf8');

  const roughCutOutput = path.resolve(DOCS_DIR, 'rough-cut.mp4');
  execFileSync(ffmpegPath, [
    '-y',
    '-f', 'concat',
    '-safe', '0',
    '-i', concatListPath,
    '-c:v', 'libx264',
    '-preset', 'fast',
    '-crf', '21',
    '-pix_fmt', 'yuv420p',
    '-r', '30',
    '-an',
    roughCutOutput
  ], { stdio: 'ignore' });

  mirrorFileToParent('rough-cut.mp4', '');
  console.log(`\n  ✅ Rough cut successfully assembled: ${roughCutOutput}`);
}

// =========================================================================
// MAIN RUNNER
// =========================================================================

async function main() {
  const args = process.argv.slice(2);
  let targetScene = null;
  let assembleOnly = false;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--scene' || args[i] === '-s') {
      targetScene = args[i + 1]?.padStart(2, '0');
    } else if (args[i].startsWith('--scene=')) {
      targetScene = args[i].split('=')[1]?.padStart(2, '0');
    } else if (args[i] === '--assemble') {
      assembleOnly = true;
    }
  }

  const browserPath = findBrowserBinary();
  if (!browserPath) {
    console.error('❌ Chromium / Edge browser binary not found.');
    process.exit(1);
  }

  const port = await findActivePort();
  const appUrl = `http://localhost:${port}`;
  console.log(`Connecting to app server at: ${appUrl}`);

  const browser = await chromium.launch({
    executablePath: browserPath,
    headless: true
  });

  if (assembleOnly) {
    await assembleRoughCut(browser);
    await browser.close();
    return;
  }

  const scenesToRecord = targetScene
    ? SCENES.filter((s) => s.num === targetScene)
    : SCENES;

  if (scenesToRecord.length === 0) {
    console.error(`❌ Scene ${targetScene} not found. Available scenes: 01 through 08`);
    await browser.close();
    process.exit(1);
  }

  console.log('\n========================================================================');
  console.log(`  🎥 RECORDING ${scenesToRecord.length} SCENE(S) (Viewport: 390x844 @ DPR 2)`);
  console.log('========================================================================\n');

  let totalDurationSec = 0;

  for (const scene of scenesToRecord) {
    console.log(`▶ Recording Scene ${scene.num}: ${scene.title}...`);

    const rawRecordDir = path.resolve(TEMP_DIR, `raw_${scene.num}`);
    if (fs.existsSync(rawRecordDir)) {
      fs.rmSync(rawRecordDir, { recursive: true, force: true });
    }
    fs.mkdirSync(rawRecordDir, { recursive: true });

    // 1. Two separate browser contexts for Landlord and Tenant, matching viewport to recording size
    const isTenantScene = scene.role === 'tenant';
    const landlordDir = path.resolve(rawRecordDir, 'landlord');
    const tenantDir = path.resolve(rawRecordDir, 'tenant');
    fs.mkdirSync(landlordDir, { recursive: true });
    fs.mkdirSync(tenantDir, { recursive: true });

    const landlordContext = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 2,
      recordVideo: {
        dir: landlordDir,
        size: { width: 390, height: 844 }
      }
    });
    await injectRipple(landlordContext);

    const tenantContext = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 2,
      recordVideo: {
        dir: tenantDir,
        size: { width: 390, height: 844 }
      }
    });
    await injectRipple(tenantContext);

    const landlordPage = await landlordContext.newPage();
    const tenantPage = await tenantContext.newPage();

    const activePage = isTenantScene ? tenantPage : landlordPage;
    const activeVideo = activePage.video();

    const startTime = Date.now();

    // 2. Execute scene automation
    try {
      await scene.run(landlordPage, tenantPage, appUrl);
    } catch (err) {
      console.error(`  ❌ Error executing scene ${scene.num}:`, err.message);
    }

    // 3. Close pages and contexts to finalize video
    await landlordPage.close();
    await tenantPage.close();
    await tenantContext.close();
    await landlordContext.close();

    const elapsedSec = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`  Recorded in ${elapsedSec}s (Constraint: Max ${scene.maxSeconds}s)`);

    // 4. Get active video path
    const rawWebmPath = await activeVideo.path();

    // 5. Generate transparent lower-third PNG
    const lowerThirdPngPath = path.resolve(TEMP_DIR, `lower_third_${scene.num}.png`);
    await generateLowerThirdPng(browser, {
      sceneNumber: scene.num,
      stepBadge: scene.stepBadge,
      title: scene.title,
      subtitle: scene.subtitle,
      outputPath: lowerThirdPngPath
    });

    // 6. Post-process to MP4 with lower third
    const finalMp4Path = path.resolve(CLIPS_DIR, `${scene.id}.mp4`);
    postProcessClip(rawWebmPath, lowerThirdPngPath, finalMp4Path);
    mirrorFileToParent(`${scene.id}.mp4`, 'clips');

    // 7. Extract verification frames
    extractVerificationFrames(finalMp4Path, scene.id);

    console.log(`  ✔ Saved: docs/video/clips/${scene.id}.mp4`);
    totalDurationSec += parseFloat(elapsedSec);
  }

  // If all scenes recorded, assemble rough cut
  if (!targetScene || targetScene === 'all') {
    await assembleRoughCut(browser);
    console.log(`\n🎉 Total clip footage recorded: ~${totalDurationSec.toFixed(0)}s (Constraint: < 180s total)`);
  }

  await browser.close();
  console.log('\n========================================================================');
  console.log('  ✨ RECORDING RUN COMPLETED SUCCESSFULLY');
  console.log('========================================================================\n');
}

main().catch((err) => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
