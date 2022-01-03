

const firebaseConfig = {
    apiKey: "AIzaSyB40CNwFx3XkJ0G2sqBoC41eap5Nxla3Pg",
    authDomain: "notificationapp-ec053.firebaseapp.com",
    projectId: "notificationapp-ec053",
    storageBucket: "notificationapp-ec053.appspot.com",
    messagingSenderId: "20623481391",
    appId: "1:20623481391:web:d3ce4777e6e7de1b4084da"
  };
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./firebase-messaging-sw.js')
       .then(function(registration) {
          console.log('Registration successful, scope is:', registration.scope);
       }).catch(function(err) {
          console.log('Service worker registration failed, error:', err);
       });
 }

   // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
//  const messaging = firebase.messaging();y
