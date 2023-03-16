import { BSCR } from './bscr'
import { Counterpart } from './counterpart'
import { HNL } from './hnl'

export const CorrelationMatrixTwoTable = () => {
  return (
    <div className={'correlation-matrix-table'}>
      <BSCR />
      <Counterpart />
      <HNL/>
    </div>
  )
}
