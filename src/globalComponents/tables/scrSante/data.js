import { cellInput } from '../components/cellInput'

export const data = {
  columns: [
    {
      key: 'label',
      name: '',
      width: 'max-content',
      colSpan(args) {
        if (args.type === 'ROW') {
          if (args.row.id > 4) return 4
        }
        return undefined
      },
    },
    {
      key: 'col1',
      name: 'Frais Generaux',
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col1' }),
    },
    {
      key: 'col2',
      name: 'Primes Acquises N+1',
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col2' }),
    },
    {
      key: 'col3',
      name: 'Primes Emises N+1',
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col3' }),
    },
    {
      key: 'col4',
      name: 'VAP Primes N',
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col4' }),
    },
  ],
  // [label, value, label, value] ---> format
  rows: [
    ['Medical Expenses', 0, 0, 0, 0],
    ['Perte de revenus', 0, 0, 0, 0],
    ['Accidental du travail', 0, 0, 0, 0],
    ['Reassurance NP', 0, 0, 0, 0],
    ['Taux de revaloraisation des colisation sante', '', '', '', 0],
    ['Taux de revaloraisation des prestations sante', '', '', '', 0],
    ['Des (en mois) de resilliation', '', '', '', 0],
    [`DIV: effet de diversification geographique d'activites`, '', '', '', 0],
  ],
}
