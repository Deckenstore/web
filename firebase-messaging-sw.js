// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyANDJRYu6r-DczEoSscILdnCLpMCwX-UvM",
  authDomain: "payments-5802a.firebaseapp.com",
  projectId: "payments-5802a",
  storageBucket: "payments-5802a.firebasestorage.app",
  messagingSenderId: "467232488937",
  appId: "1:467232488937:web:79680dbf4fed78a3201f78",
});


const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
  });
});
