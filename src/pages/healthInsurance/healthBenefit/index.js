import { ConfirmationBox, Toolbar } from 'globalComponents'

const HealthBenefitPage = () => {
  // const { t } = useTranslation()
  return (
    <div className='card-view card-padding'>
      <Toolbar />
      <div className='light-grey-bordered mt-5'>
        <div>{'Table Under Progress'}</div>
      </div>
      <br />
      <ConfirmationBox />
    </div>
  )
}

export default HealthBenefitPage

