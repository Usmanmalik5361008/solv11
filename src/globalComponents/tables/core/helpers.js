export const getYearList = (startYear, endYear) => {
  const years = []

  for (let year = startYear; year <= endYear; year++) {
    years.push({ key: year.toString(), label: year.toString() })
  }

  return years
}
