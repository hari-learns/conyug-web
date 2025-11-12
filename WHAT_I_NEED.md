# 🔥 Firebase Config - Quick Reference

## What I Need From You

### 1️⃣ Firebase Configuration Object

Go to: https://console.firebase.google.com/

Steps:
1. Select your project
2. Click gear icon ⚙️ → **Project Settings**
3. Scroll to "Your apps" → Click Web icon `</>`
4. Copy the entire `firebaseConfig` object

**Paste it in: `js/firebase-config.js`**

Example (yours will be different):
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "conyug-xxxxx.firebaseapp.com",
  projectId: "conyug-xxxxx",
  storageBucket: "conyug-xxxxx.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};
```

### 2️⃣ Enable Firestore

1. Firebase Console → **Firestore Database**
2. Click **Create Database**
3. Choose **Start in test mode**
4. Select location: **asia-south1** (Mumbai) or nearest
5. Click **Enable**

### 3️⃣ Add Security Rules

1. In Firestore, go to **Rules** tab
2. Copy the content from `firestore.rules` file
3. Paste it there
4. Click **Publish**

---

## That's It! 🎉

Once you provide the Firebase config, the form will:
- ✅ Save emails/phones to Firestore
- ✅ Prevent duplicates
- ✅ Show success messages
- ✅ Validate inputs

View submissions at:
**Firebase Console → Firestore Database → supporters collection**

---

## Testing

1. Open `index.html` in browser
2. Scroll to "I Support This Idea" section
3. Enter email or 10-digit phone
4. Click submit
5. Check Firebase Console to see the data!
