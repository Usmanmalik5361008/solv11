import { Toolbar } from 'globalComponents'
import { SCRCounterPartRiskTable } from 'globalComponents/tables'
import { useTranslation } from 'react-i18next'

const CounterpartyRisk = () => {
  const { t } = useTranslation()
  return (
    <div>
      <SCRCounterPartRiskTable />
    </div>
  )
}

export default CounterpartyRisk
