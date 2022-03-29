import React from "react";
import "./index.scss";

const Option = ({ id, title, icon, onClick, isActive }) => {
  const handleClick = () => onClick(id);

  return (
    <div
      className={`claim-option ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      {icon} <p>{title}</p>
    </div>
  );
};

export default Option;
