import { Col, Row } from "antd";
import { PillButton } from "globalComponents";
import React from "react";

const AssetsPage = () => {
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
              <label>Type De Support</label>
              <select className="dropdown-style-2">
                <option value="1">1</option>
              </select>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="custom-form-field">
              <label>Type Titre</label>
              <select className="dropdown-style-2">
                <option value="1">1</option>
              </select>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="custom-form-field">
              <label>Elatique</label>
              <select className="dropdown-style-2">
                <option value="1">1</option>
              </select>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="custom-form-field">
              <label>OCDE</label>
              <select className="dropdown-style-2">
                <option value="1">1</option>
              </select>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="custom-form-field">
              <label>Devise</label>
              <select className="dropdown-style-2">
                <option value="1">1</option>
              </select>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="custom-form-field">
              <label>Rating</label>
              <select className="dropdown-style-2">
                <option value="1">1</option>
              </select>
            </div>
          </Col>
        </Row>
        <div className="custom-table-style-2-wrapper mt-5">
          <table>
            <thead>
              <tr>
                <th style={{ width: "2%" }}></th>
                <th>Calculation Date</th>
                <th>Nom Titre</th>
                <th>Type Titre</th>
                <th>Etatique</th>
                <th>Type Passif</th>
                <th>Code Support</th>
                <th>OCDE</th>
                <th>Devise Support</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td className="text-right">31/12/2012</td>
                <td>action code</td>
                <td>Action</td>
                <td className="text-right">N</td>
                <td className="text-right">UC</td>
                <td>UC</td>
                <td>O</td>
                <td>EUR</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Row className="mt-5" gutter={[15, 15]}>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Nom Titre</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Devise</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Coupon</label>
            <input className="text-right" />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Date Cal</label>
            <input type={"date"} />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Taux Change</label>
            <input placeholder="0" className="text-right" />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Duration</label>
            <input placeholder="0" className="text-right" />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Type Titre</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>VNI</label>
            <input placeholder="0" className="text-right" />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Date Achat</label>
            <input type={"date"} />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Elatique</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Quantite</label>
            <input placeholder="0" className="text-right" />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Date Cours</label>
            <input type={"date"} />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Type De Support</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Valeur Devise</label>
            <input placeholder="0" className="text-right" />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Date Terme</label>
            <input type={"date"} />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>OCDE</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Valeur Euro</label>
            <input placeholder="0" className="text-right" />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Rating</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AssetsPage;
