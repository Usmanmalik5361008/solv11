import { notification } from "antd";
import { NOTIFICATION_TYPE } from "constants/common";
import { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  onNewNotification,
  onPermissionDenied,
  setToken,
} from "services/redux/slices/notification";
import { getFirebaseToken, onMessageListener } from "../firebase/utils";

const WithFirebaseNotification = ({ children }) => {
  const dispatch = useDispatch();
  const broadcast = useRef(new BroadcastChannel("background-message"));

  const saveAndDisplayMessage = useCallback(
    async (message) => {
      try {
        if (!message) return;
        console.log({ message });
        dispatch(onNewNotification(message?.notification));
        const [messageType, messageContent] =
          message?.notification.body.split(":");
        if (messageType === NOTIFICATION_TYPE.INFO_COMPLETED) return;
        notification[messageType.toLowerCase()]({
          message: message?.notification?.title,
          description: messageContent,
        });
      } catch (err) {
        console.error(err);
      }
    },
    [dispatch]
  );

  onMessageListener().then((message) => {
    saveAndDisplayMessage(message);
  });

  useEffect(() => {
    broadcast.current.onmessage = (event) => {
      saveAndDisplayMessage(event?.data);
    };
  }, [saveAndDisplayMessage]);

  useEffect(() => {
    const init = async () => {
      const token = await getFirebaseToken();
      console.log({ token });
      if (token !== null) {
        dispatch(setToken(token));
      } else {
        dispatch(onPermissionDenied());
      }
    };
    init();
  }, [dispatch]);

  return children;
};

export default WithFirebaseNotification;
