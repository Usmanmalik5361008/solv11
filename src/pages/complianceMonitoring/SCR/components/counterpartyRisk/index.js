import { Col, Row } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const CounterpartyRisk = () => {
  const {t} = useTranslation();
  return (
    <div>
      <h5 className="small-heading">{t("compliance-monitoring.counterparty-risk-tab.title-1")}</h5>
      <div className="custom-table-style-2-wrapper">
        <table>
          <thead>
            <tr>
              <th style={{ width: "5%" }}></th>
              <th>
                {t("compliance-monitoring.counterparty-risk-tab.field-1")}
              </th>
              <th>
                {t("compliance-monitoring.counterparty-risk-tab.field-2")}
              </th>
              <th>
                {t("compliance-monitoring.counterparty-risk-tab.field-2")}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>*</td>
              <td>Counterparty 1</td>
              <td>Risk 1</td>
              <td>Risk 1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="small-heading mt-5">
        {t("compliance-monitoring.counterparty-risk-tab.title-2")}
      </p>
      <Row gutter={[30, 30]}>
        <Col sm={24} md={12}>
          <div className="custom-form-field">
            <label>
              {t("compliance-monitoring.counterparty-risk-tab.field-3")}
            </label>
            <input placeholder="180 880 488.00" className="text-right" />
          </div>
        </Col>
        <Col sm={24} md={12}>
          <div className="custom-form-field">
            <label>
              {t("compliance-monitoring.counterparty-risk-tab.field-4")}
            </label>
            <input placeholder="180 880 488.00" className="text-right" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CounterpartyRisk;
