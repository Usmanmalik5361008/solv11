import { Col, Divider, Grid, Row } from "antd";
import { ConfirmationBox } from "globalComponents";
import React from "react";

const { useBreakpoint } = Grid;

const ExternalFunds = () => {
  const screens = useBreakpoint();

  return (
    <div>
      <Row gutter={[5, 5]}>
        <Col md={24} lg={10}>
          <Row gutter={[10, 10]}>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>Effective Date</label>
                <select className="dropdown-style-2">
                  <option value="1">1</option>
                </select>
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>Gross Initial Premium</label>
                <input />
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>Age at subscription</label>
                <input className="text-right" placeholder="22" />
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>Sexe de l'assuré (h/f)_EN </label>
                <select className="dropdown-style-2">
                  <option value="1">1</option>
                </select>
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>Contract duration</label>
                <input className="text-right" placeholder="22" />
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>Death Capital</label>
                <select className="dropdown-style-2">
                  <option value="1">1</option>
                </select>
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>Percentage or Amount</label>
                <input className="text-right" placeholder="22" />
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>Calculation Basis</label>
                <select className="dropdown-style-2">
                  <option value="1">1</option>
                </select>
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>PAcquisition Fees</label>
                <input className="text-right" placeholder="22" />
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>Acquisition Commission</label>
                <input className="text-right" placeholder="22" />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>
                  Taux annuel de frais d'administration sur encours (recette)_EN
                </label>
                <input className="text-right" placeholder="22" />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Commission annuelle de courtage (dépense)_EN</label>
                <input className="text-right" placeholder="22" />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>
                  Taux annuele de frais de gestion financière (déduit de
                  l'actif) EN
                </label>
                <input className="text-right" placeholder="22" />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Part Assureur_EN</label>
                <input className="text-right" placeholder="22" />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>
                  Rendement de l'actif par année (net de frais de gestion
                  fin)_EN
                </label>
                <input className="text-right" placeholder="22" />
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={24} lg={1} className="d-flex justify-center">
          <Divider
            orientation="center"
            type={screens.lg ? "vertical" : "horizontal"}
            style={{ height: "100%" }}
          />
        </Col>
        <Col md={24} lg={13}>
          <h5>SCR</h5>
          <div className="light-grey-bordered">
            <h5>Brand</h5>
            <Row gutter={10}>
              <Col xs={6}>
                <div className="custom-form-field">
                  <label>Percentage</label>
                  <input className="text-right" placeholder="0" />
                </div>
              </Col>
              <Col xs={6}>
                <div className="custom-form-field">
                  <label>Coupon Moyen</label>
                  <input className="text-right" placeholder="0" />
                </div>
              </Col>
              <Col xs={6}>
                <div className="custom-form-field">
                  <label>Average duration</label>
                  <input className="text-right" placeholder="0" />
                </div>
              </Col>
              <Col xs={6}>
                <div className="custom-form-field">
                  <label>Average Rating</label>
                  <input className="text-right" placeholder="0" />
                </div>
              </Col>
            </Row>

            <h5 className="mt-4">Actions et fonds Action:_EN</h5>
            <Row gutter={10}>
              <Col xs={6}>
                <div className="custom-form-field">
                  <label>Percentage</label>
                  <input className="text-right" placeholder="0" />
                </div>
              </Col>
              <Col xs={6}>
                <div className="custom-form-field">
                  <label>OCDE</label>
                  <input className="text-right" placeholder="0" />
                </div>
              </Col>
              <Col xs={6}>
                <div className="custom-form-field">
                  <label>Non OCDE</label>
                  <input className="text-right" placeholder="0" />
                </div>
              </Col>
            </Row>
            <h5 className="mt-4">Cash</h5>
            <Row>
              <Col xs={6}>
                <div className="custom-form-field">
                  <label>Percentage</label>
                  <input className="text-right" placeholder="0" />
                </div>
              </Col>
            </Row>
          </div>
          <h5 className="mt-4 text-center">Annual Managment Cost</h5>
          <Row gutter={10}>
            <Col xs={8}>
              <div className="custom-form-field">
                <label>Percentage</label>
                <input className="text-center" placeholder="0" />
              </div>
            </Col>
            <Col xs={8}>
              <div className="custom-form-field">
                <label>Year</label>
                <input className="text-center" placeholder="0" />
              </div>
            </Col>
            <Col xs={8}>
              <div className="custom-form-field">
                <label>Year 2 and</label>
                <input className="text-center" placeholder="0" />
              </div>
            </Col>
          </Row>
          <h5 className="mt-4 text-center">
            Managment fees of the assects (per contract)
          </h5>
          <Row gutter={[10, 10]}>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>Management Cost of death</label>
                <input className="text-center" placeholder="0" />
              </div>
            </Col>
            <Col xs={12}>
              <div className="custom-form-field">
                <label>Management Cost of surrender</label>
                <input className="text-center" placeholder="0" />
              </div>
            </Col>
            <Col xs={8}>
              <div className="custom-form-field">
                <label>Percentage</label>
                <input className="text-center" placeholder="0" />
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

export default ExternalFunds;
