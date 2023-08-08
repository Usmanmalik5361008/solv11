import { RightOutlined } from "@ant-design/icons";
import "./index.scss";

const AppChoice = () => {
  return (
    <div className="app-choice-page-wrapper">
      <div className="choice-btn">
        <h1 className="font-Engschrift-Caps uppercase">Choice 1</h1>
        <RightOutlined className="right-icon" />
      </div>
      <div className="choice-btn">
        <h1 className="font-Engschrift-Caps uppercase">Choice 2</h1>
        <RightOutlined className="right-icon" />
      </div>
    </div>
  );
};

export default AppChoice;
