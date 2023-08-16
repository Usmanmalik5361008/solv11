import { RightOutlined } from "@ant-design/icons";
import "./index.scss";
import useAppChoice from "./useAppChoice";

const AppChoice = () => {
  const { handleAppChoice } = useAppChoice();

  return (
    <div className="app-choice-page-wrapper">
      <div className="choice-btn" onClick={handleAppChoice(1)}>
        <h1 className="font-Engschrift-Caps uppercase">Epargne - Retraite</h1>
        <RightOutlined className="right-icon" />
      </div>
      <div className="choice-btn" onClick={handleAppChoice(2)}>
        <h1 className="font-Engschrift-Caps uppercase">Santé - Prévoyance</h1>
        <RightOutlined className="right-icon" />
      </div>
    </div>
  );
};

export default AppChoice;
