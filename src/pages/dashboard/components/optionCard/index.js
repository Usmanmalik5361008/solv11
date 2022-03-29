import React from "react";
import "./index.scss";

const OptionCard = ({ title, icon, onClick = null, bgColor }) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className="option-card"
      onClick={onClick}
    >
      <img src={icon} alt="" />
      <h5>{title}</h5>
    </div>
  );
};

export default OptionCard;
