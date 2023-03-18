import { textEditor } from 'react-data-grid'

export const BSCR_Data = {
  columns: [
    {
      key: 'col1',
      name: 'BSCR',
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
    ['Interest', '', '', '', '', ''],
    ['Equity', '', '', '', '', ''],
    ['Property', '', '', '', '', ''],
    ['Spread', '', '', '', '', ''],
    ['Currency', '', '', '', '', ''],
  ],
}

export const Counterpart_Data = {
  columns: [
    {
      key: 'label',
      name: 'Counterpart',
      width: 200,
    },
    {
      key: 'col1',
      name: 'Type1',
      editable: true,
      editor: textEditor,
    },
    {
      key: 'col2',
      name: 'Type2',
      editable: true,
      editor: textEditor,
    },
  ],
  // [label, value, label, value] ---> format
  rows: [
    ['Type 1', '', ''],
    ['Type 2', '', ''],
  ],
}

export const HNL_Data = {
  columns: [
    {
      key: 'label',
      name: 'HNL',
      width: 200,
    },
    {
      key: 'col1',
      name: 'Med Exp',
      editable: true,
      editor: textEditor,
    },
    {
      key: 'col2',
      name: 'Inc Protec',
      editable: true,
      editor: textEditor,
    },
    {
      key: 'col3',
      name: 'Work Comp',
      editable: true,
      editor: textEditor,
    },
    {
      key: 'col4',
      name: 'Non Prop',
      editable: true,
      editor: textEditor,
    },
  ],
  // [label, value, label, value] ---> format
  rows: [
    ['Med Exp', '', '2', '', ''],
    ['Inc Protec', '', '', '3', ''],
    ['Work Comp', '', '', '', ''],
    ['Non Prop', '2', '4', '', ''],
  ],
}
