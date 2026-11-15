# Rent in Peace — Video Shotlist & Production Log

This document provides a frame-by-frame mapping between the recorded video clips in `docs/video/clips/`, the title cards in `docs/video/rough-cut.mp4`, and the pitch script in `docs/video/script.md`.

---

## 1. Video Specifications & Production Standards

- **Viewport Size**: 390 × 844 px (Standard iPhone 12/13/14 mobile viewport)
- **Device Pixel Ratio (DPR)**: `2.0` (Rendered at crisp 780 × 1688 px resolution)
- **Frame Rate**: 30.0 fps progressive (`yuv420p` H.264)
- **Click Ripples**: Injected brand-colored ripple indicators (Emerald `#144C2E` core with `#F1AE17` gold ring)
- **Lower Thirds**: Auto-overlaid glassmorphic branded banners with scene number, step badge, title, and subtitle
- **Title Cards**: 1.8s – 2.5s branded transition slides featuring official Rent in Peace brand logo
- **Total Footage of Clips**: 1 minute 30.5 seconds (under 3:00 ceiling)
- **Total Assembled Rough Cut**: 1 minute 45.4 seconds (with intro, outro, and 8 transition cards)
- **Pitch Target Duration**: 4:30 (270 seconds) with VO delivery

---

## 2. Complete Scene & Shot Mapping

### Card: INTRO (`0:00 - 0:35` VO alignment)
- **Visual**: Branded Dark Emerald card (`#144C2E`) with gold accents (`#F1AE17`) and `public/assets/logo-full.png`.
- **Text**: `Rent in Peace` · `Software-Only Lease & Payment-Ledger Web App for Boarding Houses` · `GDG Cagayan de Oro Pitching Competition`.
- **Card Duration**: 2.5s (in `rough-cut.mp4`).
- **Voiceover**: Covers problem narrative (informal *sabot-sabot*, lost receipts, disputed advance/deposits).

---

### Scene 01: Landlord Creates Lease (`0:55 - 1:20`)
- **Clip File**: [`docs/video/clips/01-landlord-create-lease.mp4`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/clips/01-landlord-create-lease.mp4)
- **Clip Duration**: 15.2s (Max allowed: 35s)
- **Step Badge**: `Step 1: Lease Origination & Kasulatan`
- **Lower Third Title**: `Landlord Creates Lease & Kasulatan`
- **Lower Third Subtitle**: `Bilingual agreement generated · Digital signature · Instant room code`
- **Verification Frames**:
  - Start: [`01-landlord-create-lease-start.png`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/01-landlord-create-lease-start.png) (Empty landlord dashboard with Create Lease button)
  - Mid: [`01-landlord-create-lease-mid.png`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/01-landlord-create-lease-mid.png) (Form input for Room 104, rent rates ₱3,500)
  - End: [`01-landlord-create-lease-end.png`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/01-landlord-create-lease-end.png) (Kasulatan PDF screen with Room Code `RIP-D7G9` and Share Link)
- **Key Actions**:
  1. Landlord taps `Create Lease` on dashboard.
  2. Selects property type and taps `Continue to Lease Terms`.
  3. Enters unit `Room 104`, monthly rent `3500`, advance `3500`, deposit `3500`, due date `5th`.
  4. Generates bilingual Kasulatan sa Abang.
  5. Signs via on-screen signature pad.
  6. Taps `Save & Generate Kasulatan`.
  7. Lands on PDF preview showing generated Room Code `RIP-D7G9` and copyable share link.
- **Voiceover Line**:
  > *"First, the landlord creates a lease in thirty seconds. They enter the room details, rental rates, and payment due date. Rent in Peace formats a clear, bilingual Kasulatan sa Abang. The landlord signs right on screen and taps Save. Immediately, a unique room code and share link are generated."*

---

### Scene 02: Tenant Joins, Registers & Signs (`1:20 - 1:45`)
- **Clip File**: [`docs/video/clips/02-tenant-join-register-sign.mp4`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/clips/02-tenant-join-register-sign.mp4)
- **Clip Duration**: 17.5s (Max allowed: 30s)
- **Step Badge**: `Step 2: Tenant Join & Bilingual Kasulatan`
- **Lower Third Title**: `Tenant Joins, Reads & Signs Agreement`
- **Lower Third Subtitle**: `Room code lookup · Strong auth · English/Bisaya toggle · Digital sign`
- **Verification Frames**:
  - Start: [`02-tenant-join-register-sign-start.png`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/02-tenant-join-register-sign-start.png) (Tenant registration screen with password strength meter)
  - Mid: [`02-tenant-join-register-sign-mid.png`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/02-tenant-join-register-sign-mid.png) (Kasulatan clauses review with Bisaya translation toggle active)
  - End: [`02-tenant-join-register-sign-end.png`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/02-tenant-join-register-sign-end.png) (Signed status confirmed, navigating to payment step)
