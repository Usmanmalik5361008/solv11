import { Col, Row } from 'antd'
import { ConfirmationBox } from 'globalComponents'
import React from 'react'
import { useTranslation } from 'react-i18next'

const AnnuitiesPage = () => {
  const { t } = useTranslation()
  return (
    <div className='card-view card-padding'>
      <div className='custom-table-style-2-wrapper mt-5'>
        <table>
          <thead>
            <tr>
              <th style={{ width: '2%' }}></th>
              <th>{t('type-annually')}</th>
              <th>{t('direct-payment')}</th>
              <th>{t('life-annuity')}</th>
              <th>{t('life-annuity')}</th>
              <th>{t('duration-certain-annuity')}</th>
              <th>{t('exit-age')}</th>
              <th>{t('reversion-rate')}</th>
              <th>{t('diff-age-ann-survivor-age')}</th>
              <th>{t('periodicity')}</th>
              <th>{t('mortality-table')}</th>
              <th>{t('mortality-table')}</th>
              <th>{t('mang-rate')}</th>
              <th>{t('mang-cost')}</th>
              <th>{t('guaranteed-rate')}</th>
              <th>{t('currency-agency')}</th>
              <th>{t('percentage')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Row className='mt-5' gutter={[15, 15]}>
        <Col xs={12} md={6} lg={4}>
          <div className='custom-form-field'>
            <label>{t('type-annually')}</label>
            <select className='dropdown-style-2'>
              <option value='1'>1</option>
            </select>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className='custom-form-field'>
            <label>{t('reversion-rate')}</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className='custom-form-field'>
            <label>{t('mang-rate')}</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className='custom-form-field'>
            <label>{t('direct-payment')}</label>
            <select className='dropdown-style-2'>
              <option value='1'>1</option>
            </select>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className='custom-form-field'>
            <label>{t('diff-age-ann-survivor-age')}</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className='custom-form-field'>
            <label>{t('mang-cost')}</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className='custom-form-field'>
            <label>{t('life-annuity')}</label>
            <select className='dropdown-style-2'>
              <option value='1'>1</option>
            </select>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className='custom-form-field'>
            <label>{t('guaranteed-rate')}</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className='custom-form-field'>
            <label>{t('life-annuity')}</label>
            <select className='dropdown-style-2'>
              <option value='1'>1</option>
            </select>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className='custom-form-field'>
            <label>{t('periodicity')}</label>
            <select className='dropdown-style-2'>
              <option value='1'>1</option>
            </select>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className='custom-form-field'>
            <label>{t('currency-agency')}</label>
            <select className='dropdown-style-2'>
              <option value='1'>1</option>
            </select>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className='custom-form-field'>
            <label>{t('duration-annuity')}</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className='custom-form-field'>
            <label>{t('mortality-table')}</label>
            <select className='dropdown-style-2'>
              <option value='1'>1</option>
            </select>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className='custom-form-field'>
            <label>{t('percentage')}</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className='custom-form-field'>
            <label>{t('exit-age')}</label>
            <input />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className='custom-form-field'>
            <label>{t('mortality-table')}</label>
            <select className='dropdown-style-2'>
              <option value='1'>1</option>
            </select>
          </div>
        </Col>
      </Row>
      <br />
      <ConfirmationBox />
    </div>
  )
}

export default AnnuitiesPage
