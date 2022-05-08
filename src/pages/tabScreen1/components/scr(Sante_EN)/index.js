import { Col, Row } from "antd";
import React from "react";

const ScrSanteEn = () => {
  return (
    <Row gutter={[10, 10]}>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>
            Frais generaux relatifs a la branche sante(Medical Expenses)
          </label>
          <input className="text-right" />
        </div>
      </Col>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>
            Frais generaux relatifs a la branche sante(Income Protection)
          </label>
          <input className="text-right" />
        </div>
      </Col>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>
            Frais generaux relatifs a la branche sante(Worker Compensation)
          </label>
          <input className="text-right" />
        </div>
      </Col>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>
            Frais generaux relatifs a la branche sante(Non Proportional
            Reinsurance)
          </label>
          <input className="text-right" />
        </div>
      </Col>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>Taux de revalorisation des cotisations sante</label>
          <input className="text-right" />
        </div>
      </Col>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>Taux de revalorisation des cotisations sante</label>
          <input className="text-right" />
        </div>
      </Col>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>Duree (en-mois) de resilliation</label>
          <input className="text-right" />
        </div>
      </Col>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>
            Part du LOB Medical Expenses dans la provision pour prestations a
            payer
          </label>
          <input className="text-right" />
        </div>
      </Col>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>
            Part du LOB Income Expenses dans la provision pour prestations a
            payer
          </label>
          <input className="text-right" />
        </div>
      </Col>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>
            Part du LOB Work Compensation dans la provision pour prestations a
            payer
          </label>
          <input className="text-right" />
        </div>
      </Col>
      <Col md={24} lg={12}>
        <div className="custom-form-field">
          <label>
            Part du Non Proportional Expenses dans la provision pour prestations
            a payer
          </label>
          <input className="text-right" />
        </div>
      </Col>
    </Row>
  );
};

export default ScrSanteEn;