- **Key Actions**:
  1. Tenant enters room code `RIP-OPEN`.
  2. Completes registration for `Elena P. Salvador` with password strength validation.
  3. Lands on Kasulatan review screen.
  4. Toggles `Bisaya Translation` button to view clauses in conversational Bisaya.
  5. Ticks agreement checkbox.
  6. Uses `Auto-Sign` to render verified legal signature.
  7. Taps `Sign Agreement`.
- **Voiceover Line**:
  > *"Next, the incoming tenant opens the room link on her phone. She registers her verified profile, reads the agreement, and toggles directly into conversational Bisaya so every house rule is understood. With a single tap, she signs digitally. The room is now locked to her lease."*

---

### Scene 03: Tenant Submits GCash Payment Proof (`1:45 - 2:05`)
- **Clip File**: [`docs/video/clips/03-tenant-upload-payment-proof.mp4`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/clips/03-tenant-upload-payment-proof.mp4)
- **Clip Duration**: 9.7s (Max allowed: 20s)
- **Step Badge**: `Step 3: Payment Submission & Protection`
- **Lower Third Title**: `Tenant Submits GCash Payment Proof`
- **Lower Third Subtitle**: `Access PIN strictly locked until landlord confirms funds`
- **Verification Frames**:
  - Start: [`03-tenant-upload-payment-proof-start.png`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/03-tenant-upload-payment-proof-start.png) (GCash payment screen with uploaded receipt image attached)
  - Mid: [`03-tenant-upload-payment-proof-mid.png`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/03-tenant-upload-payment-proof-mid.png) (Entering GCash reference number `902148192837`)
  - End: [`03-tenant-upload-payment-proof-end.png`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/03-tenant-upload-payment-proof-end.png) (SuccessPinScreen: "Door Code is Protected", PIN masked as `••••`)
- **Key Actions**:
  1. Tenant views move-in breakdown (₱4,500 advance + deposit).
  2. Attaches GCash electronic receipt.
  3. Types unique GCash reference number `902148192837`.
  4. Taps `Submit Payment Proof`.
  5. Lands on protection screen: "Door Code is Protected - Payment Submitted! Waiting for verification".
- **Voiceover Line**:
  > *"Now comes the payment. The tenant sends her move-in advance through GCash and submits her receipt image and reference number. Notice right here: her door access code is strictly protected and locked. No access code is ever released before the landlord confirms real funds."*

---

### Scene 04: Landlord Audits & Verifies Payment (`2:05 - 2:30`)
- **Clip File**: [`docs/video/clips/04-landlord-verify-payment.mp4`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/clips/04-landlord-verify-payment.mp4)
- **Clip Duration**: 10.4s (Max allowed: 25s)
- **Step Badge**: `Step 4: Payment Audit & Door PIN Release`
- **Lower Third Title**: `Landlord Audits & Verifies Payment`
- **Lower Third Subtitle**: `5-digit door access code released upon receipt verification`
- **Verification Frames**:
  - Start: [`04-landlord-verify-payment-start.png`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/04-landlord-verify-payment-start.png) (Dashboard with amber "Action Required" badge)
  - Mid: [`04-landlord-verify-payment-mid.png`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/04-landlord-verify-payment-mid.png) (Audit modal inspecting GCash receipt & reference)
  - End: [`04-landlord-verify-payment-end.png`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/04-landlord-verify-payment-end.png) (Verification complete, access code `48291` generated and active)
- **Key Actions**:
  1. Landlord opens dashboard; spots amber `Action Required` badge on Juan Paolo Dela Cruz's lease.
  2. Taps lease card to open verification modal.
  3. Audits full GCash e-receipt preview and cross-checks reference number `902148192837`.
  4. Taps `Verify Payment`.
  5. Confirms modal `Yes, Verify`.
  6. Unique 5-digit door code `48291` is unlocked and visible on the landlord's screen.
- **Voiceover Line**:
  > *"Instantly, the landlord’s dashboard flags an 'Action Required' alert. The landlord inspects the uploaded GCash receipt and audits the reference number against their GCash wallet. Once confirmed, they tap Verify. At that exact millisecond, a verified five-digit door access code is generated."*

---

