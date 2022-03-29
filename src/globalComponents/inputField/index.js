import { Divider } from "antd";
import React from "react";
import "./index.scss";

const InputField = ({ prependIcon = "", ...rest }) => {
  return (
    <div className="input-field-container">
      {prependIcon && (
        <>
          <img className="prepend-icon" src={prependIcon} alt="" />
          <Divider className="icon-divider" type="vertical" />
        </>
      )}
      <input {...rest} className={prependIcon ? "icon-padding" : ""} />
    </div>
  );
};

export default InputField;
