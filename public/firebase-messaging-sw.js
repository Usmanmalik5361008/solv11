// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated configs
const firebaseConfig = {
  apiKey: "AIzaSyDD8YJjwcklO31erF7PDvPZRyRgwPqs3tQ",
  authDomain: "neon-fiber-339917.firebaseapp.com",
  databaseURL:
    "https://neon-fiber-339917-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "neon-fiber-339917",
  storageBucket: "neon-fiber-339917.appspot.com",
  messagingSenderId: "245873116915",
  appId: "1:245873116915:web:ded063bc7ad9f9415a9986",
  measurementId: "G-Y88BL45X8S",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
