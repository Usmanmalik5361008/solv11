import { Col, Row } from "antd";
import { ConfirmationBox } from "globalComponents";
import { Toolbar } from "globalComponents";
import { PillButton } from "globalComponents";
import React from "react";
import { useTranslation } from "react-i18next";

const AssetsPage = () => {
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
        </Row>
        <Row gutter={[15, 15]}>
          <Col xs={12} md={6} lg={4}>
            <div className="custom-form-field">
              <label>{t("support-type")}</label>
              <select className="dropdown-style-2">
                <option value="1">1</option>
              </select>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="custom-form-field">
              <label>{t("type_titre")}</label>
              <select className="dropdown-style-2">
                <option value="1">1</option>
              </select>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="custom-form-field">
              <label>{t("etatique")}</label>
              <select className="dropdown-style-2">
                <option value="1">1</option>
              </select>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="custom-form-field">
              <label>OCDE</label>
              <select className="dropdown-style-2">
                <option value="1">1</option>
              </select>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="custom-form-field">
              <label>{t("currency")}</label>
              <select className="dropdown-style-2">
                <option value="1">1</option>
              </select>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="custom-form-field">
              <label>{t("rating")}</label>
              <select className="dropdown-style-2">
                <option value="1">1</option>
              </select>
            </div>
          </Col>
        </Row>
        <div className="custom-table-style-2-wrapper mt-5">
          <table>
            <thead>
              <tr>
                <th style={{ width: "2%" }}></th>
                <th>{t("cal-date")}</th>
                <th>{t("title-name")}</th>
                <th>Type Titre</th>
                <th>{t("state")}</th>
                <th>{t("passive-type")}</th>
                <th>{t("code-support")}</th>
                <th>OCDE</th>
                <th>{t("currency")} Support</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td className="text-right">31/12/2012</td>
                <td>action code</td>
                <td>Action</td>
                <td className="text-right">N</td>
                <td className="text-right">UC</td>
                <td>UC</td>
                <td>O</td>
                <td>EUR</td>
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

export default AssetsPage;
