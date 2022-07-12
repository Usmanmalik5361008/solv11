import { Toolbar } from "globalComponents";
import { ConfirmationBox } from "globalComponents";
import React from "react";
import { useTranslation } from "react-i18next";

const FullRedemptionPage = () => {
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
              <th>{t("type-treat")}</th>
              <th>{t("prod-code")}</th>
              <th>{t("year")} 1</th>
              <th>{t("year")} 2</th>
              <th>{t("year")} 3</th>
              <th>{t("year")} 4</th>
              <th>{t("year")} 5</th>
              <th>{t("year")} 6</th>
              <th>{t("year")} 7</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>3/11/2014</td>
              <td>Calcul</td>
              <td>101</td>
              <td>4</td>
              <td>5</td>
              <td>3</td>
              <td>5</td>
              <td>33</td>
              <td>33</td>
              <td>33</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <ConfirmationBox />
    </div>
  );
};

export default FullRedemptionPage;
