import { Col, Row } from "antd";
import { Button } from "globalComponents";
import React from "react";

const ProductUCPage = () => {
  return (
    <div className="card-view card-padding">
      <div className="custom-table-style-2-wrapper mt-5">
        <table>
          <thead>
            <tr>
              <th style={{ width: "2%" }}></th>
              <th>Code Produit</th>
              <th>Table Mortalite Homme</th>
              <th>Table Mortalite Femme</th>
              <th>Majoratian Table Prime de Risque</th>
              <th>Majoratian Table Reassurance</th>
              <th>Table Mortalite Reassurance Homme</th>
              <th>Table Mortalite Reassurance Femme</th>
              <th>Escompete</th>
              <th>Duree Escompete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>ABN</td>
              <td>Reass...</td>
              <td>Reass...</td>
              <td>100</td>
              <td>35</td>
              <td>Reass...</td>
              <td>Reass...</td>
              <td>80</td>
              <td>NON</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Row className="mt-5" gutter={[15, 15]}>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Cod Produit</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Table Reassurance Home</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Penalite de Rachat</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Table Mortalite Home</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Table Reassurance Femme</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Duree Penalite de Rachat</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Table Mortalite Femme</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Taux de Cession Reassurance</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Taux maximum Penalite de Rachat</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Majoratian table Mortalite</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Escompete</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Majoratian Table Reassurance</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>Duree Escompete</label>
            <input />
          </div>
        </Col>
      </Row>
      <div className="mt-5 d-flex flex-row-reverse" style={{ gap: 20 }}>
        <Button type="primary" title="Ajouter Produit" />        
        <Button type="default" title="Suprimer Produit" />
        <Button type="default" title="Modifier Produit" />
      </div>
    </div>
  );
};

export default ProductUCPage;
