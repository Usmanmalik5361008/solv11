import { cellInput } from '../components/cellInput'

export const data = {
  columns: [
    {
      key: 'label',
      name: '',
      width: 450,
      resizable:true,
    },
    {
      key: 'col1',
      name: 'Exercise N',
      editable: true,
      width: 180,
      resizable:true,
      editor: (params) =>
        cellInput({
          type: 'number',
          params,
          columnId: 'col1',
        }),
    },
    {
      key: 'col2',
      name: 'Exercise N-1',
      editable: true,
      width: 180,
      resizable:true,
      editor: (params) =>
        cellInput({
          type: 'number',
          params,
          columnId: 'col2',
        }),
    },
  ],
  // [label, value, label, value] ---> format
  rows: [
    ['Primes brutes acquises d`assurance-vie non liee', 0, 0],
    ['Primes brutes acquises d`assurance-vie liee', 0, 0],
    ['Primes brutes acquises d`assurance non liee', 0, 0],
    ['Tx Gestion Financiere Pb Trad', 0, 0],
  ],
}
