import { textEditor } from 'react-data-grid'
import { cellInput } from '../components/cellInput'
import { cellSelector } from '../components/cellSelector'
import { cellText } from '../components/cellText'
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
      name: cellText('Assurance Avec participation aux benefices'),
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col3' }),
      width: 200,
      resizable: true,
    },
    {
      key: 'col4',
      name: cellText('Contrats lies a des indices et a des unites de comptes'),
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col4' }),
      width: 200,
      resizable: true,
    },
    {
      key: 'col5',
      name: cellText(`Autres activities d'assurance vie`),
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col5' }),
      width: 200,
      resizable: true,
    },
    {
      key: 'col6',
      name: cellText(`Rentes issues de l'assurance non-vie autre que sante`),
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col6' }),
      width: 200,
      resizable: true,
    },
    {
      key: 'col7',
      name: cellText(
        `Rentes resultant de contrats d-assurance non-vie at lies a des engagement d-assurance sante Pb Trad`
      ),
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col7' }),
      width: 200,
      resizable: true,
    },
    {
      key: 'col8',
      name: `Reassurance acceptee`,
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col8' }),
    },

    {
      key: 'col9',
      name: `Assurance sante`,
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col9' }),
    },

    {
      key: 'col10',
      name: `Reassurance sante`,
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col10' }),
    },
  ],
  // [label, value, label, value] ---> format
  rows: [['Coute acquisition', '2024', 0, 0, 0, 0, 0, 0, 0, 0]],
}
