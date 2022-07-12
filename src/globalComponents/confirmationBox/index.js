import { CACNCEL_ICON } from "assets";
import { TICKET_WHTE_ICON } from "assets";
import { Button } from "globalComponents";
import React from "react";
import { useTranslation } from "react-i18next";

import "./index.scss";

const ConfirmationBox = ({ btnText = "Done Editing" }) => {
  const { t } = useTranslation();
  const info = (
    <p>
      {t("claims.info-1")} <strong>{`{${t("claims.info-variable")}}`}</strong>.{" "}
      {t("claims.info-2")}
    </p>
  );
  return (
    <div className="confirmation-box-wrapper">
      <div className="upper-section">{info}</div>
      <div className="bottom-section">
        <Button title={btnText} type="primary" prependIcon={TICKET_WHTE_ICON} />
        <Button type="default" title={t("cancel")} prependIcon={CACNCEL_ICON} />
      </div>
    </div>
  );
};

export default ConfirmationBox;
