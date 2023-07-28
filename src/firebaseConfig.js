// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const messaging = getMessaging(firebaseApp);
export const analytics = getAnalytics(firebaseApp);

export const fetchToken = async () => {
  // First, request permission
  try {
    await requestPermission(messaging);
    try {
      const currentToken = await getToken(messaging, {
        vapidKey: process.env.REACT_APP_VAPID_KEY,
      });
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        return currentToken;
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        return null;
      }
    } catch (err) {
      console.log("An error occurred while retrieving token. ", err);
    }
  } catch (err_1) {
    console.log("Permission denied: ", err_1);
  }
};

export const requestPermission = async (messaging) => {
  // Request permission to receive notifications
  const permission = await Notification.requestPermission();

  // If the user granted permission
  if (permission === "granted") {
    console.log("Notification permission granted.");
  } else {
    throw new Error("Permission not granted");
  }
};

export const onMessageListener = (callback) => {
  return onMessage(messaging, callback);
};
