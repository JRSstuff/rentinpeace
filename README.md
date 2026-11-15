# <p align="center"><img src="public/assets/logo-full.png" alt="Rent in Peace" width="400"/></p>

<p align="center">
  <strong>Autonomous Residential Lease & Digital Rental Ledger Platform for Philippine Boarding Houses</strong><br>
  <em>Built for Google Developer Group (GDG) Cagayan de Oro · Road to DevFest 2026 Buildathon</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Zero--Hardware%20PWA-14532D?style=for-the-badge&logo=pwa" alt="Zero-Hardware PWA" />
  <img src="https://img.shields.io/badge/AI%20Engine-Gemini%203.5%20Flash%20Lite-4285F4?style=for-the-badge&logo=google" alt="Gemini 3.5 Flash Lite" />
  <img src="https://img.shields.io/badge/Target-4.8M%20Bedspaces%20(PH)-16A34A?style=for-the-badge" alt="4.8M Bedspaces" />
  <img src="https://img.shields.io/badge/Stack-React%2019%20%7C%20Vite%208.3%20%7C%20Firebase-F1AE17?style=for-the-badge" alt="React Vite Firebase" />
  <a href="#-interactive-pitch-video--end-to-end-demo-walkthrough"><img src="https://img.shields.io/badge/🎬%20Watch%20Demo-1m%2050s%20Video-0F172A?style=for-the-badge" alt="Watch Demo Video" /></a>
</p>

---

## 🌟 Executive Pitch & The 30-Second Stage Hook

> **The Stage Hook:**
> *"In the Philippines, 4.8 million students and workers live in informal boarding houses, bedspaces, and dorms transacting over \$1.2 Billion annually. Yet, 90% of these rentals run on verbal promises, scrap paper notebooks, lost keys, and fake GCash screenshots. Existing property management tech requires expensive US smart locks and \$200 monthly fees. **Rent in Peace** is the world's first **100% software-only, zero-hardware lease and rental ledger platform** built for Philippine reality. Powered by **Google Gemini 3 (Gemini 3.5 Flash Lite / 3.1 Flash Lite)**, it turns plain house rules into single-page bilingual A4 Kasulatan agreements, audits GCash payments, and releases digital door keypad PINs—working seamlessly with ₱800 Shopee keypad locks without a single wire or IoT hub."*

---

## 🎬 Interactive Pitch Video & End-to-End Demo Walkthrough

> 💡 **Pitch Competition Live Recording**: Recorded on mobile viewport (390×844 @ 2x DPR) following our strict 4:30 pitch timeline for the **GDG Cagayan de Oro Pitching Competition**. Below you can watch the complete master video track or explore each interactive scene with animated live recordings, real-time backend synchronization, and stage voiceover cues.

<p align="center">
  <a href="docs/video/rough-cut.mp4">
    <img src="docs/video/frames/intro-card-rounded.png" width="300" alt="Watch Master Pitch Video" style="border-radius: 20px; box-shadow: 0 12px 32px rgba(0,0,0,0.45);" />
  </a>
  <br><br>
  <a href="docs/video/rough-cut.mp4">
    <img src="https://img.shields.io/badge/▶️%20Master%20Pitch%20Video-1m%2050s%20Cut%20(780x1688)-14532D?style=for-the-badge&logo=youtube&logoColor=F1AE17" alt="Watch Master Pitch Video" />
  </a>
  <a href="docs/video/script.md">
    <img src="https://img.shields.io/badge/🎙️%20Pitch%20Script-4:30%20(584%20Words)-4285F4?style=for-the-badge" alt="Pitch Script" />
  </a>
  <a href="docs/video/shotlist.md">
    <img src="https://img.shields.io/badge/📋%20Cue%20Sheet-8%20Scenes%20Mapped-16A34A?style=for-the-badge" alt="Shotlist" />
  </a>
</p>

### 📱 Interactive Scene-by-Scene Flow Explorer

<details open>
<summary><b>🎬 Scene 01: Landlord Creates Bilingual Kasulatan & Room Code (0:00 - 0:16)</b></summary>

<br>

<table>
<tr>
<td width="300" align="center" valign="top">
  <a href="docs/video/clips/01-landlord-create-lease.mp4">
    <img src="docs/video/gifs/01-create-lease.gif" width="260" alt="Scene 01 Live Action" style="border-radius: 16px; box-shadow: 0 4px 14px rgba(0,0,0,0.25);" />
  </a>
  <br><br>
  <a href="docs/video/clips/01-landlord-create-lease.mp4"><b>▶️ Watch Clip 01 (16.0s MP4)</b></a>
</td>
<td valign="top">

#### 👑 Role: Landlord Operator

- **📱 User Flow**: Engr. Roberto Tan enters unit identifier (`Unit 4`), sets financial terms (`₱3,500/mo`, 1 mo advance, 1 mo deposit), and taps *Generate Kasulatan*.
- **🤖 Gemini AI Integration**: Google Gemini 3.5 Flash Lite generates a tailored 7-clause bilingual agreement in English and Sinugbuanong Binisaya engineered strictly for single-page A4 bond paper fit.
- **✍️ Digital E-Signing**: Landlord signs directly on screen and taps *Save*.
- **🔑 Cryptographic Output**: Lease document is committed with status `open`. The platform generates a unique 8-character Room Code (`RIP-OPEN`) and shareable link.
- **🎙️ Stage Voiceover**:
  > *"Engr. Tan opens the app, enters Unit 4 for ₱3,500, and taps Generate. In seconds, Gemini formats a single-page bilingual Kasulatan in English and Bisaya. He signs right on screen, hits Save, and instantly gets a room code and share link. No paper, no lawyer needed."*
