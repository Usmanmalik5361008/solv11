import DataGrid from 'react-data-grid'
import { Table1_data as data } from './data'
import { useMemo } from 'react'
import { useState } from 'react'

export const Table1 = () => {
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
      columns={columns}
      onRowsChange={(row) => setRows(row)}
      rows={rows}
      onSelectedRowsChange={(selected) => console.log({ selected })}
      onCellClick={(e) => console.log({ e })}
    />
  )
}
