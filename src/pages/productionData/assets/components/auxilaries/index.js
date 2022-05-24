import { ConfirmationBox } from 'globalComponents'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Auxilaries = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='custom-table-style-2-wrapper mb-5'>
        <table>
          <tbody>
            <tr>
              <td style={{ width: '70%' }}>
                <span className='table-row-title'>
                {t('production-data.aux-fund.field-1')}
                </span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '70%' }}>
                <span className='table-row-title'>
                {t('production-data.aux-fund.field-2')}
                </span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '70%' }}>
                <span className='table-row-title'>
                {t('production-data.aux-fund.field-3')}
                </span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '70%' }}>
                <span className='table-row-title'>
                {t('production-data.aux-fund.field-4')}
                </span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '70%' }}>
                <span className='table-row-title'>
                {t('production-data.aux-fund.field-5')}
                  </span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '70%' }}>
                <span className='table-row-title'>
                {t('production-data.aux-fund.field-6')}
                </span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '70%' }}>
                <span className='table-row-title'>
                {t('production-data.aux-fund.field-7')}
                </span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '70%' }}>
                <span className='table-row-title'>
                {t('production-data.aux-fund.field-8')}
                </span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '70%' }}>
                <span className='table-row-title'>
                {t('production-data.aux-fund.field-9')}
                </span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
            <tr>
              <td style={{ width: '70%' }}>
                <span className='table-row-title'>
                {t('production-data.aux-fund.field-10')}
                </span>
              </td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
              <td className='text-right'>1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ConfirmationBox />
    </>
  )
}

export default Auxilaries
