import { Col, Row } from "antd";
import { ConfirmationBox } from "globalComponents";
import { PillButton } from "globalComponents";
import React from "react";

const Liabilities = () => {
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
              <label>Code Produit</label>
              <input />
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="custom-form-field">
              <label>Code Support</label>
              <input />
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="custom-form-field">
              <label>TMG</label>
              <input />
            </div>
          </Col>
        </Row>
        <div className="custom-table-style-2-wrapper mt-5">
          <table>
            <thead>
              <tr>
                <th style={{ width: "5%" }}></th>
                <th>Calculation Date</th>
                <th>Product Code</th>
                <th>Numero Contrat</th>
                <th>Code Support</th>
                <th>PAB</th>
                <th>Type Support</th>
                <th>Devise Support</th>
                <th>Garantie Deces</th>
                <th>Mortant Garantie Deces</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td className="text-right">31/12/2012</td>
                <td>ABN</td>
                <td>1212-001602</td>
                <td>UC</td>
                <td>
                  <input type={"checkbox"} />
                </td>

                <td>UC</td>
                <td>EUR</td>
                <td>TUNNEL</td>
                <td>0.10</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Row gutter={[10, 10]} className="mt-5">
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Date Calculator</label>
              <select className="dropdown-style-2">
                <option value="1">1</option>
              </select>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Taux Marge</label>
              <input className="text-right" placeholder="0" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Date Naissance</label>
              <select className="dropdown-style-2">
                <option value="1">1</option>
              </select>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Cout Gestion</label>
              <input className="text-right" placeholder="0" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Code Produit</label>
              <select className="dropdown-style-2">
                <option value="1">1</option>
              </select>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Taux Marge Min</label>
              <input className="text-right" placeholder="0" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>TMG</label>
              <input className="text-right" placeholder="0" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Cout Rachat</label>
              <input className="text-right" placeholder="0" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Numero Contrat</label>
              <input className="text-right" placeholder="0" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Montant Marge</label>
              <input className="text-right" placeholder="0" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Sexe Assure</label>
              <input className="text-right" placeholder="0" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Cout Sinistre</label>
              <input className="text-right" placeholder="0" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>CodeSupport</label>
              <select className="dropdown-style-2">
                <option value="1">1</option>
              </select>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Taux Comm</label>
              <input className="text-right" placeholder="0" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Date Terme</label>
              <input className="text-right" placeholder="0" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Cout Gest Fin</label>
              <input className="text-right" placeholder="0" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>TypeSupport</label>
              <select className="dropdown-style-2">
                <option value="1">1</option>
              </select>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Taux Comm Min</label>
              <input className="text-right" placeholder="0" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Solde Esc Comm</label>
              <input className="text-right" placeholder="0" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Pourcentage</label>
              <input className="text-right" placeholder="0" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>DeviseSupport</label>
              <select className="dropdown-style-2">
                <option value="1">1</option>
              </select>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Montant Comm</label>
              <input className="text-right" placeholder="0" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Date Effet Contrat</label>
              <select className="dropdown-style-2">
                <option value="1">1</option>
              </select>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Nb Contrat</label>
              <input className="text-right" placeholder="0" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Grantie Deces</label>
              <select className="dropdown-style-2">
                <option value="1">1</option>
              </select>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Prime Per Ann</label>
              <input className="text-right" placeholder="0" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Sortie en Rente</label>
              <input className="text-right" placeholder="0" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Montant Garantie</label>
              <input className="text-right" placeholder="0" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>PM</label>
              <input className="text-right" placeholder="0" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Tx Frais Ges Fin</label>
              <select className="dropdown-style-2">
                <option value="1">1</option>
              </select>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="custom-form-field">
              <label>Type de Rente</label>
              <select className="dropdown-style-2">
                <option value="1">1</option>
              </select>
            </div>
          </Col>
        </Row>
        <div className="mt-5">
          <ConfirmationBox />
        </div>
      </div>
    </div>
  );
};

export default Liabilities;