- **💡 Key Advantage**: No room code or link exists prior to digital signing. Contract text is permanently frozen against tampering.

</td>
</tr>
</table>

</details>

<details open>
<summary><b>🎬 Scene 02: Tenant Joins with Room Code, Toggles Bisaya & E-Signs (0:16 - 0:33)</b></summary>

<br>

<table>
<tr>
<td width="300" align="center" valign="top">
  <a href="docs/video/clips/02-tenant-join-register-sign.mp4">
    <img src="docs/video/gifs/02-tenant-sign.gif" width="260" alt="Scene 02 Live Action" style="border-radius: 16px; box-shadow: 0 4px 14px rgba(0,0,0,0.25);" />
  </a>
  <br><br>
  <a href="docs/video/clips/02-tenant-join-register-sign.mp4"><b>▶️ Watch Clip 02 (16.7s MP4)</b></a>
</td>
<td valign="top">

#### 👤 Role: Tenant Resident

- **📱 User Flow**: Elena opens the shared link or enters room code `RIP-OPEN`. Registers account with full legal name, phone, and strong password.
- **🌐 Bilingual Toggle**: Elena toggles the contract view from English to Sinugbuanong Binisaya to understand curfews, utilities, and deposit terms in her native tongue.
- **✍️ Digital E-Signing**: Checks statutory acknowledgment and signs using touchscreen.
- **⚡ Status Transition**: Firestore updates lease status from `open` to `pending_payment`. Tenant slot is locked exclusively to Elena; duplicate attempts are blocked.
- **🎙️ Stage Voiceover**:
  > *"Elena opens the link, registers with a secure password, and toggles the contract to Bisaya so she understands every single house rule. She signs on her phone. Status shifts to pending payment. The room is locked to her alone."*
- **💡 Key Advantage**: Eliminates verbal ambiguity (*"sabot-sabot"*) by ensuring tenants understand terms before paying any move-in cash.

</td>
</tr>
</table>

</details>

<details>
<summary><b>🎬 Scene 03: Tenant Submits GCash Payment Proof (0:33 - 0:42)</b></summary>

<br>

<table>
<tr>
<td width="300" align="center" valign="top">
  <a href="docs/video/clips/03-tenant-upload-payment-proof.mp4">
    <img src="docs/video/gifs/03-payment-upload.gif" width="260" alt="Scene 03 Live Action" style="border-radius: 16px; box-shadow: 0 4px 14px rgba(0,0,0,0.25);" />
  </a>
  <br><br>
  <a href="docs/video/clips/03-tenant-upload-payment-proof.mp4"><b>▶️ Watch Clip 03 (8.9s MP4)</b></a>
</td>
<td valign="top">

#### 👤 Role: Tenant Resident

- **📱 User Flow**: Elena sends initial move-in payment (₱7,000 for advance + deposit) via GCash to the landlord's QR/number.
- **📸 Receipt Upload**: Uploads GCash transaction screenshot and inputs 12-digit reference number (`902148192837`).
- **🛡️ Anti-Duplicate Audit**: System checks reference against global payments collection to prevent recycled screenshot scams.
- **🔒 Security Gating**: Status shifts to `pending_verification`. Elena's screen displays *"Waiting for verification"*—the door access code remains strictly hidden.
- **🎙️ Stage Voiceover**:
  > *"Elena pays via GCash and uploads the receipt with the reference number. Her screen shows 'Waiting for Verification'—and notice, no door code appears yet. Fake screenshots cannot get past this gate."*
- **💡 Key Advantage**: Physical keypads and door codes are never released on trust; proof is auditable and time-stamped.

</td>
</tr>
</table>

</details>

<details open>
<summary><b>🎬 Scene 04: Landlord Audits Payment & Cryptographic Door PIN Issued (0:42 - 0:53)</b></summary>

<br>

<table>
<tr>
<td width="300" align="center" valign="top">
  <a href="docs/video/clips/04-landlord-verify-payment.mp4">
    <img src="docs/video/gifs/04-verify-payment.gif" width="260" alt="Scene 04 Live Action" style="border-radius: 16px; box-shadow: 0 4px 14px rgba(0,0,0,0.25);" />
  </a>
  <br><br>
  <a href="docs/video/clips/04-landlord-verify-payment.mp4"><b>▶️ Watch Clip 04 (11.2s MP4)</b></a>
</td>
<td valign="top">

#### 👑 Role: Landlord Operator

- **🔔 Action Required Alert**: Engr. Tan's dashboard displays a prominent Amber Gold alert badge notifying him of Elena's payment.
- **🔍 Modal Receipt Inspection**: Landlord opens the payment modal, inspects high-res receipt screenshot with interactive zoom, and checks the reference number against bank SMS notifications.
- **✅ Verification Action**: Landlord taps *"Verify Payment & Issue Access Code"*.
- **🔐 Cryptographic Gate Release**: Backend generates a random 5-digit door PIN (`48291`) tied to this specific lease, tenant, and payment.
- **🎙️ Stage Voiceover**:
  > *"On Engr. Tan's dashboard, an 'Action Required' alert pops up. He inspects the receipt and taps Verify. Instantly, a secure 5-digit door access code is generated on his screen. The contract, tenant, and payment are now permanently tied together."*
