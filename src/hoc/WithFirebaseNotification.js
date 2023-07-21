import { notification } from "antd";
import { fetchToken, onMessageListener } from "../firebase/utils";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { onPermissionDenied } from "services/redux/slices/notification";
import { setToken } from "services/redux/slices/notification";
import { NOTIFICATION_TYPE } from "constants/common";
import { onNewNotification } from "services/redux/slices/notification";

const WithFirebaseNotification = ({ children }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const init = async () => {
      const token = await fetchToken();
      if (token !== null) {
        console.log({ token });
        dispatch(setToken(token));
      } else {
        dispatch(onPermissionDenied());
      }
    };
    init();
  }, [dispatch]);

  useEffect(() => {
    const init = async () => {
      if (!message) return;
      dispatch(onNewNotification(message?.notification));
      const [messageType, messageContent] =
        message?.notification.body.split(":");
      if (messageType === NOTIFICATION_TYPE.INFO_COMPLETED) return;
      notification[messageType.toLowerCase()]({
        message: message?.notification?.title,
        description: messageContent,
      });
    };

    init();
  }, [message, dispatch]);

  onMessageListener().then((message) => {
    console.log({ message });
    setMessage(message);
  });

  return children;
};

export default WithFirebaseNotification;
