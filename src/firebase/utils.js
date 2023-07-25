import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "./config";

export const fetchToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey:
        "BLIyTn_zHJ1NhL6dQcd51ar0bu-0QV3KQKQodcpOLPLvzuS6QolkwuVNi2tnYy_yxSttktoE_x7XF6DGNOuyw7Y",
    });
    return currentToken;
  } catch (err) {
    console.log("An error occurred while retrieving token. ", err);
    await requestPermission();
    return null;
  }
};

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

// Function to subscribe the user to push notifications
async function subscribeUserToPush() {
  try {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
    await serviceWorkerRegistration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: "YOUR_PUBLIC_KEY", // Replace with your actual public key
    });
    // Send the subscription object to your server to store it for sending push notifications
  } catch (error) {
    console.error("Error subscribing to push notifications:", error);
  }
}

// Function to request permission for push notifications
async function requestNotificationPermission() {
  try {
    const permissionResult = await Notification.requestPermission();
    return permissionResult === "granted";
  } catch (error) {
    console.error("Error requesting notification permission:", error);
    return false;
  }
}

// In your React component or app initialization
export async function initializePushNotifications() {
  if ("serviceWorker" in navigator && "PushManager" in window) {
    const permissionGranted = await requestNotificationPermission();
    if (permissionGranted) {
      subscribeUserToPush();
    } else {
      // Handle the case when the user denies the permission
    }
  }
}
