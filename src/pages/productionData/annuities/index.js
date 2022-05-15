import { Col, Row } from "antd";
import { ConfirmationBox } from "globalComponents";
import React from "react";

const AnnuitiesPage = () => {
  return (
    <div className="card-view card-padding">
      <div className="custom-table-style-2-wrapper mt-5">
        <table>
          <thead>
            <tr>
              <th style={{ width: "2%" }}></th>
              <th>Type Rente</th>
              <th>Paiement Direct</th>
              <th>Rente Certaine</th>
              <th>Rente Viagere</th>
              <th>Duree Rente Certaine</th>
              <th>Age de sortie</th>
              <th>Taux de Reversion</th>
              <th>Difference Age Rentier Age Reversataire</th>
              <th>Periodicite</th>
              <th>Table Mortalite</th>
              <th>Table Mortalite</th>
              <th>Taux de Gestion</th>
              <th>Cout de Gestion</th>
              <th>Taux Garanti</th>
              <th>Devise Rente</th>
              <th>Pourcentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Row className="mt-5" gutter={[15, 15]}>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Type Rente</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Taux De Reversion</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Taux de Gestion</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Paiement Direct</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Difference Age Rentier Age Reversataire</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Cout de Gestion</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Rente Certaine</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Taux Garanti</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Rente Viagere</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
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
            <label>Devise Rente</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Duree Rente</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Table Mortalite</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Pourcentage</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Age Sortie</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Table Mortalite</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
      </Row>
      <br />
      <ConfirmationBox />
    </div>
  );
};

export default AnnuitiesPage;