### Scene 05: Tenant Portal Real-Time Live Update (`2:30 - 2:50`)
- **Clip File**: [`docs/video/clips/05-tenant-portal-live-update.mp4`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/clips/05-tenant-portal-live-update.mp4)
- **Clip Duration**: 5.4s (Max allowed: 20s)
- **Step Badge**: `Step 5: Zero-Refresh Reactive Tenant Sync`
- **Lower Third Title**: `Tenant Screen Updates Live (No Refresh)`
- **Lower Third Subtitle**: `Real-time Firestore listener unlocks access code & contract`
- **Verification Frames**:
  - Start: [`05-tenant-portal-live-update-start.png`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/05-tenant-portal-live-update-start.png) (Active portal displaying green "Active Resident" status)
  - End: [`05-tenant-portal-live-update-end.png`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/05-tenant-portal-live-update-end.png) (Access code `48291` revealed with full contract link and payment history)
- **Key Actions**:
  1. Tenant portal receives reactive Firestore update without manual page reload.
  2. Masked `••••` unlocks to reveal 5-digit access code `48291`.
  3. "Active Resident" badge displayed in emerald green.
  4. Contract preview and monthly payment history ledger immediately accessible.
- **Voiceover Line**:
  > *"Watch the tenant’s screen: without refreshing the page, Firestore real-time listeners update her portal to Verified Active. Her five-digit access code is revealed, paired with her permanent digital Kasulatan and verified ledger record. She can move in with total peace of mind."*

---

### Scene 06: Landlord Search & Cross-Index (`2:50 - 3:15`)
- **Clip File**: [`docs/video/clips/06-landlord-search-cross-index.mp4`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/clips/06-landlord-search-cross-index.mp4)
- **Clip Duration**: 6.0s (Max allowed: 15s)
- **Step Badge**: `Step 6: Universal Access Code Cross-Index`
- **Lower Third Title**: `Landlord Searches Door Access Code`
- **Lower Third Subtitle**: `Single search connects code, tenant, contract & payment`
- **Verification Frames**:
  - Start: [`06-landlord-search-cross-index-start.png`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/06-landlord-search-cross-index-start.png) (Landlord dashboard search bar)
  - Mid: [`06-landlord-search-cross-index-mid.png`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/06-landlord-search-cross-index-mid.png) (Filtering live by access code `48291`)
  - End: [`06-landlord-search-cross-index-end.png`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/06-landlord-search-cross-index-end.png) (Resident Profile linking contract, tenant Maria Teresa Santos, and payment history)
- **Key Actions**:
  1. Landlord inputs door PIN `48291` into dashboard search bar.
  2. Cards filter instantly to Maria Teresa Santos (`RIP-ACTV`).
  3. Taps card to open unified Resident Profile.
  4. Inspects room number, move-in date, signed Kasulatan copy, and payment history ledger.
- **Voiceover Line**:
  > *"Months later, if the landlord ever needs to check who holds that door code, they simply type the five-digit code into the dashboard search bar. In under a second, it links the resident profile, signed agreement, and verified payment history in one place."*

---

### Scene 07: Google Gemini AI Clause Suggestion (`3:15 - 3:35`)
- **Clip File**: [`docs/video/clips/07-gemini-ai-clause-suggestion.mp4`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/clips/07-gemini-ai-clause-suggestion.mp4)
- **Clip Duration**: 13.1s (Max allowed: 20s)
- **Step Badge**: `Google Gemini 3: Natural Language House Rules`
- **Lower Third Title**: `AI Clause Drafting with Gemini 3`
- **Lower Third Subtitle**: `Drafts balanced bilingual clauses with landlord review`
- **Verification Frames**:
  - Start: [`07-gemini-ai-clause-suggestion-start.png`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/07-gemini-ai-clause-suggestion-start.png) (Customize Lease screen with "Suggest Clause" button)
  - Mid: [`07-gemini-ai-clause-suggestion-mid.png`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/07-gemini-ai-clause-suggestion-mid.png) (Typing prompt: "Quiet hours at 10 PM, visitors allowed until 8 PM only...")
  - End: [`07-gemini-ai-clause-suggestion-end.png`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/07-gemini-ai-clause-suggestion-end.png) (Gemini 3 Flash Lite bilingual response rendered into editable review card)
- **Key Actions**:
  1. Landlord navigates to Customize Lease Presets.
  2. Taps `Suggest Clause` to open Gemini AI helper modal.
  3. Types natural prompt: *"Quiet hours at 10 PM, visitors allowed until 8 PM only, no overnight guests."*
  4. Taps `Draft`.
  5. Live Google Gemini 3 Flash Lite API formats balanced English and Bisaya clauses.
  6. Landlord reviews draft and taps `Accept & Insert Clause`.
- **Voiceover Line**:
  > *"Every boarding house has unique rules. Powered by Google Gemini AI, landlords can simply type house rules in plain everyday language. Gemini drafts a balanced, bilingual clause in English and Bisaya. The landlord reviews, edits, and accepts—staying fully in control."*

