import { Col, Row } from "antd";
import { Toolbar } from "globalComponents";
import React from "react";
import { useTranslation } from "react-i18next";

const ScrUcTrad = () => {
  const { t } = useTranslation();
  return (
    <>
      <Toolbar />
      <Row gutter={[10, 10]} className="mt-5">
        <Col md={24} lg={12}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.scr-trad-tab.field-1")}</label>
            <input className="text-right" />
          </div>
        </Col>
        <Col md={24} lg={12}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.scr-trad-tab.field-2")}</label>
            <input className="text-right" />
          </div>
        </Col>
        <Col md={24} lg={12}>
          <div className="custom-form-field">
            <label>{t("compliance-monitoring.scr-trad-tab.field-3")}</label>
            <input className="text-right" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ScrUcTrad;
