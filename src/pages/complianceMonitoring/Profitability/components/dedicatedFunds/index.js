import { Col, Divider, Row } from "antd";
import { ConfirmationBox } from "globalComponents";
import React from "react";

const DedicatedFunds = () => {
  return (
    <div>
      <Row>
        <Col sm={24} md={11}>
          <Row gutter={[10, 10]}>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>Prime Brut Initiale</label>
                <input />
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>Age de I'assure (H/F)</label>
                <input />
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>Age de I'assure (H/F)</label>
                <select className="dropdown-style-2">
                  <option value="1">1</option>
                </select>
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>Duree De Contrat (en anees)</label>
                <input />
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>Capital Deces</label>
                <select className="dropdown-style-2">
                  <option value="1">1</option>
                </select>
              </div>
            </Col>

            <Col xs={12}>
              <div className="custom-form-field">
                <label>Base De Calcul</label>
                <select className="dropdown-style-2">
                  <option value="1">1</option>
                </select>
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>Frais D'acquisation</label>
                <input />
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>Commission D'acquisation</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Real Mortality</label>
                <div className="multiple-inputs-wrapper">
                  <input placeholder="30" />
                  <select className="dropdown-style-2">
                    <option value="1">Mensual</option>
                  </select>
                </div>
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Commission annual decourtage(depense)</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>
                  Taux annuel de frais de gestion financiere (deduit de I'actif)
                </label>
                <div className="multiple-inputs-wrapper">
                  <input placeholder="30" />
                  <select className="dropdown-style-2">
                    <option value="1">Mensual</option>
                  </select>
                </div>
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Part Assureur</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>
                  Rendement de I'actif par annee (net de frais gestion
                  financiere
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
                  Pourcentage ou montant en cas de garantie majoree{" "}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <h5 className="text-center">
                Cout de Gestion annuel par contrat
              </h5>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>Annee 1</label>
                <input />
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>Annee 2 et</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Frais de gestion financiere par contrat</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Cout de gestion par sinistre deces</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Cout de gestion par rachat</label>
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
                  <th>Annee</th>
                  <th>Taux de penabale Racht</th>
                  <th>Contrats vendus par mois</th>
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
                  <th>Annee</th>
                  <th>Contrats vendus par mois</th>
                  <th>Contrats vendus par mois</th>
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
