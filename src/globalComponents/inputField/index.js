import { Divider } from "antd";
import React, { forwardRef } from "react";
import "./index.scss";

const InputField = forwardRef(({ prependIcon = "", error, ...rest }, ref) => {
  return (
    <div className={`input-field-container ${error ? "error" : ""}`}>
      {prependIcon && (
        <>
          <img className="prepend-icon" src={prependIcon} alt="" />
          <Divider className="icon-divider" type="vertical" />
        </>
      )}
      <input
        {...rest}
        className={prependIcon ? "icon-padding" : ""}
        ref={ref}
      />
      {error && <span className="form-error-message">{error?.message}</span>}
    </div>
  );
});

export default InputField;
