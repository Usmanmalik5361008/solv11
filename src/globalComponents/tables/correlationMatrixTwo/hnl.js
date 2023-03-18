import DataGrid from 'react-data-grid'
import { HNL_Data as data } from './data'
import { useMemo } from 'react'
import { useState } from 'react'

export const HNL = () => {
  const columns = useMemo(() => data.columns, [])
  const [rows, setRows] = useState(
    data.rows.map((row, index) => {
      const newRow = { id: index + 1 }
      data.columns.forEach((column, i) => {
        newRow[column.key] = row[i] ?? ''
      })
      return newRow
    })
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
