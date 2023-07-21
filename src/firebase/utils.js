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
