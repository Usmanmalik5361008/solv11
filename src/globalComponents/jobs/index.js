import { Badge, Empty, Menu } from "antd";
import { NOTIFICATION_TYPE } from "constants/common";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import "./styles.scss";

const Jobs = () => {
  const notifications = useSelector(
    (state) => state.notification?.notifications
  );

  const renderNotifications = useCallback((notification, index) => {
    const notificationBody = notification.body;
    let [notificationType, encodedMessage] = notificationBody.split(":");
    const colors = {
      [NOTIFICATION_TYPE.ERROR]: "#fbbc0e",
      [NOTIFICATION_TYPE.INFO_COMPLETED]: "#52c41a",
      [NOTIFICATION_TYPE.INFO]: "#262ccf",
    };

    encodedMessage =
      notificationType === NOTIFICATION_TYPE.INFO_COMPLETED
        ? "COMPLETED"
        : encodedMessage;

    return (
      <JobCard
        key={index}
        color={colors[notificationType]}
        title={notificationType}
        dateTime={"Date Time"}
        // progress={60}
        projectName={encodedMessage}
      />
    );
  }, []);

  return (
    <div className="jobs-container">
      <div className="jobs-header">
        <h5>Notifications </h5>
        <Badge count={notifications?.length} />
      </div>
      <div className="jobs-body">
        {notifications.length > 0 ? (
          notifications.map(renderNotifications)
        ) : (
          <Empty description="No new Notification" />
        )}
      </div>
    </div>
  );
};

const JobCard = ({ color, projectName, dateTime, progress, title }) => {
  const menu = (
    <Menu>
      <Menu.Item>Delete</Menu.Item>
      <Menu.Item>Update</Menu.Item>
      <Menu.Item>Add</Menu.Item>
    </Menu>
  );

  return (
    <div className="job-card">
      <div className="job-color" style={{ backgroundColor: color }}></div>
      <div className="job-card-body">
        <div>
          <h5 className="title">{title}</h5>
          <p className="name-datetime">{projectName}</p>
        </div>
        <div>
          {/* <Progress
            type="circle"
            percent={progress}
            width={35}
            format={(percent) => <p className="percent">{percent}%</p>}
          /> */}
          {/* <Dropdown className="ml-2" overlay={menu}>
            <a>
              <img src={VERTICAL_DOTS} alt="" className="job-menu" />
            </a>
          </Dropdown> */}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
