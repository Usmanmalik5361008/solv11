import { ConfirmationBox, Toolbar } from 'globalComponents'
import { useTranslation } from 'react-i18next'

const Funds = () => {
  const { t } = useTranslation()

  return (
    <div className=''>
      <Toolbar />
      <div className='custom-table-style-2-header mt-5'>
        <div style={{ width: '50%' }}></div>
        <div style={{ width: '12.5%' }} className='text-center'>
          <h5>Tier1 {t('unlimited')}</h5>
        </div>
        <div style={{ width: '12.5%' }} className='text-center'>
          <h5>Tier 1 {t('limited')}</h5>
        </div>
        <div style={{ width: '12.5%' }} className='text-center'>
          <h5>Tier 2</h5>
        </div>
        <div style={{ width: '12.5%' }} className='text-center'>
          <h5>Tier 3</h5>
        </div>
      </div>
      <div className='custom-table-style-2-wrapper mb-5'>
        <table>
          <tbody>
            <tr>
              <td style={{ width: '50%' }}>
                <span className='table-row-title'>{t('production-data.bass-equity.field-1')}</span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '50%' }}>
                <span className='table-row-title'>{t('production-data.bass-equity.field-2')}</span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td colSpan={5}>
                <h5 className='small-heading mb-0'>{t('production-data.bass-equity.title-1')}</h5>
              </td>
            </tr>
            <tr>
              <td style={{ width: '50%' }}>
                <span className='table-row-title'>{t('production-data.bass-equity.field-3')}</span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '50%' }}>
                <span className='table-row-title'>{t('production-data.bass-equity.field-4')}</span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '50%' }}>
                <span className='table-row-title'>{t('production-data.bass-equity.field-5')}</span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '50%' }}>
                <span className='table-row-title'>{t('production-data.bass-equity.field-6')}</span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td colSpan={5}>
                <h5 className='small-heading mb-0'>{t('production-data.bass-equity.title-2')}</h5>
              </td>
            </tr>
            <tr>
              <td style={{ width: '50%' }}>
                <span className='table-row-title'>{t('production-data.bass-equity.field-3')}</span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '50%' }}>
                <span className='table-row-title'>{t('production-data.bass-equity.field-4')}</span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '50%' }}>
                <span className='table-row-title'>{t('production-data.bass-equity.field-5')}</span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '50%' }}>
                <span className='table-row-title'>{t('production-data.bass-equity.field-6')}</span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '50%' }}>
                <span className='table-row-title'>{t('production-data.bass-equity.field-7')}</span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '50%' }}>
                <span className='table-row-title'>{t('production-data.bass-equity.field-8')}</span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td colSpan={5}>
                <h5 className='small-heading mb-0'>{t('production-data.bass-equity.title-3')}</h5>
              </td>
            </tr>
            <tr>
              <td style={{ width: '50%' }}>
                <span className='table-row-title'>{t('production-data.bass-equity.field-9')}</span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '50%' }}>
                <span className='table-row-title'>{t('production-data.bass-equity.field-10')}</span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '50%' }}>
                <span className='table-row-title'>{t('production-data.bass-equity.field-11')}</span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '50%' }}>
                <span className='table-row-title'>{t('production-data.bass-equity.field-12')}</span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '50%' }}>
                <span className='table-row-title'>{t('production-data.bass-equity.field-13')}</span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '50%' }}>
                <span className='table-row-title'>{t('production-data.bass-equity.field-14')}</span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '50%' }}>
                <span className='table-row-title'>{t('production-data.bass-equity.field-15')}</span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ConfirmationBox />
    </div>
  )
}

export default Funds
