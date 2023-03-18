import { textEditor } from 'react-data-grid'

export const Table1_data = {
  columns: [
    {
      key: 'col1',
      name: 'Type',
    },
    {
      key: 'col2',
      name: 'Interest',
      editable: true,
      editor: textEditor,
    },
    {
      key: 'col3',
      name: 'Equity',
      editable: true,
      editor: textEditor,
    },
    {
      key: 'col4',
      name: 'Property',
      editable: true,
      editor: textEditor,
    },
    {
      key: 'col5',
      name: 'Spread',
      editable: true,
      editor: textEditor,
    },
    {
      key: 'col6',
      name: 'Currency',
      editable: true,
      editor: textEditor,
    },
  ],
  // [label, value, label, value] ---> format
  rows: [
    // ['Interest', '', '', '', '', ''],
    // ['Equity', '', '', '', '', ''],
    // ['Property', '', '', '', '', ''],
    // ['Spread', '', '', '', '', ''],
    // ['Currency', '', '', '', '', ''],
  ],
}
