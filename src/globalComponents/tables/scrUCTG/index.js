import DataGrid from 'react-data-grid'
import { BSCR_Data as data } from './data'
import { useMemo } from 'react'
import { useState } from 'react'

export const SCRUCTGTable = () => {
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
    <div className={'scr-counter-part-table'}>
      <DataGrid
        className={'rdg-light'}
        columns={columns}
        onRowsChange={(row) => setRows(row)}
        rows={rows}
        onCellClick={(e) => console.log({ e })}
      />
      <div className={'custom-form-field'}>
        <label>{`Couts fixes pour les UC`}</label>
        <input type={'number'} placeholder='0' className='text-right' />
      </div>
      <div className={'custom-form-field'}>
        <label>{`Couts fixes pour les TG`}</label>
        <input type={'number'} placeholder='0' className='text-right' />
      </div>
      <div className={'custom-form-field'}>
        <label>{`Pourcentage de Pm a partir duquel il y a une management action (ORSA)`}</label>
        <input type={'number'} placeholder='0' className='text-right' />
      </div>
    </div>
  )
}
