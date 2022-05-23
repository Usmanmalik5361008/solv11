import { Col, Row } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const ScrSanteEn = () => {
  const {t} = useTranslation();
  return (
    <Row gutter={[10, 10]}>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>
            {t("compliance-monitoring.scr-health-tab.field-1")}
          </label>
          <input className="text-right" />
        </div>
      </Col>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>
            {t("compliance-monitoring.scr-health-tab.field-2")} 
          </label>
          <input className="text-right" />
        </div>
      </Col>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>
            {t("compliance-monitoring.scr-health-tab.field-3")}
          </label>
          <input className="text-right" />
        </div>
      </Col>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>
            {t("compliance-monitoring.scr-health-tab.field-4")}
          </label>
          <input className="text-right" />
        </div>
      </Col>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>
            {t("compliance-monitoring.scr-health-tab.field-5")} 
          </label>
          <input className="text-right" />
        </div>
      </Col>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>
            {t("compliance-monitoring.scr-health-tab.field-6")}
          </label>
          <input className="text-right" />
        </div>
      </Col>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>
            {t("compliance-monitoring.scr-health-tab.field-7")}
          </label>
          <input className="text-right" />
        </div>
      </Col>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>
            {t("compliance-monitoring.scr-health-tab.field-8")}
          </label>
          <input className="text-right" />
        </div>
      </Col>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>
            {t("compliance-monitoring.scr-health-tab.field-9")}
          </label>
          <input className="text-right" />
        </div>
      </Col>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>
            {t("compliance-monitoring.scr-health-tab.field-10")}
          </label>
          <input className="text-right" />
        </div>
      </Col>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>
            {t("compliance-monitoring.scr-health-tab.field-11")}
          </label>
          <input className="text-right" />
        </div>
      </Col>
    </Row>
  );
};

export default ScrSanteEn;
