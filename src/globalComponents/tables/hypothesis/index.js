import DataGrid from 'react-data-grid'
import { data } from './data'
import { useMemo } from 'react'

export const Hypothesis = () => {
  const columns = useMemo(() => data.columns, [])

  const rows = useMemo(() => {
    return data.rows.map((val, index) => ({
      id: index + 1,
      col1: val[0],
      col1Value: val[1],
      col2: val[2],
      col2Value: val[3],
      col3: val[4],
      col3Value: val[5],
    }))
  }, [])

  return (
    <DataGrid
      className='rdg-light'
      style={{ height: 'fit-content' }}
      // style={{ width: '100%',background:'red' }}
      columns={columns}
      rows={rows}
    />
  )
}
