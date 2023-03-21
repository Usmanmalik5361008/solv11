import { cellInput } from '../components/cellInput'

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
      name: 'Date Survenance',
      editable: true,
      editor: (params) => cellInput({ type: 'date', params, columnId: 'col4' }),
    },
    {
      key: 'col5',
      name: 'Date Debut Sinistre',
      editable: true,
      editor: (params) => cellInput({ type: 'date', params, columnId: 'col5' }),
    },
    {
      key: 'col6',
      name: 'Date Fin Sinistre',
      editable: true,
      editor: (params) => cellInput({ type: 'date', params, columnId: 'col6' }),
    },
    {
      key: 'col7',
      name: 'Date de Reglement',
      editable: true,
      editor: (params) => cellInput({ type: 'date', params, columnId: 'col7' }),
    },
    {
      key: 'col8',
      name: `Date de Soins`,
      editable: true,
      editor: (params) => cellInput({ type: 'date', params, columnId: 'col8' }),
    },
    {
      key: 'col9',
      name: 'Numero de Sinistre',
      editable: true,
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col9' }),
    },
    {
      key: 'col10',
      name: `LOB`,
      editable: true,
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col10' }),
    },
    {
      key: 'col11',
      name: `Code Garantie`,
      editable: true,
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col11' }),
    },
    {
      key: 'col12',
      name: `Code Acte`,
      editable: true,
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col12' }),
    },
    {
      key: 'col13',
      name: `Libelle Acte`,
      editable: true,
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col13' }),
    },
    {
      key: 'col14',
      name: `Montant de la depens`,
      editable: true,
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col14' }),
    },
    {
      key: 'col15',
      name: `Montant Rembourse`,
      editable: true,
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col15' }),
    },
  ],
  // [label, value, label, value] ---> format
  rows: [[]],
}
