import { DatePicker, Input } from 'antd'
import moment from 'moment'

const dateFormat = 'DD/MM/YYYY'

const handleChange = (value, params, key) =>
  params.onRowChange({ ...params.row, [key]: value }, false)

export const cellInput = ({ type, params, columnId }) =>
  type === 'date' ? (
    <>
      <DatePicker
        defaultValue={moment(undefined)}
        className={'cell-input'}
        value={params.row[columnId] ? moment(params.row[columnId], dateFormat) : moment()}
        format={dateFormat}
        allowClear={false}
        onChange={(e) => handleChange(moment(e).format('DD/MM/YYYY'), params, columnId)}
      />
    </>
  ) : (
    <Input
      type={type}
      className={'cell-input'}
      value={params.row[columnId]}
      onChange={(e) => handleChange(e.target.value, params, columnId)}
    />
  )
