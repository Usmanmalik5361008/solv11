import { Toolbar } from "globalComponents";
import { ConfirmationBox } from "globalComponents";
import React from "react";
import { useTranslation } from "react-i18next";

const ProductSantePage = () => {
  const { t } = useTranslation();
  return (
    <div className="card-view card-padding">
      <Toolbar />
      <div className="custom-table-style-2-wrapper mt-5">
        <table>
          <thead>
            <tr>
              <th style={{ width: "2%" }}></th>
              <th>{t("date-cal")}</th>
              <th>{t("prod-code")}</th>
              <th>{t("not-prod-pb-trad")}</th>
              <th>{t("status-prod-pb-trad")}</th>
              <th>{t("ver-prod-pb-trad")}</th>
              <th>{t("ref-cg-pb-trad")}</th>
              <th>{t("fis-prod-pb-trad")}</th>
              <th>{t("guarantee-code")}</th>
              <th>{t("lib-guarantee-pb-trad")}</th>
              <th>LOB</th>
              <th>{t("mod-adhesion-pb-trad")}</th>
              <th>{t("college-pb-trad")}</th>
              <th>{t("rate-cost-acq-pb-trad")}</th>
              <th>{t("manag-fee-rate-pb-trad")}</th>
              <th>{t("rate-other-fees-pb-trad")}</th>
              <th>{t("reinsurance-rate-pb-trad")}</th>
              <th>{t("state")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <ConfirmationBox />
    </div>
  );
};

export default ProductSantePage;
