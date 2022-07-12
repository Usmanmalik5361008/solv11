import { Col, Row } from "antd";
import { Toolbar } from "globalComponents";
import { ConfirmationBox } from "globalComponents";
import React from "react";
import { useTranslation } from "react-i18next";

const Contract = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Toolbar />
      <h5 className="small-heading mt-5">
        {t("compliance-monitoring.unit-linked-policy")}
      </h5>
      <div className="custom-table-style-2-wrapper">
        <table>
          <thead>
            <tr>
              <th style={{ width: "5%" }}></th>
              <th>{t("compliance-monitoring.fn-contract-tab.field-1")}</th>
              <th>{t("compliance-monitoring.fn-contract-tab.field-2")}</th>
              <th>{t("compliance-monitoring.fn-contract-tab.field-3")}</th>
              <th>{t("compliance-monitoring.fn-contract-tab.field-4")}</th>
              <th>{t("compliance-monitoring.fn-contract-tab.field-5")}</th>
              <th>{t("compliance-monitoring.fn-contract-tab.field-6")}</th>
              <th>{t("compliance-monitoring.fn-contract-tab.field-7")}</th>
              <th>{t("compliance-monitoring.fn-contract-tab.field-8")}</th>
              <th>{t("compliance-monitoring.fn-contract-tab.field-9")}</th>
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
      <Row gutter={[10, 10]} className="mt-5">
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-10")}</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-11")}</label>
            <input className="text-right" placeholder="0" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-12")}</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-13")}</label>
            <input className="text-right" placeholder="0" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-14")}</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-15")}</label>
            <input className="text-right" placeholder="0" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-16")}</label>
            <input className="text-right" placeholder="0" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-17")}</label>
            <input className="text-right" placeholder="0" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-18")}</label>
            <input className="text-right" placeholder="0" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-19")}</label>
            <input className="text-right" placeholder="0" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-20")}</label>
            <input className="text-right" placeholder="0" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-21")}</label>
            <input className="text-right" placeholder="0" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-22")}</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-23")}</label>
            <input className="text-right" placeholder="0" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-24")}</label>
            <input className="text-right" placeholder="0" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-25")}</label>
            <input className="text-right" placeholder="0" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-26")}</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-27")}</label>
            <input className="text-right" placeholder="0" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-28")}</label>
            <input className="text-right" placeholder="0" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-29")}</label>
            <input className="text-right" placeholder="0" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-30")}</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-31")}</label>
            <input className="text-right" placeholder="0" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-32")}</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-33")}</label>
            <input className="text-right" placeholder="0" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-34")}</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-35")}</label>
            <input className="text-right" placeholder="0" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-36")}</label>
            <input className="text-right" placeholder="0" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-37")}</label>
            <input className="text-right" placeholder="0" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-38")}</label>
            <input className="text-right" placeholder="0" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-39")}</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.fn-contract-tab.field-40")}</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
      </Row>
      <div className="mt-5">
        <ConfirmationBox />
      </div>
    </div>
  );
};

export default Contract;