---

### Scene 08: Presets, Reordering & Live A4 Preview (`3:35 - 3:50`)
- **Clip File**: [`docs/video/clips/08-presets-reorder-placeholders.mp4`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/clips/08-presets-reorder-placeholders.mp4)
- **Clip Duration**: 12.8s (Max allowed: 20s)
- **Step Badge**: `Custom Presets & Bilingual Preview`
- **Lower Third Title**: `Preset Customizer & Live A4 Preview`
- **Lower Third Subtitle**: `Drag & reorder, dynamic placeholders & bilingual preview`
- **Verification Frames**:
  - Start: [`08-presets-reorder-placeholders-start.png`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/08-presets-reorder-placeholders-start.png) (Preset tabs: Bedspace, Private Room, Apartment)
  - Mid: [`08-presets-reorder-placeholders-mid.png`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/08-presets-reorder-placeholders-mid.png) (Clause editor modal with dynamic placeholder toolbar)
  - End: [`08-presets-reorder-placeholders-end.png`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/08-presets-reorder-placeholders-end.png) (Kasulatan Live Preview modal showing bilingual single-page A4 format)
- **Key Actions**:
  1. Landlord switches preset tab to `Private Room with CR`.
  2. Taps `Move Down` to reorder clause positions.
  3. Taps `Edit Clause` to open editor.
  4. Inputs title and inserts dynamic placeholder `{{due_day}}`.
  5. Taps `Save Clause`.
  6. Taps `Live Preview` to view printable single-page A4 bond paper preview.
  7. Scrolls smoothly down the bilingual preview.
- **Voiceover Line**:
  > *"Landlords can also manage custom presets for bedspaces, private rooms, and apartments, drag-and-drop to reorder, and insert dynamic placeholders that automatically adapt to every room rate."*

---

### Card: OUTRO (`4:15 - 4:30` VO alignment)
- **Visual**: Branded Dark Emerald card (`#144C2E`) with gold seal (`#F1AE17`) and `public/assets/logo-full.png`.
- **Text**: `Rent in Peace: Peace of Mind for All` · `Zero hardware · 100% Mobile PWA · Daghang Salamat GDG CDO!`
- **Card Duration**: 2.5s (in `rough-cut.mp4`).
- **Voiceover**: Concluding call-to-action thanking Google Developer Groups Cagayan de Oro.

---

## 3. Clip Duration Audit & Spec Verification

| Scene # | Scene ID | Target Max | Actual Recorded | Status | Headroom |
| :---: | :--- | :---: | :---: | :---: | :---: |
| **01** | `01-landlord-create-lease` | 35 s | **15.2 s** | ✅ PASS | +19.8 s |
| **02** | `02-tenant-join-register-sign` | 30 s | **17.5 s** | ✅ PASS | +12.5 s |
| **03** | `03-tenant-upload-payment-proof` | 20 s | **9.7 s** | ✅ PASS | +10.3 s |
| **04** | `04-landlord-verify-payment` | 25 s | **10.4 s** | ✅ PASS | +14.6 s |
| **05** | `05-tenant-portal-live-update` | 20 s | **5.4 s** | ✅ PASS | +14.6 s |
| **06** | `06-landlord-search-cross-index` | 15 s | **6.0 s** | ✅ PASS | +9.0 s |
| **07** | `07-gemini-ai-clause-suggestion` | 20 s | **13.1 s** | ✅ PASS | +6.9 s |
| **08** | `08-presets-reorder-placeholders` | 20 s | **12.8 s** | ✅ PASS | +7.2 s |
| **TOTAL** | **8 Video Clips Combined** | **180 s (3:00)** | **90.1 s (1:30.1)** | ✅ PASS | **+89.9 s (under 3 min limit)** |

---

## 4. Visual Quality Inspection Report

All 24 extracted verification frames in [`docs/video/frames/`](file:///c:/Users/BeboyPC/Downloads/devfest/docs/video/frames/) were audited against the following criteria:
1. **No Cut-off Text**: All cards, badges, and headers fit within the 390x844 mobile viewport with 16px safety padding.
2. **No Stuck Spinners**: Every async operation (Kasulatan generation, signature saving, GCash submission, Firestore verification, and Gemini clause drafting) completed and transitioned before snapshot capture.
3. **No Empty States**: Every screen contains real demo seed records (Elena P. Salvador, Maria Teresa Santos, Juan Paolo Dela Cruz, Room 104, Room 201).
4. **No Real PII**: Purely synthetic Philippine demo identities and test reference numbers (`902148192837`).
5. **No Visible Dev Console or API Keys**: Recording ran cleanly with headless Chromium/Edge with zero console or network overlays visible.
