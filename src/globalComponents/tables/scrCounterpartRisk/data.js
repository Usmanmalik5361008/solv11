import { textEditor } from 'react-data-grid'
import { cellInput } from '../components/cellInput'
import { cellSelector } from '../components/cellSelector'
import { deviseList } from '../core/constants'

export const BSCR_Data = {
  columns: [
    {
      key: 'col1',
      name: 'Nom Contrepartie',
      editable: true,
      editor: textEditor,
    },
    {
      key: 'col2',
      name: 'Code LEI Pb Trad',
      editable: true,
      editor: textEditor,
    },
    {
      key: 'col3',
      name: 'Rating',
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col3' }),
    },
    {
      key: 'col4',
      name: 'Montant',
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col4' }),
    },
    {
      key: 'col5',
      name: 'Devise',
      editable: true,
      editor: (params) =>
        cellSelector({
          list: deviseList,
          params,
          columnId: 'col5',
        }),
    },
    {
      key: 'col6',
      name: 'Attenuation',
      editable: true,
      editor: textEditor,
    },
  ],
  // [label, value, label, value] ---> format
  rows: [['Swiss Re', '', 2, 0, 'EUR', 'Y']],
}
