import { getToken, onMessage } from "firebase/messaging";

import { messaging } from "./config";

export const fetchToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey: "",
    });
    return currentToken;
  } catch (err) {
    console.log("An error occurred while retrieving token. ", err);
    await requestPermission();
    return null;
  }
};

export const getOrRegisterServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    const serviceWorker = await window.navigator.serviceWorker.getRegistration(
      "/firebase-push-notification-scope"
    );
    if (serviceWorker) return serviceWorker;
    return window.navigator.serviceWorker
      .register("/firebase-messaging-sw.js", {
        scope: "/firebase-push-notification-scope",
      })
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.error("Error registering Service Worker:", error);
      });
  }
  throw new Error("The browser doesn`t support service worker.");
};

export const getFirebaseToken = () =>
  getOrRegisterServiceWorker().then((serviceWorkerRegistration) => {
    try {
      return getToken(messaging, {
        vapidKey: process.env.REACT_APP_VAPID_KEY,
        serviceWorkerRegistration,
      });
    } catch (err) {
      requestPermission();
    }
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

async function requestPermission() {
  console.log("Requesting permission...");
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    console.log("Notification permission granted.");
  }
}
