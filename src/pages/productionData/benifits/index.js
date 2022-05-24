import { Col, Row } from "antd";
import { ConfirmationBox } from "globalComponents";
import React from "react";
import { useTranslation } from "react-i18next";

const Benifits = () => {
  const { t } = useTranslation();
  return (
    <div className="card-view card-padding">
      <div className="custom-table-style-2-wrapper mt-5">
        <table>
          <thead>
            <tr>
              <th style={{ width: "2%" }}></th>
              <th>{t('cal-date')}</th>
              <th>{t('contact-num')}</th>
              <th>{t('beneficiary-num')}</th>
              <th>{t('date-occ')}</th>
              <th>{t('claim-start-date')}</th>
              <th>{t('date-fin-claim')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td className="text-right">31/12/2012</td>
              <td className="text-right">10221212</td>
              <td className="text-right">1</td>
              <td className="text-right">31/12/2012</td>
              <td className="text-right"></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Row className="my-5" gutter={[15, 15]}>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>{t('cal-date')}</label>
            <input type={"date"} />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>{t('rule-date')}</label>
            <input type={"date"} />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>{t('wording-act')}</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>{t('contract-num')}</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>{t('treatment-date')}</label>
            <input type={"date"} />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>{t('amount-of-d')}</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>{t('be-number')}</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>{t('si-number')}</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>{t('refund-amount')}</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>{t('date-occ')}</label>
            <input type={"date"} />
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
            <label>{t('claim-start-date')}</label>
            <input type={"date"} />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>{t('guarantee-code')}</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>{t('date-fin-claim')}</label>
            <input type={"date"} />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-form-field">
            <label>{t('code-act')}</label>
            <input />
          </div>
        </Col>
      </Row>
      <ConfirmationBox />
    </div>
  );
};

export default Benifits;
