import { Col, Row } from "antd";
import React from "react";

const ScrUcTrad = () => {
  return (
    <Row gutter={[10, 10]}>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>Couts fixes pour les UC</label>
          <input className="text-right" />
        </div>
      </Col>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>Couts fixes pour les TG</label>
          <input className="text-right" />
        </div>
      </Col>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>
            Pourcentage de Pm a partir dequel il y a une management action
            (ORSA)
          </label>
          <input className="text-right" />
        </div>
      </Col>
    </Row>
  );
};

export default ScrUcTrad;
