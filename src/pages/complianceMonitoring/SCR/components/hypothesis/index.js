import { Row, Col, Divider, Grid } from "antd";
import { ConfirmationBox } from "globalComponents";
import React from "react";
import { useTranslation } from "react-i18next";

const { useBreakpoint } = Grid;

const Hypothesis = () => {

  const {t} = useTranslation();

  const screens = useBreakpoint();

  return (
    <>
      <Row gutter={20}>
        <Col xs={12}>
          <div className="custom-form-field">
            <label>{t('compliance-monitoring.hypothesis-tab.field-1')}</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col xs={24} className="mt-5">
          <Row gutter={20}>
            {/* left side of first section */}
            <Col md={24} lg={12}>
              <Row gutter={10}>
                <Col md={24} lg={16}>
                  <div className="custom-form-field">
                    <label>{t("compliance-monitoring.hypothesis-tab.field-2")}</label>
                    <div className="multiple-inputs-wrapper">
                      <input placeholder="30" />
                      <input placeholder="30" />
                      <input placeholder="30" />
                    </div>
                  </div>
                  <div className="custom-form-field mt-3">
                    <label>{t("compliance-monitoring.hypothesis-tab.field-3")}</label>
                    <select className="dropdown-style-2">
                      <option value="1">1</option>
                    </select>
                  </div>
                  <div className="custom-form-field mt-3">
                    <label>{t("compliance-monitoring.hypothesis-tab.field-4")}</label>
                    <select className="dropdown-style-2">
                      <option value="1">1</option>
                    </select>
                  </div>
                </Col>
                {/* right side of first section */}
                <Col md={24} lg={8}>
                  <div className="custom-form-field">
                    <label>{t("compliance-monitoring.hypothesis-tab.field-5")}</label>
                    <input placeholder="30" />
                  </div>
                  <div className="custom-form-field mt-3">
                    <label>{t("compliance-monitoring.hypothesis-tab.field-6")}</label>
                    <input placeholder="30" />
                  </div>
                  <div className="custom-form-field mt-3">
                    <label>{t("compliance-monitoring.hypothesis-tab.field-7")}</label>
                    <input placeholder="30" />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={24} lg={1} className="d-flex justify-content-center">
              <Divider
                orientation="center"
                type={screens.lg ? "vertical" : "horizontal"}
                style={{ height: "100%" }}
              />
            </Col>

            {/* second section */}
            <Col md={24} lg={11}>
              <div className="custom-form-field">
                <label>{t("compliance-monitoring.hypothesis-tab.field-8")}</label>
                <input placeholder="30" />
              </div>
              <div className="custom-form-field mt-3">
                <label>{t("compliance-monitoring.hypothesis-tab.field-9")}</label>
                <input placeholder="30" />
              </div>
              <div className="custom-form-field mt-3">
                <label>{t("compliance-monitoring.hypothesis-tab.field-10")}</label>
                <div className="multiple-inputs-wrapper">
                  <div className="input-with-label">
                    <p>{t("compliance-monitoring.hypothesis-tab.field-10-placeholder")}</p>
                    <input placeholder="30" style={{ paddingLeft: 120 }} />
                  </div>

                  <div className="input-with-label">
                  <p>{t("compliance-monitoring.hypothesis-tab.field-10-placeholder")}</p>
                    <input
                      placeholder="30"
                      className="text-right"
                      style={{ paddingLeft: 120 }}
                    />
                  </div>
                </div>
              </div>
              <div className="custom-form-field mt-3">
                <label>{t("compliance-monitoring.hypothesis-tab.field-11")}</label>
                <div className="multiple-inputs-wrapper">
                  <input placeholder="30" />
                  <input placeholder="30" />
                </div>
              </div>
              <div className="custom-form-field mt-3">
                <label>{t("compliance-monitoring.hypothesis-tab.field-12")}</label>
                <div className="multiple-inputs-wrapper">
                  <input placeholder="30" />
                  <input placeholder="30" />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="mt-5">
        <ConfirmationBox />
      </div>
    </>
  );
};

export default Hypothesis;
