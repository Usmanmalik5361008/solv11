import { Col, Row } from "antd";
import { ConfirmationBox } from "globalComponents";
import { Toolbar } from "globalComponents";
import { PillButton } from "globalComponents";
import React from "react";
import { useTranslation } from "react-i18next";

const Liabilities = () => {
  const { t } = useTranslation();
  return (
    <div className="card-view card-padding">
      <Toolbar />
      <div className="light-grey-bordered mt-5">
        <div className="d-flex justify-space-between mb-3" style={{ gap: 10 }}>
          <h5>{t("filter")}</h5>
          <div className="d-flex" style={{ gap: 10 }}>
            <PillButton title="Apply Filters" type="highlighted" />
            <PillButton title="Clear" />
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
              <label>{t("prod-code")}</label>
              <input />
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="custom-form-field">
              <label>{t("code-support")}</label>
              <input />
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="custom-form-field">
              <label>TMG</label>
              <input />
            </div>
          </Col>
        </Row>
        <div className="custom-table-style-2-wrapper mt-5">
          <table>
            <thead>
              <tr>
                <th style={{ width: "5%" }}></th>
                <th>{t("cal-date")}</th>
                <th>{t("prod-code")}</th>
                <th>{t("contract-num")}</th>
                <th>{t("code-support")}</th>
                <th>PAB</th>
                <th>{t("type-support")}</th>
                <th>{t("currency")} Support</th>
                <th>{t("death-guarantee")}</th>
                <th>{t("mortant-guarantee-death")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td className="text-right">31/12/2012</td>
                <td>ABN</td>
                <td>1212-001602</td>
                <td>UC</td>
                <td>
                  <input type={"checkbox"} />
                </td>

                <td>UC</td>
                <td>EUR</td>
                <td>TUNNEL</td>
                <td>0.10</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-5">
          <ConfirmationBox />
        </div>
      </div>
    </div>
  );
};

export default Liabilities;
