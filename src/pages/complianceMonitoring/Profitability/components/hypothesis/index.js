import { Col, Divider, Row } from "antd";
import { ConfirmationBox } from "globalComponents";
import React from "react";

const Hypothesis = () => {
  return (
    <>
      <Row>
        <Col md={24} lg={8}>
          <Row gutter={[10, 10]}>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Table de Mortalité_EN</label>
                <select className="dropdown-style-2">
                  <option>Option 1</option>
                </select>
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Real Mortality (in % of the mortality table)</label>
                <input placeholder="2" className="text-right" />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Increase of the used mortality table</label>
                <input placeholder="2" className="text-right" />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Taux d'imposition_EN</label>
                <input placeholder="2" className="text-right" />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Taux d'inflation par année index)EN</label>
                <input placeholder="2" className="text-right" />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Capital cost</label>
                <input placeholder="2" className="text-right" />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Rendement des Fonds propres_EN</label>
                <input placeholder="2" className="text-right" />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Taux de cession en réassurance_En</label>
                <input placeholder="2" className="text-right" />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Development Fees</label>
                <input placeholder="2" className="text-right" />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Amortization period</label>
                <input placeholder="2" className="text-right" />
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={24} lg={2} className="d-flex justify-center">
          <Divider type="vertical" style={{ height: "100%" }} />
        </Col>
        <Col md={24} lg={14}>
          <Row gutter={[10, 10]}>
            <Col md={24} lg={12}>
              <div className="custom-form-field">
                <label>Table de mortalité pour Réassurance_En</label>
                <select className="dropdown-style-2">
                  <option>Option 1</option>
                </select>
              </div>
            </Col>
            <Col md={24} lg={12}>
              <div className="custom-form-field">
                <label>Table de mortalite pour Prime de Risque_En</label>
                <select className="dropdown-style-2">
                  <option>Option 1</option>
                </select>
              </div>
            </Col>
            <Col md={24} lg={12}>
              <div className="custom-form-field">
                <label>Real Mortality (in % of the mortality table)</label>
                <input placeholder="2" className="text-right" />
              </div>
            </Col>
            <Col md={24} lg={12}>
              <div className="custom-form-field">
                <label>Real Mortality (in % of the mortality table)</label>
                <input placeholder="2" className="text-right" />
              </div>
            </Col>
            <Col md={24} lg={12}>
              <div className="custom-form-field">
                <label>Increase of the used mortality table</label>
                <input placeholder="2" className="text-right" />
              </div>
            </Col>
            <Col md={24} lg={12}>
              <div className="custom-form-field">
                <label>Increase of the used mortality table</label>
                <input placeholder="2" className="text-right" />
              </div>
            </Col>
            <Col md={24} lg={12}>
              <div className="custom-form-field">
                <label>Rating du</label>
                <select className="dropdown-style-2">
                  <option>Option 1</option>
                </select>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={[10, 10]} className="mb-5">
        <Col md={24} lg={12} className="mt-5">
          <h5 className="small-heading">Unit Linked Policy</h5>
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
          <h5 className="small-heading">Dedicated Policy</h5>
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
        <Col md={24} lg={12} className="mt-5">
          <h5 className="small-heading">Unit Linked Policy</h5>
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
      <ConfirmationBox />
    </>
  );
};

export default Hypothesis;
