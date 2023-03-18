import { textEditor } from 'react-data-grid'
import { cellInput } from '../components/cellInput'
import { cellSelector } from '../components/cellSelector'
import { getYearList } from '../core/helpers'

export const BSCR_Data = {
  columns: [
    {
      key: 'col1',
      name: 'Poste',
      editable: true,
      editor: textEditor,
    },
    {
      key: 'col2',
      name: 'Anee',
      editable: true,
      editor: (params) => cellSelector({ list: getYearList(1990, 2050), params, columnId: 'col2' }),
    },
    {
      key: 'col3',
      name: 'Assurance Avec participation aux benefices',
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col3' }),
    },
    {
      key: 'col4',
      name: 'Contrats lies a des indices et a des unites de comptes',
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col4' }),
    },
    {
      key: 'col5',
      name: `Autres activities d'assurance vie`,
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col5' }),
    },
    {
      key: 'col6',
      name: `Rentes issues d`,
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col5' }),
    },
  ],
  // [label, value, label, value] ---> format
  rows: [['Coute acquisition', '2024', 0, 0, 0, 0]],
}
