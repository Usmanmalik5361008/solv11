import { Spin } from "antd";
import React from "react";

const Button = ({
  title,
  onClick = null,
  style,
  prependIcon,
  type = "primary",
  loading,
  disabled = false,
}) => {
  const getClassName = () => {
    let className = "";
    if (type === "primary") {
      className = "btn-primary";
    } else if (type === "default") {
      className = "btn-default";
    }
    return className;
  };

  return (
    <button onClick={onClick} className={getClassName()} disabled={disabled}>
      {loading && (
        <Spin className="spin-white" style={{ marginRight: 10 }} size="small" />
      )}{" "}
      {!loading && prependIcon && (
        <img src={prependIcon} alt="" className="mr-2" />
      )}{" "}
      {title}
    </button>
  );
};

export default Button;
