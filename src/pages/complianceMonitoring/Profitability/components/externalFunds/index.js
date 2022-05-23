import { Col, Divider, Grid, Row } from 'antd'
import { ConfirmationBox } from 'globalComponents'
import React from 'react'
import { useTranslation } from 'react-i18next'

const { useBreakpoint } = Grid

const ExternalFunds = () => {
  const { t } = useTranslation()

  const screens = useBreakpoint()

  return (
    <div>
      <Row gutter={[5, 5]}>
        <Col md={24} lg={10}>
          <Row gutter={[10, 10]}>
            <Col xs={12}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.contract-external-tab-1.field-1')}</label>
                <select className='dropdown-style-2'>
                  <option value='1'>1</option>
                </select>
              </div>
            </Col>
            <Col xs={12}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.contract-external-tab-1.field-2')}</label>
                <input />
              </div>
            </Col>
            <Col xs={12}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.contract-external-tab-1.field-3')}</label>
                <input className='text-right' placeholder='22' />
              </div>
            </Col>
            <Col xs={12}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.contract-external-tab-1.field-4')}</label>
                <select className='dropdown-style-2'>
                  <option value='1'>1</option>
                </select>
              </div>
            </Col>
            <Col xs={12}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.contract-external-tab-1.field-5')}</label>
                <input className='text-right' placeholder='22' />
              </div>
            </Col>
            <Col xs={12}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.contract-external-tab-1.field-6')}</label>
                <select className='dropdown-style-2'>
                  <option value='1'>1</option>
                </select>
              </div>
            </Col>
            <Col xs={12}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.contract-external-tab-1.field-7')}</label>
                <input className='text-right' placeholder='22' />
              </div>
            </Col>
            <Col xs={12}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.contract-external-tab-1.field-8')}</label>
                <select className='dropdown-style-2'>
                  <option value='1'>1</option>
                </select>
              </div>
            </Col>
            <Col xs={12}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.contract-external-tab-1.field-9')}</label>
                <input className='text-right' placeholder='22' />
              </div>
            </Col>
            <Col xs={12}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.contract-external-tab-1.field-10')}</label>
                <input className='text-right' placeholder='22' />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.contract-external-tab-1.field-11')}</label>
                <input className='text-right' placeholder='22' />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.contract-external-tab-1.field-12')}</label>
                <input className='text-right' placeholder='22' />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.contract-external-tab-1.field-13')}</label>
                <input className='text-right' placeholder='22' />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.contract-external-tab-1.field-14')}</label>
                <input className='text-right' placeholder='22' />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.contract-external-tab-1.field-15')}</label>
                <input className='text-right' placeholder='22' />
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={24} lg={1} className='d-flex justify-center'>
          <Divider
            orientation='center'
            type={screens.lg ? 'vertical' : 'horizontal'}
            style={{ height: '100%' }}
          />
        </Col>
        <Col md={24} lg={13}>
          <h5>SCR</h5>
          <div className='light-grey-bordered'>
            <h5>{t('compliance-monitoring.contract-external-tab-2.title-1')}</h5>
            <Row gutter={10}>
              <Col xs={6}>
                <div className='custom-form-field'>
                  <label>{t('compliance-monitoring.contract-external-tab-2.field-1')}</label>
                  <input className='text-right' placeholder='0' />
                </div>
              </Col>
              <Col xs={6}>
                <div className='custom-form-field'>
                  <label>{t('compliance-monitoring.contract-external-tab-2.field-2')}</label>
                  <input className='text-right' placeholder='0' />
                </div>
              </Col>
              <Col xs={6}>
                <div className='custom-form-field'>
                  <label>{t('compliance-monitoring.contract-external-tab-2.field-3')}</label>
                  <input className='text-right' placeholder='0' />
                </div>
              </Col>
              <Col xs={6}>
                <div className='custom-form-field'>
                  <label>{t('compliance-monitoring.contract-external-tab-2.field-4')}</label>
                  <input className='text-right' placeholder='0' />
                </div>
              </Col>
            </Row>

            <h5 className='mt-4'>{t('compliance-monitoring.contract-external-tab-2.title-2')}</h5>
            <Row gutter={10}>
              <Col xs={6}>
                <div className='custom-form-field'>
                  <label>{t('compliance-monitoring.contract-external-tab-2.field-1')}</label>
                  <input className='text-right' placeholder='0' />
                </div>
              </Col>
              <Col xs={6}>
                <div className='custom-form-field'>
                  <label>OCDE</label>
                  <input className='text-right' placeholder='0' />
                </div>
              </Col>
              <Col xs={6}>
                <div className='custom-form-field'>
                  <label>Non OCDE</label>
                  <input className='text-right' placeholder='0' />
                </div>
              </Col>
            </Row>
            <h5 className='mt-4'>{t('compliance-monitoring.contract-external-tab-2.title-3')}</h5>
            <Row>
              <Col xs={6}>
                <div className='custom-form-field'>
                  <label>{t('compliance-monitoring.contract-external-tab-2.field-1')}</label>
                  <input className='text-right' placeholder='0' />
                </div>
              </Col>
            </Row>
          </div>
          <h5 className='mt-4 text-center'>
            {t('compliance-monitoring.contract-external-tab-2.title-4')}
          </h5>
          <Row gutter={10}>
            <Col xs={8}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.contract-external-tab-2.field-1')}</label>
                <input className='text-center' placeholder='0' />
              </div>
            </Col>
            <Col xs={8}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.contract-external-tab-2.field-5')}</label>
                <input className='text-center' placeholder='0' />
              </div>
            </Col>
            <Col xs={8}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.contract-external-tab-2.field-6')}</label>
                <input className='text-center' placeholder='0' />
              </div>
            </Col>
          </Row>
          <h5 className='mt-4 text-center'>
            {t('compliance-monitoring.contract-external-tab-2.title-5')}
          </h5>
          <Row gutter={[10, 10]}>
            <Col xs={12}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.contract-external-tab-2.field-7')}</label>
                <input className='text-center' placeholder='0' />
              </div>
            </Col>
            <Col xs={12}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.contract-external-tab-2.field-8')}</label>
                <input className='text-center' placeholder='0' />
              </div>
            </Col>
            <Col xs={8}>
              <div className='custom-form-field'>
                <label>{t('compliance-monitoring.contract-external-tab-2.field-1')}</label>
                <input className='text-center' placeholder='0' />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={[20, 20]}>
        <Col md={24} lg={12} className='mt-5'>
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
      <div className='mt-5'>
        <ConfirmationBox />
      </div>
    </div>
  )
}

export default ExternalFunds
