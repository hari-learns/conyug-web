// Firebase Configuration for Conyug Website

const firebaseConfig = {
  apiKey: "AIzaSyDsgPvtQm074YHTmRQq5soFvH9SfrldOR0",
  authDomain: "conyug-website.firebaseapp.com",
  projectId: "conyug-website",
  storageBucket: "conyug-website.firebasestorage.app",
  messagingSenderId: "1081164541909",
  appId: "1:1081164541909:web:7f9e1803a618590874d75c",
  measurementId: "G-HWJGD5Y4L3"
};

// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
  window.db = firebase.firestore();
  window.analytics = firebase.analytics();
  console.log('✅ Firebase initialized successfully');
  console.log('✅ Firestore ready');
  console.log('✅ Analytics ready');
} catch (error) {
  console.error('❌ Error initializing Firebase:', error);
}
