import { Button, ConfirmationBox, Toolbar } from "globalComponents";
import { useTranslation } from "react-i18next";

const ProductUCPage = () => {
  const { t } = useTranslation();
  return (
    <div className="card-view card-padding">
      <Toolbar />
      <div className="custom-table-style-2-wrapper mt-5">
        <table>
          <thead>
            <tr>
              <th style={{ width: "2%" }}></th>
              <th>{t("prod-code")}</th>
              <th>{t("male-mortality-table")}</th>
              <th>{t("female-mortality-table")}</th>
              <th>{t("maj-tab-risk-prim")}</th>
              <th>{t("maj-tab-reasurance")}</th>
              <th>{t("male-reinsurance-mortality-table")}</th>
              <th>{t("female-reinsurance-mortality-table")}</th>
              <th>{t("discount")}</th>
              <th>{t("discount-duration")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>ABN</td>
              <td>Reass...</td>
              <td>Reass...</td>
              <td>100</td>
              <td>35</td>
              <td>Reass...</td>
              <td>Reass...</td>
              <td>80</td>
              <td>NON</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-5 d-flex flex-row-reverse" style={{ gap: 20 }}>
        <Button type="primary" title={t("edit-prod")} />
        <Button type="default" title={t("del-prod")} />
        <Button type="default" title={t("add-prod")} />
      </div>
      <br />
      <ConfirmationBox />
    </div>
  );
};

export default ProductUCPage;
