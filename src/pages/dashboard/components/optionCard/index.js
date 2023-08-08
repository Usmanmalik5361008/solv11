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
      <p>{title}</p>
    </div>
  );
};

export default OptionCard;
