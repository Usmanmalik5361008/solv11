import { ConfirmationBox, Toolbar } from 'globalComponents'
import { PrevoyancePrestationSanteTable } from 'globalComponents/tables'

const HealthBenefitPage = () => {
  // const { t } = useTranslation()
  return (
    <div className='card-view card-padding'>
      <Toolbar />
      <div className='mt-5'>
        <PrevoyancePrestationSanteTable />
      </div>
      <br />
      <ConfirmationBox />
    </div>
  )
}

export default HealthBenefitPage
