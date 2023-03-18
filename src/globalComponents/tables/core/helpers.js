export const getYearList = (startYear, endYear) => {
  const years = []

  for (let year = startYear; year <= endYear; year++) {
    years.push({ value: year.toString(), label: year.toString() })
  }

  return years
}
