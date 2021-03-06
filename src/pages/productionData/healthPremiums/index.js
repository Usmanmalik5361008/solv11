import { Col, Row } from "antd";
import { ConfirmationBox } from "globalComponents";
import { Toolbar } from "globalComponents";
import { PillButton } from "globalComponents";
import React from "react";
import { useTranslation } from "react-i18next";

const HealthPremiumsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="card-view card-padding">
      <Toolbar />
      <div className="light-grey-bordered mt-5">
        <div className="d-flex justify-space-between mb-3" style={{ gap: 10 }}>
          <h5>{t("filter")}</h5>
          <div className="d-flex" style={{ gap: 10 }}>
            <PillButton title={t("apply-filters")} type="highlighted" />
            <PillButton title={t("clear")} />
          </div>
        </div>
        <Row gutter={[15, 15]}>
          <Col xs={12} md={6} lg={4}>
            <div className="custom-form-field">
              <label>{t("cal-date")}</label>
              <input type={"date"} />
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="custom-form-field">
              <label>{t("contract-num")}</label>
              <input />
            </div>
          </Col>
        </Row>
        <div className="custom-table-style-2-wrapper mt-5">
          <table>
            <thead>
              <tr>
                <th style={{ width: "2%" }}></th>
                <th>{t("cal-date")}</th>
                <th>{t("contact-num")}</th>
                <th>{t("beneficiary-num")}</th>
                <th>Code LOB</th>
                <th>LOB</th>
                <th>{t("code-act")}</th>
                <th>{t("guarantee-code")}</th>
                <th>{t("effective-date")}</th>
                <th>{t("periodicity")}</th>
                <th>{t("aquired-contribution")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td className="text-right">31/12/2012</td>
                <td className="text-right">10221212</td>
                <td className="text-right">1</td>
                <td className="text-right"></td>
                <td className="text-right">MedExp</td>
                <td>10</td>
                <td>G1</td>
                <td>31/12/2012</td>
                <td>A</td>
                <td>10121212</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <ConfirmationBox />
    </div>
  );
};

export default HealthPremiumsPage;