- **💡 Key Advantage**: Landlords retain complete verification authority before door access is granted—zero hardware hubs required.

</td>
</tr>
</table>

</details>

<details>
<summary><b>🎬 Scene 05: Tenant Resident Portal Live Update (Real-Time Sync) (0:53 - 0:58)</b></summary>

<br>

<table>
<tr>
<td width="300" align="center" valign="top">
  <a href="docs/video/clips/05-tenant-portal-live-update.mp4">
    <img src="docs/video/gifs/05-live-sync.gif" width="260" alt="Scene 05 Live Action" style="border-radius: 16px; box-shadow: 0 4px 14px rgba(0,0,0,0.25);" />
  </a>
  <br><br>
  <a href="docs/video/clips/05-tenant-portal-live-update.mp4"><b>▶️ Watch Clip 05 (4.9s MP4)</b></a>
</td>
<td valign="top">

#### 👤 Role: Tenant Resident

- **⚡ Zero-Reload Live Sync**: Without refreshing the page, Firestore's document listener detects status change to `active`.
- **🔓 Keypad PIN Unlocked**: Elena's screen immediately transitions to *"Verified Active"*, revealing door PIN `48291` with a one-tap copy button.
- **📄 Complete Resident Hub**: Maria can view her room assignment (`Room 201`), access her signed bilingual Kasulatan, and review logged payment transactions.
- **🎙️ Stage Voiceover**:
  > *"Without refreshing, Elena's phone updates live. She sees her verified status, her door access code, and her full contract. She can now punch the code into the keypad lock and move in."*
- **💡 Key Advantage**: Frictionless resident onboarding with instantaneous feedback, even over 3G mobile connections.

</td>
</tr>
</table>

</details>

<details>
<summary><b>🎬 Scene 06: Unified Cross-Index Search (0:58 - 1:04)</b></summary>

<br>

<table>
<tr>
<td width="300" align="center" valign="top">
  <a href="docs/video/clips/06-landlord-search-cross-index.mp4">
    <img src="docs/video/gifs/06-search.gif" width="260" alt="Scene 06 Live Action" style="border-radius: 16px; box-shadow: 0 4px 14px rgba(0,0,0,0.25);" />
  </a>
  <br><br>
  <a href="docs/video/clips/06-landlord-search-cross-index.mp4"><b>▶️ Watch Clip 06 (5.7s MP4)</b></a>
</td>
<td valign="top">

#### 👑 Role: Landlord Operator

- **🔎 Instant Search Filter**: Landlord types door access PIN `48291` into the dashboard search bar.
- **🔗 Relational Linking**: System queries across leases, tenants, and payment records simultaneously.
- **📋 Unified Resolution**: Immediately surfaces the contract, tenant identity, unit details, and verified GCash transaction in under 100ms.
- **🎙️ Stage Voiceover**:
  > *"Months later, if anyone asks about a tenant or a payment, Engr. Tan just types the door code into search. The contract, the tenant profile, and every single receipt appear in one click."*
- **💡 Key Advantage**: Solves the #1 problem of lost receipts and paper logbooks; every physical door PIN is an immutable audit key.

</td>
</tr>
</table>

</details>

<details open>
<summary><b>🎬 Scene 07: Google Gemini AI Bilingual Clause Assistant (1:04 - 1:17)</b></summary>

<br>

<table>
<tr>
<td width="300" align="center" valign="top">
  <a href="docs/video/clips/07-gemini-ai-clause-suggestion.mp4">
    <img src="docs/video/gifs/07-gemini-ai.gif" width="260" alt="Scene 07 Live Action" style="border-radius: 16px; box-shadow: 0 4px 14px rgba(0,0,0,0.25);" />
  </a>
  <br><br>
  <a href="docs/video/clips/07-gemini-ai-clause-suggestion.mp4"><b>▶️ Watch Clip 07 (13.3s MP4)</b></a>
</td>
<td valign="top">

#### 👑 Role: Landlord Operator

- **🤖 Natural Language Prompting**: Landlord types plain house rules: *"Visitors allowed until 8 PM only. No loud music or karaoke after 10 PM."*
- **⚡ Google Gemini 3 Cascade**: Gemini 3.5 Flash Lite generates a balanced legal clause pair in English and Sinugbuanong Binisaya with sub-second latency.
- **📏 Single-Page A4 Budget**: Prompt constraints prevent clause bloating so the physical Kasulatan never spills over onto a second page.
- **✍️ Landlord Review Gate**: Landlord reviews the generated wording, makes optional edits, and confirms insertion. AI never auto-commits without human sign-off.
- **🎙️ Stage Voiceover**:
  > *"Every boarding house has unique rules. Engr. Tan types 'No visitors after 8 PM, no loud karaoke after 10.' Gemini drafts the exact legal clause in English and Bisaya. He reviews it, confirms, and it's added. He stays in full control."*
