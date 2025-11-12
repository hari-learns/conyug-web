# Firebase Setup Guide for Conyug Landing Page

## Step 1: Get Your Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (or create a new one)
3. Click the gear icon ⚙️ → **Project Settings**
4. Scroll down to "Your apps" section
5. Click on the **Web app** icon `</>` (or add a new web app)
6. Copy the `firebaseConfig` object

It will look like this:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdefghijk"
};
```

## Step 2: Update Firebase Config

1. Open `js/firebase-config.js`
2. Replace the placeholder values with your actual Firebase config
3. Save the file

## Step 3: Enable Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click **Create database**
3. Choose **Start in test mode** (we'll add security rules next)
4. Select your preferred location (choose closest to India, e.g., `asia-south1`)
5. Click **Enable**

## Step 4: Set Up Security Rules

1. In Firestore Database, go to the **Rules** tab
2. Replace the rules with the content from `firestore.rules` file
3. Click **Publish**

## Step 5: Test the Form

1. Open `index.html` in your browser
2. Scroll to the "I Support This Idea" section
3. Enter an email or 10-digit phone number
4. Click "Share Your Support"
5. Check Firebase Console → Firestore Database → `supporters` collection

## Data Structure

Each supporter document will contain:
```json
{
  "email": "user@example.com",  // OR "phone": "9876543210"
  "contactType": "email",        // OR "phone"
  "timestamp": "2025-11-12T10:30:00Z",
  "source": "landing-page"
}
```

## Viewing Supporters

1. Go to Firebase Console → Firestore Database
2. Click on `supporters` collection
3. You'll see all submissions with timestamps
4. You can export to CSV/JSON for analysis

## Security Features

✅ Validates email format (must contain @)
✅ Validates phone (exactly 10 digits)
✅ Prevents duplicate submissions
✅ Rate limiting via Firestore security rules
✅ Firestore rules prevent malicious writes

## Troubleshooting

**"Firebase not initialized" error:**
- Check that your config values are correct in `js/firebase-config.js`
- Make sure Firebase scripts are loading (check browser console)

**Submissions not appearing:**
- Check Firestore security rules are published
- Check browser console for errors
- Verify Firestore is enabled in Firebase Console

**CORS errors:**
- Make sure you're testing on a proper domain or use `python -m http.server`
- Don't use `file://` protocol

## Next Steps

- Set up email notifications when someone supports
- Add Firebase Analytics to track form submissions
- Export supporter data for email campaigns
- Set up Firebase Functions for auto-responses
