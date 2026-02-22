# Gege - AI Voice Money Tracker

An AI-powered voice assistant that tracks your money transactions from any app worldwide. Just say "Hey Gege" and it captures your screen, extracts transaction details, and logs them automatically.

## Features

🎙️ **Voice Activation**
- Say "Hey Gege" to wake the app
- Responds with "Yes!" and listens for commands
- Works with Siri Shortcuts and Google Assistant

📸 **Screen Capture**
- Automatically captures screen on wake
- Analyzes any banking/payment app
- Extracts: amount, currency, recipient, date, type

📷 **Camera Mode**
- Scan receipts and deposit slips
- OCR extracts transaction details
- Saves photo with transaction record

💬 **Chat Analysis**
- Detects money mentions in chat apps
- Works with Messenger, WhatsApp, Telegram, etc.
- Logs "sent you", "transferred", payment confirmations

📊 **Dashboard**
- Clean, modern UI with orange accent
- Track spending by month
- Filter by currency and recipient
- Export data anytime

## Tech Stack

- **Framework:** React Native (Expo)
- **Language:** TypeScript
- **Navigation:** React Navigation
- **Icons:** Ionicons
- **Voice:** Expo Speech Recognition
- **Camera:** Expo Camera
- **Storage:** AsyncStorage + SQLite

## Screens

1. **Dashboard** - Overview of finances, quick actions, recent transactions
2. **Transactions** - Full transaction history with filters
3. **Voice (Gege)** - Voice activation interface with animations
4. **Settings** - Preferences, data management, profile

## Design

- **Primary Color:** Orange `#f97316`
- **Background:** Cream `#fdfbf7`
- **Style:** Modern, minimal, clean cards

## Installation

```bash
# Clone the repository
git clone https://github.com/xBalzerian/gege-money-tracker.git

# Install dependencies
cd gege-money-tracker
npm install

# Start the app
npx expo start
```

## Usage

1. Open the app
2. Tap and hold the microphone button or say "Hey Gege"
3. Gege responds "Yes!"
4. Speak your transaction: "I sent $50 to John via PayPal"
5. Gege logs it automatically!

## Roadmap

- [ ] AI-powered transaction extraction
- [ ] Multi-currency support
- [ ] Siri/Google Assistant integration
- [ ] Widget support
- [ ] Cloud sync
- [ ] Spending insights and analytics

## License

MIT License - Made with ❤️ for Boss

---

*Gege - Your personal AI money tracker*
