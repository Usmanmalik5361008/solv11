import DataGrid from 'react-data-grid'
import { HNL_Data as data } from './data'
import { useMemo } from 'react'
import { useState } from 'react'

export const HNL = () => {
  const columns = useMemo(() => data.columns, [])
  const [rows, setRows] = useState(
    data.rows.map((val, index) => ({
      id: index + 1,
      label: val[0],
      col1: val[1],
      col2: val[2],
      col3: val[3],
      col4: val[4],
    }))
  )
  return (
    <DataGrid
      className={'rdg-light'}
      onRowsChange={(row) => setRows(row)}
      columns={columns}
      rows={rows}
    />
  )
}
