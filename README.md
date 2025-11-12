# Conyug Landing Page

**Turn Your Free Time Into Income**

A minimal coming-soon/landing page for Conyug, the hyperlocal gig platform connecting service providers and task posters across India.

## Features

- Clean, responsive design with Tailwind CSS
- Firebase Firestore integration for email/phone collection
- Support form + notify-at-launch modal
- Analytics tracking via Firebase Analytics
- Secure client-side validation and write-only data flow

## Tech Stack

- HTML5 + Tailwind CSS (CDN)
- Firebase (Firestore, Analytics)
- Vanilla JavaScript

## Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/hari-learns/conyug-web.git
   cd conyug-web
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node (if you have http-server installed)
   npx http-server
   ```

3. Firebase is already configured in `js/firebase-config.js`. Firestore rules are in `firestore.rules`—publish them via Firebase Console.

## Deployment

### GitHub Pages
1. Go to your repo Settings → Pages
2. Source: Deploy from branch `master` or `main`
3. Root directory: `/`
4. Save and wait ~1 minute

Your site will be live at: `https://hari-learns.github.io/conyug-web/`

### Alternative: Netlify, Vercel, Firebase Hosting
- Drag and drop the entire folder, or connect your GitHub repo
- No build step needed—static HTML

## Security

- Firebase config is public (safe to expose)
- Firestore rules enforce write-only access with validation
- `.gitignore` prevents accidental commits of secrets
- Consider enabling Firebase App Check for production

## License

© 2025 Conyug. All rights reserved.

---

**Contact:** founder@conyug.in  
**Twitter:** [@shymmtry](https://x.com/shymmtry)
