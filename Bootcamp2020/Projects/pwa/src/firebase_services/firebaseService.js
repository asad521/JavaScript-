// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/messaging';
import 'firebase/compat/messaging';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB40CNwFx3XkJ0G2sqBoC41eap5Nxla3Pg",
  authDomain: "notificationapp-ec053.firebaseapp.com",
  projectId: "notificationapp-ec053",
  storageBucket: "notificationapp-ec053.appspot.com",
  messagingSenderId: "20623481391",
  appId: "1:20623481391:web:d3ce4777e6e7de1b4084da"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
 const messaging = firebase.messaging();

export default function configNotification() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./firebase-messaging-sw.js')
       .then(function(registration) {
          console.log('Registration successful, scope is:', registration.scope);
       }).catch(function(err) {
          console.log('Service worker registration failed, error:', err);
       });
 }
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if(permission === "granted") {
        messaging.getToken(messaging, { vapidKey: '<YOUR_PUBLIC_VAPID_KEY_HERE>' }).then((currentToken) => {
            if (currentToken) {
              // Send the token to your server and update the UI if necessary
              console.log('token=>' )
              console.log(currentToken)
              // ...
            } else {
              // Show permission request UI
              console.log('No registration token available. Request permission to generate one.');
              // ...
            }
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            // ...
          });
    }
  });
}
