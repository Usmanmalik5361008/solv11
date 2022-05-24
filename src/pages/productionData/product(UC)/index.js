import { Col, Row } from "antd";
import { ConfirmationBox } from "globalComponents";
import { Button } from "globalComponents";
import React from "react";
import { useTranslation } from "react-i18next";

const ProductUCPage = () => {
  const { t } = useTranslation()
  return (
    <div className="card-view card-padding">
      <div className="custom-table-style-2-wrapper mt-5">
        <table>
          <thead>
            <tr>
              <th style={{ width: "2%" }}></th>
              <th>{t('prod-code')}</th>
              <th>{t('male-mortality-table')}</th>
              <th>{t('female-mortality-table')}</th>
              <th>{t('maj-tab-risk-prim')}</th>
              <th>{t('maj-tab-reasurance')}</th>
              <th>{t('male-reinsurance-mortality-table')}</th>
              <th>{t('female-reinsurance-mortality-table')}</th>
              <th>{t('discount')}</th>
              <th>{t('discount-duration')}</th>
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
            <label>{t('prod-code')}</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>{t('male-reassurance-table')}</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>{t('redemp-penalty')}</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>{t('male-mortality-table')}</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>{t('female-reassurance-table')}</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>{t('redemp-penalty-duration')}</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>{t('female-mortality-table')}</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>{t('reinsurance-cessation-rate')}</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>{t('max-redemp-penalty-rate')}</label>
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
            <label>{t('discount')}</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>{t('maj-tab-reasurance')}</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>{t('discount-duration')}</label>
            <input />
          </div>
        </Col>
      </Row>
      <div className="mt-5 d-flex flex-row-reverse" style={{ gap: 20 }}>
        <Button type="primary" title={t('edit-prod')} />
        <Button type="default" title={t('del-prod')} />
        <Button type="default" title={t('add-prod')} />
      </div>
      <br />
      <ConfirmationBox />
    </div>
  );
};

export default ProductUCPage;