- **💡 Key Advantage**: Democratizes legal drafting for non-lawyer boarding house operators while preserving regional Bisaya fluency.

</td>
</tr>
</table>

</details>

<details>
<summary><b>🎬 Scene 08: Preset Library, Clause Reordering & Custom Placeholders (1:17 - 1:30)</b></summary>

<br>

<table>
<tr>
<td width="300" align="center" valign="top">
  <a href="docs/video/clips/08-presets-reorder-placeholders.mp4">
    <img src="docs/video/gifs/08-presets.gif" width="260" alt="Scene 08 Live Action" style="border-radius: 16px; box-shadow: 0 4px 14px rgba(0,0,0,0.25);" />
  </a>
  <br><br>
  <a href="docs/video/clips/08-presets-reorder-placeholders.mp4"><b>▶️ Watch Clip 08 (12.6s MP4)</b></a>
</td>
<td valign="top">

#### 👑 Role: Landlord Operator

- **📚 Preset Library**: Choose between *Bedspace*, *Private Room with Bath*, or *Studio Apartment* templates.
- **🔄 Visual Clause Reordering**: Move clauses up and down with instant visual re-indexing.
- **🏷️ Dynamic Placeholders**: Insert tokens (`{{monthly_rent}}`, `{{unit_identifier}}`, `{{tenant_name}}`) that populate dynamically on lease creation.
- **👁️ Live A4 Preview**: Launch the bilingual preview modal to inspect the exact printable document layout before saving.
- **🎙️ Stage Voiceover**:
  > *"Landlords can choose from presets for bedspaces, private rooms, or apartments, edit clauses, insert placeholders like tenant name, and live-preview the exact A4 layout in both languages."*
- **💡 Key Advantage**: High flexibility for diverse Philippine boarding house setups—from multi-bed dormitories to self-contained studio rentals.

</td>
</tr>
</table>

</details>

---

## 🎤 Official Stage Pitch Deck (DevFest 2026 Presentation)

### 📊 Slide 1: The Invisible Housing Giant of the Philippines
- **4.8 Million Filipinos** live in informal boarding houses, bedspaces, and dormitories across university belts and urban hubs (*Cagayan de Oro, Metro Manila U-Belt, Cebu IT Park, Davao, Iloilo, Baguio*).
- **₱65 Billion ($1.2 Billion USD)** transacts annually in this informal rental economy—almost exclusively through unrecorded cash handovers, verbal *"sabot-sabot"*, and unverified GCash screenshots sent over Facebook Messenger.
- **The Mom-and-Pop Reality:** 92% of boarding house operators are retired teachers, Overseas Filipino Worker (OFW) families, or local homeowners managing 3 to 15 beds. They cannot afford enterprise software (DoorLoop, Buildium) or \$250 IoT smart lock hardware that requires reliable Wi-Fi and electric installation.

---

### 💥 Slide 2: The Triple Pain Points (The "Usapang Lalaki" Trap)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                    THE ARCHAIC BOARDING HOUSE BREAKDOWN                      │
├──────────────────────────┬──────────────────────────┬────────────────────────┤
│ 1. The Deposit Trap      │ 2. The Rule Ambiguity    │ 3. The Key & Fraud Trap│
│   #1 Barangay dispute    │   Unwritten curfews,     │   Lost keys cost ₱800+ │
│   in university towns;   │   unauthorized guests,   │   lock replacements;   │
│   landlords withhold     │   unmetered electric     │   fake or recycled     │
│   deposits with no proof │   surcharges & fights    │   GCash references     │
└──────────────────────────┴──────────────────────────┴────────────────────────┘
```

1. **The Disputed Security Deposit (#1 Barangay Lupon Case):** When a student moves out, landlords frequently invent deductions or claim the deposit was *"consumable"*, leaving students without the funds needed for their next dorm.
2. **House Rule Ambiguity & Electric Bill Shock:** Unwritten rules about 10:00 PM curfews, unauthorized sleepovers (*"nakikitulog na bisita"*), and informal electricity splits (*"₱15 per kilowatt without sub-meter receipt"*) lead to constant hostility.
3. **Missing Receipts & Insecure Key Handovers:** Tenants lose GCash reference SMS messages; landlords spend hours scrolling through personal bank notifications to reconcile payments; physical keys are left under doormats, and when a tenant moves out, the landlord must replace the entire padlock.

---

### 💡 Slide 3: The Breakthrough — 100% Software-Only Architecture

Instead of requiring expensive IoT locks connected to cloud servers, Rent in Peace pairs with **affordable mechanical or battery-powered keypad door locks (₱700–₱1,200 on Shopee/Lazada)**.

The software platform acts as the **cryptographic access gatekeeper**:
1. **Bilingual A4 Kasulatan Generator**: Landlord creates a legally grounded agreement in English and Bisaya in under 2 minutes.
2. **Gemini 3.5 Flash Lite AI Customizer**: Landlord enters plain house rules; Gemini drafts single-page A4 clauses.
3. **Frictionless Mobile E-Signing**: Tenant joins via 8-character Room Code (`RIP-OPEN`) and signs on their phone.
4. **Anti-Duplicate GCash Audit**: Tenant submits payment proof; landlord verifies the reference against their bank statement.
5. **Keypad Access PIN Release**: Once verified, the system generates a unique 5-digit door PIN (`48291`) revealed to the tenant for keyless move-in. Landlord can revoke or regenerate the PIN at any time.

---

### 👑 Slide 4: Landlord Operational Hub & End-to-End Flow

<p align="center">
  <img src="docs/pitch/landlord-flow.png" alt="Landlord Flow Overview" width="100%"/>
</p>

1. **Register & Dashboard Setup**: Landlord signs up with full name, contact, and property address. Password strength is evaluated live.
2. **Lease Drafting**: Landlord picks a property type, inputs unit number and financial terms (e.g. ₱3,500/mo, 1 month advance, 1 month deposit).
3. **Kasulatan Customization**: Review 7 bilingual clauses in English and Bisaya. Reorder or edit terms to fit single-page A4.
4. **Publish & Share Room Code**: Agreement is finalized; platform generates a permanent 8-character code (`RIP-XXXX`) and copyable invite link.
5. **GCash Audit & Verification**: When tenant submits payment, the Action Required alert opens receipt zoom. Landlord taps "Verify & Release Code".
6. **Keypad PIN Issued**: A secure 5-digit PIN is generated and linked to the contract.

---

### 👤 Slide 5: Tenant Resident Journey & Frictionless Move-In

<p align="center">
  <img src="docs/pitch/tenant-flow.png" alt="Tenant Flow Overview" width="100%"/>
</p>

1. **Join Unit**: Tenant enters the room code or clicks the shared invite link. Property and rent terms populate automatically.
2. **Read & E-Sign**: Tenant toggles between English and Bisaya explanations, agrees to terms, and signs on-screen.
3. **Pay Initial Rent**: Tenant sends GCash transfer to landlord's QR/number, uploads receipt screenshot, and inputs reference number.
4. **Waiting State**: Door PIN is locked while landlord audits payment.
5. **Instant Move-In**: Upon landlord verification, the door PIN unlocks with a single tap to copy for keypad entry.

---

### 🤖 Slide 6: The AI Legal Moat — Google Gemini 3.5 Flash Lite

```
[Landlord Input] ➔ "Curfew at 10 PM. Visitors allowed until 8 PM only. No overnight guests."
                           │
                           ▼
