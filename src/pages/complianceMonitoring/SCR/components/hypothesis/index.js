import { Col, Divider, Row, Tooltip } from 'antd'
import { SCRHypothesis } from 'globalComponents/tables/scrHypothesis'
// import { useTranslation } from 'react-i18next'

// const { useBreakpoint } = Grid

const Hypothesis = () => {
  // const { t } = useTranslation()

  return (
    <div>
      <Row gutter={[20, 10]} className='mt-5'>
        <Col xs={24} md={12} lg={6}>
          <div className='custom-form-field df-label-center'>
            <label>{'Type QRT'}</label>
          </div>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <div className='custom-form-field'>
            <select className='dropdown-style-2'>
              <option value='solo'>{'Solo'}</option>
            </select>
          </div>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <div className='custom-form-field df-label-center'>
            <label>{'Periodicite QRT'}</label>
          </div>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <div className='custom-form-field'>
            <select className='dropdown-style-2'>
              <option value='annuel'>{'Annuel'}</option>
            </select>
          </div>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <div className='custom-form-field df-label-center'>
            <label>{'Date de Calcul'}</label>
          </div>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <div className='custom-form-field'>
            <input type={'date'} placeholder='0' />
          </div>
        </Col>
        <Col xs={24} md={12} lg={6} />
        <Col xs={24} md={12} lg={6} />
        <Col xs={24} xl={6}>
          <div className='custom-form-field df-label-center'>
            <label>{'Mortalite Reelle'}</label>
          </div>
        </Col>
        <Col xs={24} xl={6}>
          <div
            className='custom-form-field'
            style={{
              display: 'flex',
              gap: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <input
              className='text-right'
              type={'number'}
              placeholder='0'
              style={{ width: 'calc(50% - 30px)' }}
            />
            <span>{'80'}</span>
            <input
              className='text-right'
              type={'number'}
              placeholder='0'
              style={{ width: 'calc(50% - 30px)' }}
            />
          </div>
        </Col>
        <Col xs={24} xl={6}>
          <div className='custom-form-field df-label-center'>
            <label>{'Nombre de scenarios'}</label>
          </div>
        </Col>
        <Col xs={24} xl={6}>
          <div className='custom-form-field'>
            <input type={'number'} placeholder='0' />
          </div>
        </Col>
        <Col xs={24} xl={6}>
          <div className='custom-form-field df-label-center'>
            <label>{'Taux de mortalite Homme'}</label>
          </div>
        </Col>
        <Col xs={24} xl={6}>
          <div className='custom-form-field'>
            <select className='dropdown-style-2'>
              <option value='unisex'>{'Unisexe'}</option>
            </select>
          </div>
        </Col>
        <Col xs={24} xl={6}>
          <div className='custom-form-field df-label-center'>
            <Tooltip title={'Duree de projection des Provisions Mathematiques'}>
              <label>{'Duree de projection des Provisions Mathematiques'}</label>
            </Tooltip>
          </div>
        </Col>
        <Col xs={24} xl={6}>
          <div className='custom-form-field'>
            <input type={'number'} placeholder='0' />
          </div>
        </Col>
        <Col xs={24} xl={6}>
          <div className='custom-form-field df-label-center'>
            <label>{'Taux de mortalite Femme'}</label>
          </div>
        </Col>
        <Col xs={24} xl={6}>
          <div className='custom-form-field'>
            <select className='dropdown-style-2'>
              <option value='unisex'>{'Unisexe'}</option>
            </select>
          </div>
        </Col>
        <Col xs={24} xl={6}>
          <div className='custom-form-field df-label-center'>
            <label>{'Taux d`inflation'}</label>
          </div>
        </Col>
        <Col xs={24} xl={6}>
          <div className='custom-form-field'>
            <input type={'number'} placeholder='0' />
          </div>
        </Col>
        <Divider />
        <Col xs={24} xl={12}>
          <div className='custom-form-field df-label-center'>
            <label>{'Taux d`imposition'}</label>
          </div>
        </Col>
        <Col xs={24} xl={6}>
          <div className='custom-form-field'>
            <input type={'number'} placeholder='0' />
          </div>
        </Col>
        <Col xs={24} xl={12}>
          <div className='custom-form-field df-label-center'>
            <label>{'Frais relatifs aux contrats d`assurance-vie non lieee'}</label>
          </div>
        </Col>
        <Col xs={24} xl={6}>
          <div className='custom-form-field'>
            <input type={'number'} placeholder='0' />
          </div>
        </Col>
        <Divider />
        <Col xs={24}>
          <SCRHypothesis />
        </Col>
      </Row>
    </div>
  )
}

export default Hypothesis
