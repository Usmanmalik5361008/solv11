import DataGrid from 'react-data-grid'
import { data } from './data'
import { useMemo, useState } from 'react'

export const SCRProjectionTable = () => {
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

  // <DataGrid
  //   className='rdg-light'
  //   style={{ height: 'fit-content' }}
  //   onRowsChange={(row) => setRows(row)}
  //   columns={columns}
  //   rows={rows}
  // />
  return <div>{'Table Under progress'}</div>
}
