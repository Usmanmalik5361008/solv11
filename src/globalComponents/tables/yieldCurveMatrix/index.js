import DataGrid from 'react-data-grid'
import { data } from './data'
import { useMemo } from 'react'
import { useState } from 'react'

export const YieldCurveMatrixTable = () => {
  const columns = useMemo(() => data.columns, [])

  const [rows, setRows] = useState(
    data.rows.map((val, index) => ({
      id: index + 1,
      col1: val[0],
      col2: val[1],
      col3: val[2],
      col4: val[3],
    }))
  )

  return (
    <DataGrid
      className={'rdg-light'}
      columns={columns}
      onRowsChange={(row) => setRows(row)}
      rows={rows}
    />
  )
}
