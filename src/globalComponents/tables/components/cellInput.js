import React from 'react'

const handleChange = (e, params, key) =>
  params.onRowChange({ ...params.row, [key]: e.target.value }, false)

export const cellInput = ({ type, params, columnId }) => (
  <input
    type={type}
    date
    className={'cell-input'}
    value={params.row[columnId]}
    onChange={(e) => handleChange(e, params, columnId)}
  />
)
