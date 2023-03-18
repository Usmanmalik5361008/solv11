import { cellInput } from '../components/cellInput'

export const data = {
  columns: [
    {
      key: 'col1',
      name: 'Intitule',
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col1' }),
    },
    {
      key: 'col2',
      name: 'Total',
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col2' }),
    },
    {
      key: 'col3',
      name: 'Tier1 II',
      editable: true,
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col3' }),
    },
    {
      key: 'col4',
      name: 'Tier1 L',
      editable: true,
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col4' }),
    },
    {
      key: 'col5',
      name: 'Tier2',
      editable: true,
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col5' }),
    },
    {
      key: 'col6',
      name: 'Tier3',
      editable: true,
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col6' }),
    },
  ],
  // [label, value, label, value] ---> format
  rows: [['', '', '', '', '', '']],
}
