# Gege AI Voice Money Tracker - v2.0 Checklist

## Boss Requirements Summary

### Core Concept
**AI Voice Assistant Money Tracker** - Not manual-first, but AI-automated with manual as backup

---

## Use Case 1: Screen Capture Flow (BPI/GCash/PayPal)

**User Journey:**
1. User finishes transaction in banking app (BPI, GCash, PayPal, etc.)
2. User is on receipt/confirmation screen
3. User says: **"Hey Siri, open Gege"** (iOS) or **"Hey Google, open Gege"** (Android)
4. Gege app opens immediately
5. Gege says: **"Yes!"** (voice)
6. Gege makes **camera shutter sound** (screenshot captured)
7. Gege **AI analyzes the screen** using OCR/Vision AI
8. Gege **auto-extracts**: amount, currency, recipient, app source
9. Gege **auto-logs** to dashboard
10. Gege says: **"Logged! You sent $X to [Name] via [App]"**

**Requirements:**
- [ ] Siri Shortcuts integration (iOS)
- [ ] Google Assistant integration (Android)
- [ ] Screen capture on app open
- [ ] "Yes!" voice response (TTS)
- [ ] Shutter sound effect
- [ ] Vision AI for screen OCR (GPT-4 Vision / Google Vision)
- [ ] Auto-extract transaction data
- [ ] Auto-save to transactions
- [ ] Voice confirmation of logged transaction

---

## Use Case 2: Camera Receipt Flow (Physical Receipts)

**User Journey:**
1. User pays at store/restaurant, gets physical receipt
2. User says: **"Hey Siri, open Gege camera"** or **"Hey Google, open Gege camera"**
3. Gege opens directly to **camera mode**
4. User points camera at receipt
5. User taps shutter or auto-captures
6. Gege **AI analyzes receipt image** using OCR
7. Gege **auto-extracts**: amount, merchant, date, items (optional)
8. Gege **auto-logs** to dashboard
9. Gege says: **"Logged! $X at [Merchant]"**

**Requirements:**
- [ ] Siri Shortcuts with "camera" parameter
- [ ] Google Assistant with "camera" parameter
- [ ] Direct camera open from shortcut
- [ ] Camera UI with shutter
- [ ] Receipt OCR AI
- [ ] Auto-extract receipt data
- [ ] Auto-save to transactions
- [ ] Voice confirmation

---

## Design Requirements (From Screenshot)

**Visual Style:**
- [ ] **Fun, playful, colorful** (not corporate)
- [ ] **Cream/beige background** (#fdfbf7 or similar)
- [ ] **Thick rounded corners** on all cards (20-24px radius)
- [ ] **Avatar circles** for people/contacts
- [ ] **Color-coded badges** for amounts (pink for sent, green for received)
- [ ] **Bottom floating tab bar** (pill-shaped, black background)
- [ ] **Yellow/orange accents** (not just plain orange)
- [ ] **Shadow effects** on cards
- [ ] **Emoji integration** (👋 in greeting)
- [ ] **Large friendly typography**

**Specific Elements to Copy:**
- [ ] "Hello, [Name] 👋" greeting with avatar
- [ ] Balance card with 2 action buttons (Transfer, Request)
- [ ] "Send Again" section with contact avatars
- [ ] Transaction list with avatars + colored amount badges
- [ ] Floating bottom navigation (Home, Wallet, History, Settings icons)
- [ ] Transfer screen with numpad (for manual entry)

---

## Tech Stack Updates

### AI Integration
- [ ] GPT-4 Vision API for screen/receipt analysis
- [ ] OCR for text extraction
- [ ] Natural language parsing for amounts
- [ ] Confidence scoring for auto-extraction

### Voice Integration
- [ ] Expo Speech (TTS) for "Yes!" and confirmations
- [ ] Siri Shortcuts configuration
- [ ] Google Assistant Actions
- [ ] Wake word handling

### Camera Integration
- [ ] Expo Camera
- [ ] Image capture
- [ ] Image preprocessing for OCR

---

## Flow Priority

**Primary Flow (AI-First):**
1. Voice trigger → App opens → Screen capture → AI analysis → Auto-log

**Secondary Flow (Camera):**
1. Voice trigger + "camera" → Camera opens → Photo → AI analysis → Auto-log

**Tertiary Flow (Manual):**
1. Open app → Tap add → Fill form → Save

---

## Checklist Summary

| Feature | Status |
|---------|--------|
| Siri Shortcuts integration | ⏳ |
| Google Assistant integration | ⏳ |
| Screen capture on open | ⏳ |
| "Yes!" voice response | ⏳ |
| Shutter sound | ⏳ |
| Vision AI (GPT-4) | ⏳ |
| Auto-extract transaction | ⏳ |
| Camera mode with shortcut | ⏳ |
| Receipt OCR | ⏳ |
| Fun colorful design | ⏳ |
| Avatars for contacts | ⏳ |
| Floating bottom nav | ⏳ |
| Color-coded badges | ⏳ |
| Manual add (backup) | ✅ (already done) |

---

**Questions for Boss:**
1. Should we use **GPT-4 Vision** for AI analysis? (requires API key)
2. Do you want **actual Siri/Google integration** now or simulated for demo?
3. Should the design be **exactly like screenshot** or inspired by it?
4. Do you want **contact avatars** (upload photos) or initials like current?

**Ready to proceed, Boss?** 🦾
