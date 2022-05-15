import { Col, Row } from "antd";
import { ConfirmationBox } from "globalComponents";
import { PillButton } from "globalComponents";
import React from "react";

const HealthPremiumsPage = () => {
  return (
    <div className="card-view card-padding">
      <div className="light-grey-bordered">
        <div className="d-flex justify-space-between mb-3" style={{ gap: 10 }}>
          <h5>Filtre</h5>
          <div className="d-flex" style={{ gap: 10 }}>
            <PillButton title="Apply Filters" type="highlighted" />
            <PillButton title="Clear" />
          </div>
        </div>
        <Row gutter={[15, 15]}>
          <Col xs={12} md={6} lg={4}>
            <div className="custom-form-field">
              <label>Date De Calcul</label>
              <input type={"date"} />
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="custom-form-field">
              <label>Numero De Contrat</label>
              <input />
            </div>
          </Col>
        </Row>
        <div className="custom-table-style-2-wrapper mt-5">
          <table>
            <thead>
              <tr>
                <th style={{ width: "2%" }}></th>
                <th>Calculation Date</th>
                <th>Numero De Contat</th>
                <th>Numero De Benefeciaire</th>
                <th>Code LOB</th>
                <th>LOB</th>
                <th>Code Acte</th>
                <th>Code Garantie</th>
                <th>Date Deffet</th>
                <th>Periodicite</th>
                <th>Cotisation Acquise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td className="text-right">31/12/2012</td>
                <td className="text-right">10221212</td>
                <td className="text-right">1</td>
                <td className="text-right"></td>
                <td className="text-right">MedExp</td>
                <td>10</td>
                <td>G1</td>
                <td>31/12/2012</td>
                <td>A</td>
                <td>10121212</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Row className="mt-5" gutter={[15, 15]}>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Date de Calcul</label>
            <input type={"date"} />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Periodicite</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Numero De Contrat</label>
            <input className="text-right" />
          </div>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Cotisation Acquise</label>
            <input placeholder="0" className="text-right" />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Numero de Benefeciaire</label>
            <input placeholder="0" className="text-right" />
          </div>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Code LOB</label>
            <input placeholder="0" className="text-right" />
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
            <label>Code Acte</label>
            <input className="text-right" />
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
            <label>Date D'effet</label>
            <input type={"date"} />
          </div>
        </Col>
      </Row>
      <br />
      <ConfirmationBox />
    </div>
  );
};

export default HealthPremiumsPage;
