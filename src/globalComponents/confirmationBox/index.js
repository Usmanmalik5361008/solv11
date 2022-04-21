import { TICKET_WHTE_ICON } from "assets";
import { Button } from "globalComponents";
import React from "react";

import "./index.scss";

const ConfirmationBox = () => {
  const info = (
    <p>
      You can use parameters in text and analytics query steps by placing the
      parameter name in braces, like <strong>{"{parameterName}"}</strong>.
      Whatever value you set here will be replaced in steps below which use that
      parameter
    </p>
  );
  return (
    <div className="confirmation-box-wrapper">
      <div className="upper-section">{info}</div>
      <div className="bottom-section">
        <Button
          title="Done Editing"
          type="primary"
          prependIcon={TICKET_WHTE_ICON}
        />
      </div>
    </div>
  );
};

export default ConfirmationBox;
