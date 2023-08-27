import { notification } from "antd";
import { NOTIFICATION_TYPE } from "constants/common";
import { fetchToken, onMessageListener } from "firebaseConfig";
import { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { onCalculationCompletion } from "services/redux/slices/notification";
import {
  onNewNotification,
  onPermissionDenied,
  setToken,
} from "services/redux/slices/notification";

const WithFirebaseNotification = ({ children }) => {
  const dispatch = useDispatch();
  const broadcast = useRef(new BroadcastChannel("background-message"));

  const saveAndDisplayMessage = useCallback(
    async (message) => {
      try {
        if (!message) return;

        dispatch(onNewNotification(message?.notification));
        const [messageType, messageContent] =
          message?.notification.body.split(":");
        if (messageType === NOTIFICATION_TYPE.INFO_COMPLETED) {
          dispatch(onCalculationCompletion());
        }

        notification[messageType?.toLowerCase()]({
          message: message?.notification?.title,
          description: messageContent,
        });
      } catch (err) {
        console.error(err);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    broadcast.current.onmessage = (event) => {
      saveAndDisplayMessage(event?.data);
    };
  }, [saveAndDisplayMessage]);

  useEffect(() => {
    const unsubscribe = onMessageListener((payload) => {
      saveAndDisplayMessage(payload);
    });

    return () => {
      unsubscribe();
    };
  }, [saveAndDisplayMessage]);

  useEffect(() => {
    const init = async () => {
      const token = await fetchToken();
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
