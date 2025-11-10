// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyANDJRYu6r-DczEoSscILdnCLpMCwX-UvM",
  authDomain: "payments-5802a.firebaseapp.com",
  projectId: "payments-5802a",
  messagingSenderId: "467232488937",
  appId: "1:467232488937:web:79680dbf4fed78a3201f78"
});


const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Background Message received ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
