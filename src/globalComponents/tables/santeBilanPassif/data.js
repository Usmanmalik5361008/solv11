import { cellInput } from '../components/cellInput'

export const data = {
  columns: [
    {
      key: 'col1',
      name: 'Poste',
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col1' }),
    },
    {
      key: 'col2',
      name: 'Reference',
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col2' }),
    },
    {
      key: 'col3',
      name: 'Intitule',
      editable: true,
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col3' }),
    },
    {
      key: 'col4',
      name: 'SolvaI',
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col4' }),
    },
    {
      key: 'col5',
      name: 'SolvaII',
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col5' }),
    },
    {
      key: 'col6',
      name: 'Variation',
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col6' }),
    },
  ],
  // [label, value, label, value] ---> format
  rows: [['', '', '', 0.0, 0.0, 0.0]],
}