[Model 1: Gemini 3.5 Flash Lite (500 RPD, 15 RPM)] ➔ Fast Primary Engine
   │ (Transient error or 429)
   ▼
[Model 2: Gemini 3.1 Flash Lite (500 RPD, 15 RPM)] ➔ Automated Secondary Failover
   │ (Transient error or 429)
   ▼
[Model 3: Gemini 3 Flash Preview (20 RPD, 5 RPM)]  ➔ Tertiary Failover
                           │
                           ▼
[Editable Bilingual Clause Pair]
├── English: "The Lessee agrees to observe quiet hours starting at 10:00 PM. Visitors are permitted..."
└── Sinugbuanong Binisaya: "Ang Umuupa mouyon sa pagtahod sa takna sa kalinaw sugod sa alas 10:00 sa gabii..."
                           │
                           ▼
[Landlord Explicit Review & Confirmation] (Never auto-inserted without review)
```

- **Sub-Second Latency**: Generates bilingual clauses in under 800ms directly on the client.
- **Native Bisaya Understanding**: Correctly translates nuanced regional terminology (*"Umuupa"*, *"Nagpaabang"*, *"Abang"*, *"Pahibalo"*).
- **Strict Single-Page A4 Guarantee**: The system prompt budgets clause length to ensure printed contracts never spill onto a second sheet of bond paper.
- **Responsible AI Disclaimer**: Never makes false claims of statutory enforceability or legal representation; clearly advises the landlord to review all terms.

---

### 📈 Slide 7: Market Opportunity & Unit Economics

| Total Addressable Market (TAM) | Serviceable Addressable Market (SAM) | Serviceable Obtainable Market (SOM) |
|:---:|:---:|:---:|
| **₱65 Billion ($1.2B)**<br>4.8M informal renters in the Philippines | **₱18 Billion ($330M)**<br>1.2M bedspaces in university & BPO hubs | **₱54 Million ($1M)**<br>25,000 boarding house rooms in Year 1 |

- **Freemium Tier (100% Free Forever)**: Up to 3 rooms free. Zero friction for small mom-and-pop landladies.
- **Pro Landlord Subscription (₱199/month or ₱1,999/year)**: Unlimited units, Gemini AI Kasulatan generation, custom preset library, and multi-month accounting export.
- **Smart Lockbox Hardware Affiliate (₱120 per unit)**: 10% commission on ₱1,200 Shopee/Lazada mechanical keypad lockboxes and keypad locks recommended inside the app.
- **Unit Economics**: CAC: ₱150 · ARPU: ₱199/mo · LTV: ₱4,776 (24-mo retention) · **LTV / CAC: 31.8x**!

---

### 🏆 Slide 8: Competitive Moat

| Feature | Rent in Peace | US Property SaaS (DoorLoop, Buildium) | Manual Paper / Excel | Facebook Messenger + GCash |
|---|:---:|:---:|:---:|:---:|
| **Hardware Required** | **₱0 (Software-Only)** | \$250+ IoT Smart Lock per door | None | None |
| **Monthly Pricing** | **Free / ₱199/mo** | \$200+/month | Free | Free |
| **Bilingual A4 Kasulatan** | **✅ English + Bisaya** | ❌ English only | ❌ Hand-written | ❌ None |
| **AI Clause Assistant** | **✅ Gemini 3.5 Flash Lite** | ❌ None | ❌ None | ❌ None |
| **Door Access Keypad Gating**| **✅ Cryptographic PIN** | ❌ Requires Cloud IoT Hub | ❌ Physical keys | ❌ None |
| **Offline PWA Support** | **✅ Works on 3G / Offline**| ❌ Heavy Cloud App | ❌ Vulnerable paper | ❌ Needs Internet |
| **Philippine Rent Control Cap**| **✅ Built-in Alert** | ❌ US Law Only | ❌ None | ❌ None |

---

## 📱 Complete Presentation Gallery (High-Resolution Widescreen Slides)

All 18 slides have been captured with side-by-side pitch explanations and large, crisp mobile app mockups (`docs/pitch/*-framed.png`):

### 👑 Landlord Operational Flow

| Step & Slide | Widescreen Presentation Slide | Key Takeaways & Actions |
|---|:---:|---|
| **01. Welcome Splash** | <img src="docs/pitch/01-welcome-splash-framed.png" width="100%"/> | Civil Code Art. 1356 legal foundation, distinct role portals, and offline PWA capability. |
| **02. Landlord Auth** | <img src="docs/pitch/02-landlord-auth-framed.png" width="100%"/> | Live password entropy scoring (zxcvbn), self-serve password reset, and secure session management. |
| **03. Landlord Dashboard** | <img src="docs/pitch/03-landlord-dashboard-framed.png" width="100%"/> | Live monthly rent roll (₱13,000/mo), Action Required verification alert banner, and room code sharing. |
| **04. Property Type** | <img src="docs/pitch/04-lease-property-type-framed.png" width="100%"/> | Step 1 of lease wizard: select between Bedspace, Private Room with Bath, or Studio Apartment. |
| **05. Contract Basics** | <img src="docs/pitch/05-lease-basics-form-framed.png" width="100%"/> | Step 2: enter unit identifier, property address, monthly rent, and automated advance/deposit calculation. |
| **06. Review Summary** | <img src="docs/pitch/06-lease-review-summary-framed.png" width="100%"/> | Step 3: pre-flight validation summarizing total move-in balance, rent schedule, and Rent Control Act caps. |
| **07. A4 Kasulatan** | <img src="docs/pitch/07-kasulatan-bilingual-preview-framed.png" width="100%"/> | 7 bilingual clauses in English and Bisaya, A4 single-page fit budget, and Gemini 3.5 Flash Lite drafting. |
| **08. Preset Customizer** | <img src="docs/pitch/08-customize-lease-presets-framed.png" width="100%"/> | Landlord preset library: Bedspace, Room with CR, and Studio Apartment with dynamic placeholders (`{{rent}}`, `{{unit}}`). |
| **09. Room Code Ready** | <img src="docs/pitch/09-all-done-share-room-code-framed.png" width="100%"/> | Published lease showing unique 8-character Room Code (`RIP-OPEN`) and one-click Share/Copy Link button. |

### 👤 Tenant Resident Flow

| Step & Slide | Widescreen Presentation Slide | Key Takeaways & Actions |
|---|:---:|---|
| **10. Tenant Join** | <img src="docs/pitch/10-tenant-join-room-code-framed.png" width="100%"/> | Tenant registration screen where room code automatically pre-fills unit and landlord parameters. |
| **11. Tenant E-Sign** | <img src="docs/pitch/11-tenant-kasulatan-sign-framed.png" width="100%"/> | Tenant portal with one-tap Bisaya language toggle, legal checklist, and touchscreen signature pad. |
| **12. GCash Upload** | <img src="docs/pitch/12-tenant-gcash-proof-upload-framed.png" width="100%"/> | Payment submission interface with screenshot attachment and 12-digit GCash reference number input. |
| **13. PIN Locked State** | <img src="docs/pitch/13-tenant-waiting-verification-framed.png" width="100%"/> | Protected security gate: access PIN is masked while landlord verifies GCash receipt against bank records. |

### 🔒 Payment Verification & Keypad Access Release

| Step & Slide | Widescreen Presentation Slide | Key Takeaways & Actions |
|---|:---:|---|
| **14. Payment Audit** | <img src="docs/pitch/14-landlord-payment-verification-framed.png" width="100%"/> | Landlord audit desk: receipt zoom, reference comparison, Verify & Issue Code button, and Reject with reason. |
| **15. Door PIN Issued** | <img src="docs/pitch/15-landlord-access-code-issued-framed.png" width="100%"/> | Verified lease view displaying active 5-digit door access code (`48291`) with regenerate and revoke controls. |
| **16. Tenant Hub** | <img src="docs/pitch/16-tenant-resident-hub-framed.png" width="100%"/> | Verified Active home view: Maria Santos sees assigned unit, door PIN (`48291`), agreement copy, and rent logger. |

### 📊 Management & Accounting Ledger

| Step & Slide | Widescreen Presentation Slide | Key Takeaways & Actions |
|---|:---:|---|
| **17. Unified Search** | <img src="docs/pitch/17-landlord-search-filter-framed.png" width="100%"/> | Instant search filtering across room codes, access PINs, tenant names, and GCash reference numbers. |
| **18. Payment Ledger** | <img src="docs/pitch/18-landlord-payment-ledger-framed.png" width="100%"/> | Multi-month transaction ledger tracking advance rent, security deposit, and subsequent monthly rent cycles. |

---

## 🎨 Design Tokens & Brand System

Extracted directly from the official logo files (`public/assets/logo-full.png` and `public/assets/logo-icon.png`):

| Role | Token Name | Hex Code | Visual Application |
|---|---|---|---|
| **Primary** | Deep Forest Pine | `#144C2E` / `#14532D` | Brand headers, primary CTA buttons, and active status borders |
| **Secondary** | Foliage Leaf Green | `#449567` | Secondary accents, progress indicators, and subtle badges |
| **Accent** | Warm Amber Gold | `#F1AE17` | Action-required alerts, notification halos, and pending tags |
| **Canvas** | Soft Sage Canvas | `#E4EFE9` | Anti-glare mobile app background |
| **Surface** | Clean White Card | `#FFFFFF` / `#F4F8F5` | Elevated modal sheets and card surfaces |
| **Text Primary** | Deep Slate Ink | `#0F172A` / `#1E293B` | High legibility clause text and headers |
| **Text Muted** | Sage Slate Neutral | `#527060` / `#64748B` | Helper captions, subheadings, and secondary metadata |
| **Success** | Verified Emerald | `#16A34A` | Verified payment status badges and active lease indicators |
| **Error** | Crimson Red | `#DC2626` | Rejection alerts and field validation errors |

---

## 🛠️ Technology Stack

- **Frontend**: React 19, Vite 8.3, Tailwind CSS with custom design tokens (`src/styles/tokens.css`).
- **Typography**: Plus Jakarta Sans.
- **Icons**: Lucide React.
- **Backend & Cloud**:
  - **Firebase Auth**: User account management with password strength scoring.
  - **Cloud Firestore**: Real-time lease status, preset library, and payment ledger sync.
  - **Firebase Storage**: Secure storage for GCash transaction receipts and ID cards.
- **Artificial Intelligence**: Google Gemini 3 (Gemini 3.5 Flash Lite / 3.1 Flash Lite) via REST API.
- **Automated Tooling**: Puppeteer Core (high-res screenshot capture), Oxlint.

---

## 🚀 Local Setup & Pitch Demo Instructions

### Prerequisites
- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### Installation & Launch
```bash
# Clone the repository
git clone https://github.com/devfest-buildathon/rent-in-peace.git
cd rent-in-peace

# Verify stable production branch (main)
git checkout main

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env

# Start local development server
npm run dev
```

### Safe Database Reset & Mock Seeding (For Pitching)
To reset the database and seed realistic demo data for presentations:
```bash
# Safety rule: DEMO_PROJECT_ID must match your target project ID, and requires --confirm
DEMO_PROJECT_ID=rentinpeace npm run demo:reset -- --confirm
```

### 🔑 Demo Pitch Login Credentials

#### 👑 Landlord Account
- **Mobile / Username**: `09171234567`
- **Password**: `Password123!`
- **Name**: Engr. Roberto M. Tan
- **Property**: Tan Residence, Mahogany Avenue, Carmen, Cagayan de Oro City
- **Units Seeded**: 4 leases (`RIP-OPEN`, `RIP-PEND`, `RIP-ACTV`, `RIP-REJC`)

#### 👤 Tenant Resident Account
- **Mobile / Username**: `09181112222`
- **Password**: `Password123!`
- **Name**: Maria Teresa Santos
- **Room Assignment**: Room 201 (Corner Studio) · `RIP-ACTV`
- **Active Keypad Access PIN**: `48291`

---

## 🌟 Key Application Features

### 🏢 1. Landlord Lease Studio
- **Guided Contract Wizard**: Step-by-step drafting for Boarding Houses, Bedspaces, and Apartments in Cagayan de Oro.
- **Gemini AI Legal Clause Assistant**: Type natural language prompts (e.g. *"Strict curfew at 10 PM with ₱500 penalty"*, *"Translate rules into Bisaya"*, or *"Add sub-meter billing at ₱15/kWh"*). Google Gemini synthesizes enforceable, professional clauses adhering to Philippine Civil Code standards.
- **Persistent Single-Use Room Codes**: Generates persistent unique room links (e.g. `?code=RIP-4B92`) that remain stable across edits and sessions.
- **Real-Time Cloud Firestore Sync**: Changes to contracts and payment statuses sync instantly across all devices.

### 🔑 2. Seamless Tenant Onboarding & Registration
- **No Complex Forms for Tenants**: The landlord pre-fills the tenant's legal name, unit number, and rent amount. The tenant only needs to set up a **Username** and **Password** to register.
- **Direct Login to Dashboard**: Logging in takes the tenant straight to their **Tenant Dashboard** (`TENANT_HOME`) without forcing them through repetitive onboarding or setup flows.

### 💳 3. Universal Hybrid Payment Ledger (QR Ph & Physical Cash)
- **BSP QR Ph Standard**: Accepts all Philippine e-wallets and banks (GCash, Maya, SeaBank, BDO, GoTyme).
- **Physical Cash-on-Hand Mode**: Tenants paying in paper bills submit a cash receipt confirmation; landlords verify with a single tap to generate a digital acknowledgment receipt.
- **Rent Schedule & Countdown Progress Tracker**: 
  - Clear visual tracking of total payments (e.g., `6-month schedule: 1 of 6 payments completed · 5 remaining`).
  - Next due date indicator (`Due every 5th of each month`).
- **Live Transaction Ledger**: Both landlord and tenant see an immutable record of all submitted payments, cycles, and approval statuses (`Pending Verification` vs `Verified ✅`).

### 🛡️ 4. Payment Verification & Smart Lockbox Key Access
- **Locked Key PIN During Review**: When advance rent is submitted, the tenant's app displays an amber indicator: `⏳ Awaiting Landlord Verification`, keeping the physical door PIN masked (`● ● ● ●`).
- **Landlord Review UI**: The landlord receives an action banner with the tenant's GCash reference number and receipt image.
- **1-Click Key Release**: The landlord clicks **"Verify Payment & Grant Room Key Access"**. This instantly updates the cloud state and reveals the 5-digit door PIN (**`48291`**) on the tenant's screen for contactless move-in.

### 📜 5. Official Legal Standard (Kasulatan sa Pag-Abang)
- **Compact Standard A4 Document**: Formatted cleanly to fit standard A4 paper with zero overflow.
- **Dual-Signing Mode**: Supports digital on-screen stylus signatures as well as wet-ink physical signing under **Philippine Civil Code Art. 1356**.
- **Notarial Acknowledgment**: Includes certified notarial block for Barangay Lupon or judicial proceedings.

---

## ⚖️ Legal & Responsible AI Disclaimer

*Rent in Peace is an operational management, record-keeping, and mutual transparency tool for residential rentals in the Philippines. It does not provide legal representation or formal statutory advice. All AI-generated clauses produced by Google Gemini must be explicitly reviewed and confirmed by the property owner before commitment. The platform strictly enforces statutory tenant caps under the Philippine Rent Control Act (Republic Act No. 9653).*

### Philippine Legal Framework Alignment

| Legal Framework | Implementation in Rent in Peace |
|---|---|
| **RA 386 (Civil Code Art. 1356)** | Customary residential lease format enforceable for barangay proceedings and informal dispute resolutions. |
| **Civil Code Art. 1654 & 1687** | Prescribed statutory landlord maintenance covenants and 30-day move-out notification periods. |
| **Rent Control Act of the Philippines** | Deposit caps (1 month advance, 1 to 2 months security deposit) automatically enforced in the wizard. |
| **RA 8792 (E-Commerce Act)** | Electronic signatures recorded with cryptographic timestamps and PhilSys-verified legal name binding. |
| **RA 10173 (Data Privacy Act)** | Strict isolation ensures co-tenants cannot view other tenants' balances, receipts, or contracts. |

---

## 🗄️ Database Collections (Cloud Firestore)

- **`contracts/`**: Holds lease agreements, clause lists, room metadata, lockbox PINs, and verification flags (`paymentVerified: boolean`).
- **`tenants/`**: Tenant credentials (username, password hash/pin), full legal names, and linked contract codes.
- **`landlords/`**: Landlord profiles, registered phone numbers, property locations, and PINs.
- **`payments/`**: Ledger entries with contract codes, cycle names, amounts, GCash reference numbers, and receipt image attachments.
- **`checkins/`**: Audit trail of digital signatures, check-in timestamps, and tenant IDs.

---

## 🧪 Testing the Live Demo

1. **Landlord Flow:**
   - On the Splash Screen, click **Landlord Portal** -> **Create Account** or **Sign In**.
   - Tap **"Create a new contract"**, fill out unit details (e.g. Unit 4, ₱3,500/mo), customize clauses with Gemini AI, and save.
   - Share the room code (e.g. `RIP-XXXX`) or copy the invite link.
2. **Tenant Flow:**
   - Open the link with `?code=RIP-XXXX` or click **Tenant Portal** -> **Register**.
   - Input your username and password.
   - Land directly on your **Tenant Dashboard**: view your contract, pay rent via GCash, track your monthly schedule, and view lockbox status.
3. **Verification Flow:**
   - Tenant submits rent with a GCash ref.
   - Landlord dashboard shows **"Action Required: Tenant Payment Pending"**.
   - Landlord clicks **"Verify Payment & Grant Room Key Access"**.
   - Tenant dashboard instantly unlocks Smart Keybox PIN `48291`!

---

## 👥 The Team Behind Rent in Peace (GDG CDO Buildathon 2026)

| Member | Role | Responsibilities & Contributions |
|---|---|---|
| **Danlord Farell Soriano (Daf)** ([@Daffy-Ducky](https://github.com/Daffy-Ducky)) | **Team Lead & System Architect** | System prompts, stage pitch presenter, Phygital dual-signing architecture, feature orchestration |
| **Justine Roy Salva** ([@JRSstuff](https://github.com/JRSstuff)) | **Lead Backend & AI Engineer** | Google Gemini Flash integration, Cloud Firestore schemas, in-app QR Ph/Cash logic |
| **John Kurt** | **Co-Developer, UI/UX & DevOps** | Modern UI redesign across 26 screens, deployment, persistence validation, PWA caching |

---

## 📄 License
Licensed under the [MIT License](LICENSE).
