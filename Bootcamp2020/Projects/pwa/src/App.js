import './App.css';
// import { configNotification } from './firebase_services/firebaseService.js';
import configNotification from './firebase_services/firebaseService.js';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/messaging';
import 'firebase/compat/messaging';

function App() {
  return (
    <div className="App">
      heelow
     <button onClick={configNotification}>Configure Message</button>

     </div>
  );
}

export default App;
