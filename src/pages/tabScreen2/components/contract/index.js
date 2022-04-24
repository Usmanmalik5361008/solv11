import { Col, Row } from "antd";
import { ConfirmationBox } from "globalComponents";
import React from "react";

const Contract = () => {
  return (
    <div>
      <h5 className="small-heading">Unit Linked Policy</h5>
      <div className="custom-table-style-2-wrapper">
        <table>
          <thead>
            <tr>
              <th style={{ width: "5%" }}></th>
              <th>Calculation Date</th>
              <th>Product Code</th>
              <th>Policy Number</th>
              <th>Unit Code</th>
              <th>PAB</th>
              <th>Type Support_EN</th>
              <th>Unit Currency</th>
              <th>Death Guarantee</th>
              <th>Death Guarantee Ammo</th>
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
  );
};

export default Contract;
