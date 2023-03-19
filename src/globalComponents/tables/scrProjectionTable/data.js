import { textEditor } from 'react-data-grid'
import { cellInput } from '../components/cellInput'
import { cellSelector } from '../components/cellSelector'
import moment from 'moment'

export const data = {
  columns: [
    {
      key: 'col1',
      name: 'Date Calcul',
      editor: (params) => cellInput({ type: 'date', params, columnId: 'col1' }),
    },
    {
      key: 'col2',
      name: 'Numero de contrat',
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col2' }),
    },
    {
      key: 'col3',
      name: 'Numero de Beneficaire',
      editable: true,
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col3' }),
    },
    {
      key: 'col4',
      name: 'Code LOB',
      editable: true,
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col4' }),
    },
    {
      key: 'col5',
      name: 'LOB',
      editable: true,
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col5' }),
    },
    {
      key: 'col6',
      name: 'Code Acte',
      editable: true,
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col6' }),
    },
    {
      key: 'col7',
      name: 'Code Garantie',
      editable: true,
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col7' }),
    },
    {
      key: 'col8',
      name: `Date d'effet`,
      editable: true,
      editor: (params) => cellInput({ type: 'date', params, columnId: 'col8' }),
    },
    {
      key: 'col9',
      name: 'Periodicite',
      editable: true,
      editor: (params) => cellSelector({ list: [], params, columnId: 'col9' }),
    },
    {
      key: 'col10',
      name: `Cotistation Acquis`,
      editable: true,
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col10' }),
    },
  ],
  // [label, value, label, value] ---> format
  rows: [['12/03/2021', '', '', '', '', '', '', '12/03/2021', '', 0]],
}
