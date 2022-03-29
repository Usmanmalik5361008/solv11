import React from "react";

const PillButton = ({
  title = "",
  onClick = null,
  rounded = true,
  size = "normal",
  style = {},
  prependIcon = null,
  type = "normal",
}) => {
  const getClassName = () => {
    let className = "";

    if (type === "normal") {
      className = "pill-button";
    }
    if (type === "highlighted") {
      className = "pill-button-highlighted";
    }
    if (rounded) {
      className = className + " rounded";
    }
    return className;
  };

  return (
    <button onClick={onClick} style={style} className={getClassName()}>
      {prependIcon && <img src={prependIcon} alt="" />} {title}
    </button>
  );
};

export default PillButton;
