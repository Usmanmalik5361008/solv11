import { Col, Row } from 'antd'
import { ConfirmationBox } from 'globalComponents'
import { Toolbar } from 'globalComponents'
import { PillButton } from 'globalComponents'
import { PrevoyancePrimesSanteTable } from 'globalComponents/tables'
import React from 'react'
import { useTranslation } from 'react-i18next'

const HealthPremiumsPage = () => {
  const { t } = useTranslation()
  return (
    <div className='card-view card-padding'>
      <Toolbar />
      <div className='light-grey-bordered mt-5'>
        <div className='d-flex justify-space-between mb-3' style={{ gap: 10 }}>
          <h5>{t('filter')}</h5>
          <div className='d-flex' style={{ gap: 10 }}>
            <PillButton title={t('apply-filters')} type='highlighted' />
            <PillButton title={t('clear')} />
          </div>
        </div>
        <Row gutter={[15, 15]}>
          <Col xs={12} md={6} lg={4}>
            <div className='custom-form-field'>
              <label>{t('cal-date')}</label>
              <input type={'date'} />
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className='custom-form-field'>
              <label>{t('contract-num')}</label>
              <input />
            </div>
          </Col>
        </Row>
        <div className='mt-5'>
          <PrevoyancePrimesSanteTable />
        </div>
      </div>
      <br />
      <ConfirmationBox />
    </div>
  )
}

export default HealthPremiumsPage
