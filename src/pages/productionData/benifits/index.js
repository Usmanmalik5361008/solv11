import { Col, Row } from "antd";
import { ConfirmationBox } from "globalComponents";
import React from "react";

const Benifits = () => {
  return (
    <div className="card-view card-padding">
      <div className="custom-table-style-2-wrapper mt-5">
        <table>
          <thead>
            <tr>
              <th style={{ width: "2%" }}></th>
              <th>Calculation Date</th>
              <th>Numero De Contat</th>
              <th>Numero De Benefeciaire</th>
              <th>Date Survenance</th>
              <th>Date Debut Sinistre</th>
              <th>Date Fn Sinistre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td className="text-right">31/12/2012</td>
              <td className="text-right">10221212</td>
              <td className="text-right">1</td>
              <td className="text-right">31/12/2012</td>
              <td className="text-right"></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Row className="my-5" gutter={[15, 15]}>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Date de Calcul</label>
            <input type={"date"} />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Date de Regle</label>
            <input type={"date"} />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Libelle Acte</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Numero de Contrat</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Date de soin</label>
            <input type={"date"} />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Montant de la d</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Numero de Be</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Numero de Si</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Montant Rembo</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Date Survenance</label>
            <input type={"date"} />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>LOB</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Date Debut Sinistre</label>
            <input type={"date"} />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Code Garantie</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Date Fin Sinistre</label>
            <input type={"date"} />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Code Acte</label>
            <input />
          </div>
        </Col>
      </Row>
      <ConfirmationBox />
    </div>
  );
};

export default Benifits;
