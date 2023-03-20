import { textEditor } from 'react-data-grid'
import { cellInput } from '../components/cellInput'
import { cellSelector } from '../components/cellSelector'
import moment from 'moment'
import { cellText } from '../components/cellText'

export const data = {
  columns: [
    {
      key: 'col1',
      name: 'Date Calcul',
      editor: (params) => cellInput({ type: 'date', params, columnId: 'col1' }),
    },
    {
      key: 'col2',
      name: 'Code Produit',
      editor: (params) =>
        cellSelector({ list: [{ label: 'AssVie1', value: 'AssVie1' }], params, columnId: 'col2' }),
    },
    {
      key: 'col3',
      name: 'Numero Contrat',
      editable: true,
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col3' }),
    },
    {
      key: 'col4',
      name: 'Code Support',
      editable: true,
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col4' }),
    },
    {
      key: 'col5',
      name: 'Garantie Deces',
      editable: true,
      editor: (params) => cellSelector({ list: [], params, columnId: 'col5' }),
    },
    {
      key: 'col6',
      name: 'Montant Garantie',
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col6' }),
    },
    {
      key: 'col7',
      name: 'Taux de Marge',
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col7' }),
    },
    {
      key: 'col8',
      name: cellText(`Taux de Marge Minimum`),
      width: 150,
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col8' }),
    },
    {
      key: 'col9',
      name: 'Montant de Marge',
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col9' }),
    },
    {
      key: 'col10',
      name: `Taux de Commision`,
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col10' }),
    },
    {
      key: 'col11',
      name: cellText(`Taux de Commision Minimum`),
      width: 150,
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col11' }),
    },
    {
      key: 'col12',
      name: `Montant Commisions`,
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col12' }),
    },
    {
      key: 'col13',
      name: `TMG`,
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col13' }),
    },
    {
      key: 'col14',
      name: `Provision Mathamatique`,
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col14' }),
    },
    {
      key: 'col15',
      name: `Nombre Assures`,
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col15' }),
    },
    {
      key: 'col16',
      name: `Date Naissance`,
      editable: true,
      editor: (params) => cellInput({ type: 'date', params, columnId: 'col16' }),
    },
    {
      key: 'col17',
      name: cellText(`Date Naissance Assure 2`),
      width: 150,
      editable: true,
      editor: (params) => cellInput({ type: 'date', params, columnId: 'col17' }),
    },
    {
      key: 'col18',
      name: `type paiement`,
      editable: true,
      editor: (params) => cellSelector({ list: [], params, columnId: 'col18' }),
    },
    {
      key: 'col19',
      name: `Sex Assure`,
      editable: true,
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col19' }),
    },
    {
      key: 'col20',
      name: `Sex Assure 2`,
      editable: true,
      editor: (params) => cellInput({ type: 'text', params, columnId: 'col20' }),
    },
    {
      key: 'col21',
      name: `Date Terme`,
      editable: true,
      editor: (params) => cellInput({ type: 'date', params, columnId: 'col21' }),
    },
    {
      key: 'col22',
      name: cellText(`Sold Escompte Commision`),
      width: 150,
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col22' }),
    },
    {
      key: 'col23',
      name: `Date Effet Contrat`,
      editable: true,
      editor: (params) => cellInput({ type: 'date', params, columnId: 'col23' }),
    },
    {
      key: 'col24',
      name: cellText(`Prime Periodique Anuelle`),
      width: 150,
      editable: true,
      editor: (params) => cellInput({ type: 'date', params, columnId: 'col24' }),
    },
    {
      key: 'col25',
      name: cellText(`Taux Frais Gestion Financiere`),
      width: 150,
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col25' }),
    },
    {
      key: 'col26',
      name: `Cout de Gestion`,
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col26' }),
    },
    {
      key: 'col27',
      name: `Cout de Rachat`,
      // width: 150,
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col27' }),
    },
    {
      key: 'col28',
      name: `Cout de Sinistre`,
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col28' }),
    },
    {
      key: 'col29',
      name: cellText(`Cout Gestion Financiere`),
      width: 150,
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col29' }),
    },
    {
      key: 'col30',
      name: `Pourcentage`,
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col30' }),
    },
    {
      key: 'col31',
      name: `Nombre de Contrats`,
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col31' }),
    },
    {
      key: 'col32',
      name: `Sortie en Rente`,
      editable: true,
      editor: (params) => cellSelector({ list: [], params, columnId: 'col32' }),
    },
    {
      key: 'col33',
      name: `Type en Rente`,
      editable: true,
      editor: (params) => cellSelector({ list: [], params, columnId: 'col33' }),
    },
    {
      key: 'col34',
      name: cellText(`Taux Frais Acquisition`),
      width: 150,
      resizable: true,
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col34' }),
    },
    {
      key: 'col35',
      name: cellText(`Taux Commisions Acquises`),
      width: 150,
      resizable: true,
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col35' }),
    },
    {
      key: 'col36',
      name: `Cout Acquisition`,
      editable: true,
      editor: (params) => cellInput({ type: 'number', params, columnId: 'col36' }),
    },
  ],
  // [label, value, label, value] ---> format
  rows: [[]],
}
