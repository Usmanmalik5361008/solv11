import {
  BALANCE_SHEET_ICON,
  EQUITY_ICON,
  PRODUCT_ICON,
  REDEMPTION_ICON,
  PASSIVE_ICON,
  MATRIX_ICON,
  ANNUALITIES_ICON,
  HYPOTHESIS_ICON,
  ASSETS_ICON,
} from "assets";
import React from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const WorkStatuses = () => {
  const { t } = useTranslation();

  return (
    <div className="work-statuses-wrapper">
      <WorkStatus
        status={"Done"}
        title={t("scrcalculation.balance-sheet")}
        icon={BALANCE_SHEET_ICON}
      />
      <WorkStatus
        status={"Done"}
        title={t("scrcalculation.equity")}
        icon={EQUITY_ICON}
      />
      <WorkStatus
        status={"Done"}
        title={t("scrcalculation.assets")}
        icon={PRODUCT_ICON}
      />
      <WorkStatus
        status={"Done"}
        title={t("scrcalculation.passive")}
        icon={REDEMPTION_ICON}
      />
      <WorkStatus
        status={"Done"}
        title={t("scrcalculation.products")}
        icon={PASSIVE_ICON}
      />
      <WorkStatus
        status={"Done"}
        title={t("scrcalculation.annuities")}
        icon={MATRIX_ICON}
      />
      <WorkStatus
        status={"Done"}
        title={t("scrcalculation.redemptions")}
        icon={ANNUALITIES_ICON}
      />
      <WorkStatus
        status={"Done"}
        title={t("scrcalculation.shock-hypotheses")}
        icon={HYPOTHESIS_ICON}
      />
      <WorkStatus
        status={"Done"}
        title={t("scrcalculation.correlation-matrices")}
        icon={ASSETS_ICON}
      />
    </div>
  );
};

const WorkStatus = ({ status, icon, title }) => {
  return (
    <div className="work-status">
      <div className="work-status-icon">{<img src={icon} />}</div>
      <div>
        <div className="work-status-title">{title}</div>
        <div className="work-status-status">({status})</div>
      </div>
    </div>
  );
};

export default WorkStatuses;
