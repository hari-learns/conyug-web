# Conyug Landing Page

Modern, minimal landing page for Conyug - India's local gig platform.

## 🚀 Quick Start

1. **Add your logo**: Place `conyug.png` in the root directory
2. **Configure Firebase**: Follow instructions in `FIREBASE_SETUP.md`
3. **Open in browser**: Open `index.html` directly or use a local server

## 📋 What You Need to Provide

### 1. Firebase Configuration
Open `js/firebase-config.js` and replace with your Firebase config:

Go to: **Firebase Console → Project Settings → Your apps → Web app**

Copy the config and paste it in `js/firebase-config.js`

### 2. Logo
Add your `conyug.png` logo file to the root directory (the no-background version)

## 🗂️ File Structure

```
conyug-web/
├── index.html              # Main landing page
├── conyug.png             # Your logo (YOU NEED TO ADD THIS)
├── js/
│   └── firebase-config.js  # Firebase configuration (UPDATE THIS)
├── firestore.rules         # Security rules for Firestore
├── FIREBASE_SETUP.md       # Detailed Firebase setup guide
└── README.md              # This file
```

## ✨ Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll animations
- ✅ "Coming Soon" modal for download buttons
- ✅ Support form with Firebase Firestore integration
- ✅ Email/phone validation (10 digits or valid email)
- ✅ Duplicate submission prevention
- ✅ Social media links (Twitter, Instagram, LinkedIn)
- ✅ Legal footer links

## 📊 Data Collection

When users submit support:
- Data is stored in Firebase Firestore
- Collection: `supporters`
- Fields: `email` OR `phone`, `contactType`, `timestamp`, `source`
- View submissions in Firebase Console

## 🔐 Security

- Client-side validation (email format, 10-digit phone)
- Firestore security rules prevent abuse
- No duplicate submissions allowed
- Rate limiting built-in

## 🛠️ Setup Instructions

See `FIREBASE_SETUP.md` for detailed Firebase setup instructions.

## 🎨 Customization

### Colors
Main colors are defined in CSS variables:
- Primary Green: `#00A859`
- Off-white background: `#FAFAFA`

### Social Links
Update in the footer section of `index.html`:
- Twitter: `https://x.com/shymmtry`
- Instagram: `https://instagram.com/conyug`
- LinkedIn: `https://linkedin.com/company/conyug`
- Email: `founder@conyug.in`

## 📞 Contact

Email: founder@conyug.in
Twitter: @shymmtry

---

Built with ❤️ for solving unemployment in India, one gig at a time.
