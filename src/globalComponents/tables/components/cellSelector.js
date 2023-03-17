const handleChange = (e, params, key) =>
  params.onRowChange({ ...params.row, [key]: e.target.value }, true)

export const cellSelector = ({ list, params, columnId }) => (
  <select
    autoFocus
    className={'cell-selector'}
    value={params.row[columnId]}
    onChange={(e) => handleChange(e, params, columnId)}
  >
    {list.map(({ label, value }, index) => (
      <option key={index} value={value}>
        {label}
      </option>
    ))}
  </select>
)
