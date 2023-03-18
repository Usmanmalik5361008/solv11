import { cellInput } from '../components/cellInput'
import { cellSelector } from '../components/cellSelector'
import { deviseList } from '../core/constants'


export const data = {
  columns: [
    {
      key: 'col1',
      name: 'Date Calcul',
      editable: true,
      editor: (params) =>
        cellInput({
          type: 'date',
          params,
          columnId: 'col1',
        }),
    },
    {
      key: 'col2',
      name: 'Devise',
      editable: true,
      editor: (params) =>
        cellSelector({
          list: deviseList,
          params,
          columnId: 'col2',
        }),
    },
    {
      key: 'col3',
      name: 'Mois',
      editable: true,
      editor: (params) =>
        cellInput({
          type: 'number',
          params,
          columnId: 'col3',
        }),
    },
    {
      key: 'col4',
      name: 'Taux',
      editable: true,
      editor: (params) =>
        cellInput({
          type: 'number',
          params,
          columnId: 'col4',
        }),
    },
  ],
  // [label, value, label, value] ---> format
  rows: [
    ['11/03/2023', 'USD', '210', '0.19159999999999'],
  ],
}
