import { Dropdown, Menu, Progress } from "antd";
import { VERTICAL_DOTS } from "assets";
import "./styles.scss";
import { useSelector } from "react-redux";

const Jobs = () => {
  const notifications = useSelector(
    (state) => state.notification.notifications
  );

  return (
    <div className="jobs-container">
      <div className="jobs-header">
        <h5>Jobs 7</h5>
      </div>
      <div className="jobs-body">
        <JobCard
          color={"#FBBA0E"}
          projectName={"Project name"}
          dateTime={"Date Time"}
          progress={60}
          title={"SCR"}
        />
        <JobCard
          color={"#262DCF"}
          projectName={"Project name"}
          dateTime={"Date Time"}
          progress={100}
          title={"SCR"}
        />
        <JobCard
          color={"#F03C52"}
          projectName={"Project name"}
          dateTime={"Date Time"}
          progress={40}
          title={"SCR"}
        />
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
          <p className="name-datetime">
            {projectName}: {dateTime}
          </p>
        </div>
        <div>
          <Progress
            type="circle"
            percent={progress}
            width={35}
            format={(percent) => <p className="percent">{percent}%</p>}
          />
          <Dropdown className="ml-2" overlay={menu}>
            <a>
              <img src={VERTICAL_DOTS} className="job-mmenu" />
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
