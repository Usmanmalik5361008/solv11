import { textEditor } from 'react-data-grid'
const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/
export const data = {
  columns: [
    {
      key: 'col1',
      name: 'Date Calcul',
      editable: true,
      editor: (prop) => {
        console.log({ prop })
        textEditor(prop)
      },
      formatter: (data) => {
        console.log({ data })
        const value = data.row.col1
        const isCorrect = dateRegex.test(value)
        if (isCorrect) {
          return value
        } else {
          return value
        }
      },
    },
    {
      key: 'col2',
      name: 'Devise',
      editable: true,
      editor: textEditor,
    },
    {
      key: 'col3',
      name: 'Mois',
      editable: true,
      editor: textEditor,
    },
    {
      key: 'col4',
      name: 'Taux',
      editable: true,
      editor: textEditor,
    },
  ],
  // [label, value, label, value] ---> format
  rows: [
    ['31/12/2021', 'USD', '210', '0.19159999999999'],
    ['31/12/2021', 'USD', '210', '0.19159999999999'],
    ['31/12/2021', 'USD', '210', '0.19159999999999'],
    ['31/12/2021', 'USD', '210', '0.19159999999999'],
    ['31/12/2021', 'USD', '210', '0.19159999999999'],
    ['31/12/2021', 'USD', '210', '0.19159999999999'],
    ['31/12/2021', 'USD', '210', '0.19159999999999'],
  ],
}
