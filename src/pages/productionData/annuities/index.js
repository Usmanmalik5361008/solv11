import { ConfirmationBox, Toolbar } from "globalComponents";
import { useTranslation } from "react-i18next";

const AnnuitiesPage = () => {
  const { t } = useTranslation();
  return (
    <div className="card-view card-padding">
      <Toolbar />
      <div className="custom-table-style-2-wrapper mt-5">
        <table>
          <thead>
            <tr>
              <th style={{ width: "2%" }}></th>
              <th>{t("type-annually")}</th>
              <th>{t("direct-payment")}</th>
              <th>{t("life-annuity")}</th>
              <th>{t("life-annuity")}</th>
              <th>{t("duration-certain-annuity")}</th>
              <th>{t("exit-age")}</th>
              <th>{t("reversion-rate")}</th>
              <th>{t("diff-age-ann-survivor-age")}</th>
              <th>{t("periodicity")}</th>
              <th>{t("mortality-table")}</th>
              <th>{t("mortality-table")}</th>
              <th>{t("mang-rate")}</th>
              <th>{t("mang-cost")}</th>
              <th>{t("guaranteed-rate")}</th>
              <th>{t("currency-agency")}</th>
              <th>{t("percentage")}</th>
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
            </tr>
          </tbody>
        </table>
      </div>

      <br />
      <ConfirmationBox />
    </div>
  );
};

export default AnnuitiesPage;
