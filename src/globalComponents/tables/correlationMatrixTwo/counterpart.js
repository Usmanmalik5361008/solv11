import DataGrid from 'react-data-grid'
import { Counterpart_Data as data } from './data'
import { useMemo } from 'react'

export const Counterpart = () => {
  const columns = useMemo(() => data.columns, [])

  const rows = useMemo(() => {
    return data.rows.map((val, index) => ({
      id: index + 1,
      label: val[0],
      col1: val[1],
      col2: val[2],
    }))
  }, [])

  return <DataGrid className={'rdg-light'} columns={columns} rows={rows} />
}
