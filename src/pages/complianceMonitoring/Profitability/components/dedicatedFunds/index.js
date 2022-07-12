import { Col, Divider, Row } from "antd";
import { Toolbar } from "globalComponents";
import { ConfirmationBox } from "globalComponents";
import React from "react";
import { useTranslation } from "react-i18next";

const DedicatedFunds = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Toolbar />
      <Row className="mt-5">
        <Col sm={24} md={11}>
          <Row gutter={[10, 10]}>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>
                  {t("compliance-monitoring.contract-dedicated-tab.field-1")}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>
                  {t("compliance-monitoring.contract-dedicated-tab.field-2")}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>
                  {t("compliance-monitoring.contract-dedicated-tab.field-2")}
                </label>
                <select className="dropdown-style-2">
                  <option value="1">1</option>
                </select>
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>
                  {t("compliance-monitoring.contract-dedicated-tab.field-3")}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>
                  {t("compliance-monitoring.contract-dedicated-tab.field-4")}
                </label>
                <select className="dropdown-style-2">
                  <option value="1">1</option>
                </select>
              </div>
            </Col>

            <Col xs={12}>
              <div className="custom-form-field">
                <label>
                  {t("compliance-monitoring.contract-dedicated-tab.field-5")}
                </label>
                <select className="dropdown-style-2">
                  <option value="1">1</option>
                </select>
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>
                  {t("compliance-monitoring.contract-dedicated-tab.field-6")}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>
                  {t("compliance-monitoring.contract-dedicated-tab.field-7")}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>
                  {t("compliance-monitoring.contract-dedicated-tab.field-8")}
                </label>
                <div className="multiple-inputs-wrapper">
                  <input placeholder="30" />
                  <select className="dropdown-style-2">
                    <option value="1">
                      {t(
                        "compliance-monitoring.contract-dedicated-tab.dropdown-1"
                      )}
                    </option>
                  </select>
                </div>
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>
                  {t("compliance-monitoring.contract-dedicated-tab.field-9")}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>
                  {t("compliance-monitoring.contract-dedicated-tab.field-10")}
                </label>
                <div className="multiple-inputs-wrapper">
                  <input placeholder="30" />
                  <select className="dropdown-style-2">
                    <option value="1">
                      {t(
                        "compliance-monitoring.contract-dedicated-tab.dropdown-1"
                      )}
                    </option>
                  </select>
                </div>
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>
                  {t("compliance-monitoring.contract-dedicated-tab.field-11")}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>
                  {t("compliance-monitoring.contract-dedicated-tab.field-12")}
                </label>
                <input />
              </div>
            </Col>
          </Row>
        </Col>
        <Col sm={24} md={2} className="d-flex justify-center">
          <Divider className="h-100" type="vertical" />
        </Col>
        <Col sm={24} md={11}>
          <Row gutter={[10, 10]}>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>
                  {t("compliance-monitoring.contract-dedicated-tab.field-13")}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <h5 className="text-center">
                {t("compliance-monitoring.contract-dedicated-tab.title-1")}
              </h5>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>
                  {t("compliance-monitoring.contract-dedicated-tab.field-14")}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>
                  {t("compliance-monitoring.contract-dedicated-tab.field-15")}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>
                  {t("compliance-monitoring.contract-dedicated-tab.field-16")}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>
                  {t("compliance-monitoring.contract-dedicated-tab.field-17")}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>
                  {t("compliance-monitoring.contract-dedicated-tab.field-18")}
                </label>
                <input />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={[20, 20]}>
        <Col md={24} lg={12} className="mt-5">
          <div className="custom-table-style-2-wrapper">
            <table>
              <thead>
                <tr>
                  <th style={{ width: "5%" }}></th>
                  <th>
                    {t(
                      "compliance-monitoring.contract-external-tab-generic.field-1"
                    )}
                  </th>
                  <th>
                    {t(
                      "compliance-monitoring.contract-external-tab-generic.field-2"
                    )}
                  </th>
                  <th>
                    {t(
                      "compliance-monitoring.contract-external-tab-generic.field-3"
                    )}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td className="text-right">1</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-right">2</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
        <Col md={24} lg={12} className="mt-5">
          <div className="custom-table-style-2-wrapper">
            <table>
              <thead>
                <tr>
                  <th style={{ width: "5%" }}></th>
                  <th>
                    {t(
                      "compliance-monitoring.contract-external-tab-generic.field-1"
                    )}
                  </th>
                  <th>
                    {t(
                      "compliance-monitoring.contract-external-tab-generic.field-2"
                    )}
                  </th>
                  <th>
                    {t(
                      "compliance-monitoring.contract-external-tab-generic.field-3"
                    )}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td className="text-right">1</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-right">2</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
      <div className="mt-5">
        <ConfirmationBox />
      </div>
    </div>
  );
};

export default DedicatedFunds;
