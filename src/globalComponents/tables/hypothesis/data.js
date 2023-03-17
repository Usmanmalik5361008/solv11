import { textEditor } from 'react-data-grid'

export const data = {
  columns: [
    {
      key: 'col1',
      name: 'Souscription Vie',
      width: 'max-content',
      colSpan(args) {
        if (args.type === 'ROW') {
          if(args.row.id === 14) return 2;
          if(args.row.id > 14) return 4;
        }
        if (args.type === 'HEADER') {
          return 2
        }
        return undefined
      },
    },
    {
      key: 'col1Value',
      name: '',
      editable: (args) => args.id < 14,
      editor: textEditor,
    },
    {
      key: 'col2',
      name: 'Risque de marche',
      colSpan(args) {
        if (args.type === 'HEADER') {
          return 2
        }
        return undefined
      },
    },
    {
      key: 'col2Value',
      name: '',
      editable: true,
      editor: textEditor,
    },
    {
      key: 'col3',
      name: 'Risque de Contrepartie',
      colSpan(args) {
        if (args.type === 'HEADER') {
          return 2
        }
        return undefined
      },
    },
    {
      key: 'col3Value',
      name: '',
      editable: true,
      editor: textEditor,
    },
  ],
  // [label, value, label, value] ---> format
  rows: [
    ['Incorporel', -80, 'Devise Chochausser', '', '2 Pb Trad', ''],
    ['Rachat Choc haussier', '', 'Devise Choc hausser', '', '2 Pb Trad', ''],
    ['Rachat Choc baissier', '', 'Devise Choc baisser', '', '1 Pb Trad', ''],
    ['Rachat Choc baissier', '', 'Action OCDE', '', '0', ''],
    ['Rachat Massif', '', 'Action hors OCDE', '', '5 Pb Trad', ''],
    ['Depenses', '', 'Spread', '', '4 Pb Trad', ''],
    ['Catastrophe', '', 'Spread', '', '3 Pb Trad', ''],
    ['Inflation', '', 'Spread', '', '6 Pb Trad', ''],
    ['Illiquidite', '', 'Spread', '', 'Non note', ''],
    ['Rachat (hors Retail)', '', 'Spread', '', '196', ''],
    ['Gamma', '', 'Spread', '', '175', ''],
    ['Longevite', '', 'Spread', '', '150', ''],
    ['Incapacite', '', 'Immobilier', '', '125', ''],
    ['', '', 'Correlation Choc Action', '', '122', ''],
    ['', '', '', '', '100', ''],
    ['', '', '', '', '95', ''],
    ['', '', '', '', '75', ''],
    ['', '', '', '', '<75', ''],
    ['', '', '', '', '<75', ''],
  ],
}
