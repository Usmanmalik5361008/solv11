import { ConfirmationBox, Toolbar } from 'globalComponents'

const HealthProductsPage = () => {
  // const { t } = useTranslation()
  return (
    <div className='card-view card-padding'>
      <Toolbar />
      <div className='light-grey-bordered mt-5'>
        <div>{'Table is not yet Defined as in documents'}</div>
      </div>
      <br />
      <ConfirmationBox />
    </div>
  )
}

export default HealthProductsPage

