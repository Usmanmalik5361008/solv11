import { Col, Divider, Row } from 'antd'
import { ConfirmationBox } from 'globalComponents'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Hypothesis = () => {
  const { t } = useTranslation()
  return (
    <>
      <Row>
        <Col md={24} lg={8}>
          <Row gutter={[10, 10]}>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.hyp-tab.field-1')}</label>
                <select className='dropdown-style-2'>
                  <option>{t('compliance-monitoring.hyp-tab.field-1-dropdown-1')} 1</option>
                </select>
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.hyp-tab.field-2')}</label>
                <input placeholder='2' className='text-right' />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.hyp-tab.field-3')}</label>
                <input placeholder='2' className='text-right' />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.hyp-tab.field-4')}</label>
                <input placeholder='2' className='text-right' />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.hyp-tab.field-5')}</label>
                <input placeholder='2' className='text-right' />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.hyp-tab.field-6')}</label>
                <input placeholder='2' className='text-right' />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.hyp-tab.field-7')}</label>
                <input placeholder='2' className='text-right' />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.hyp-tab.field-8')}</label>
                <input placeholder='2' className='text-right' />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.hyp-tab.field-9')}</label>
                <input placeholder='2' className='text-right' />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.hyp-tab.field-10')}</label>
                <input placeholder='2' className='text-right' />
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={24} lg={2} className='d-flex justify-center'>
          <Divider type='vertical' style={{ height: '100%' }} />
        </Col>
        <Col md={24} lg={14}>
          <Row gutter={[10, 10]}>
            <Col md={24} lg={12}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.hyp-tab.field-11')}</label>
                <select className='dropdown-style-2'>
                  <option>Option 1</option>
                </select>
              </div>
            </Col>
            <Col md={24} lg={12}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.hyp-tab.field-12')}</label>
                <select className='dropdown-style-2'>
                  <option>Option 1</option>
                </select>
              </div>
            </Col>
            <Col md={24} lg={12}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.hyp-tab.field-2')}</label>
                <input placeholder='2' className='text-right' />
              </div>
            </Col>
            <Col md={24} lg={12}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.hyp-tab.field-2')}</label>
                <input placeholder='2' className='text-right' />
              </div>
            </Col>
            <Col md={24} lg={12}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.hyp-tab.field-3')}</label>
                <input placeholder='2' className='text-right' />
              </div>
            </Col>
            <Col md={24} lg={12}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.hyp-tab.field-3')}</label>
                <input placeholder='2' className='text-right' />
              </div>
            </Col>
            <Col md={24} lg={12}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.hyp-tab.field-12')}</label>
                <select className='dropdown-style-2'>
                  <option>Option 1</option>
                </select>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={[10, 10]} className='mb-5'>
        <Col md={24} lg={12} className='mt-5'>
          <h5 className='small-heading'>
            {t('compliance-monitoring.unit-linked-policy')}
          </h5>
          <div className='custom-table-style-2-wrapper'>
            <table>
              <thead>
                <tr>
                  <th style={{ width: '5%' }}></th>
                  <th>{t('compliance-monitoring.contract-external-tab-generic.field-1')}</th>
                  <th>{t('compliance-monitoring.contract-external-tab-generic.field-2')}</th>
                  <th>{t('compliance-monitoring.contract-external-tab-generic.field-3')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td className='text-right'>1</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td className='text-right'>2</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
        <Col md={24} lg={12} className='mt-5'>
          <h5 className='small-heading'>
          {t('compliance-monitoring.dedicated-policy')}
          </h5>
          <div className='custom-table-style-2-wrapper'>
            <table>
              <thead>
                <tr>
                  <th style={{ width: '5%' }}></th>
                  <th>{t('compliance-monitoring.contract-external-tab-generic.field-1')}</th>
                  <th>{t('compliance-monitoring.contract-external-tab-generic.field-2')}</th>
                  <th>{t('compliance-monitoring.contract-external-tab-generic.field-3')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td className='text-right'>1</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td className='text-right'>2</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
        <Col md={24} lg={12} className='mt-5'>
          <h5 className='small-heading'>
          {t('compliance-monitoring.unit-linked-policy')}
          </h5>
          <div className='custom-table-style-2-wrapper'>
            <table>
              <thead>
                <tr>
                  <th style={{ width: '5%' }}></th>
                  <th>{t('compliance-monitoring.contract-external-tab-generic.field-1')}</th>
                  <th>{t('compliance-monitoring.contract-external-tab-generic.field-2')}</th>
                  <th>{t('compliance-monitoring.contract-external-tab-generic.field-3')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td className='text-right'>1</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td className='text-right'>2</td>
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
  )
}

export default Hypothesis
