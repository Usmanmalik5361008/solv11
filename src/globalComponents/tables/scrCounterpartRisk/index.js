import DataGrid from 'react-data-grid'
import { BSCR_Data as data } from './data'
import { useMemo } from 'react'
import { useState } from 'react'

export const SCRCounterPartRiskTable = () => {
  const columns = useMemo(() => data.columns, [])

  const [rows, setRows] = useState(
    data.rows.map((val, index) => ({
      id: index + 1,
      col1: val[0],
      col2: val[1],
      col3: val[2],
      col4: val[3],
      col5: val[4],
      col6: val[5],
    }))
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
        <label>{`Total des expositions de type 2, à l'exclusion de celles échues depuis plus de 3 mois_FR`}</label>
        <input placeholder='180 880 488.00' className='text-right' />
      </div>
      <div className={'custom-form-field'}>
        <label>{`Total des expositions de type 2 ( creances dues depuis plus de 3 mois)`}</label>
        <input placeholder='180 880 488.00' className='text-right' />
      </div>
      ˝
    </div>
  )
}
