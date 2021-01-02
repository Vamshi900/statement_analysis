import DataTable, { createTheme } from 'react-data-table-component';

createTheme('solarized', {
    text: {
        primary: '#268bd2',
        secondary: '#2aa198',
    },
    background: {
        default: '#002b36',
    },
    context: {
        background: '#cb4b16',
        text: '#FFFFFF',
    },
    divider: {
        default: '#073642',
    },
    action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
    },
});

const columns = [
    {
        name: 'Date',
        selector: 'date',
        sortable: true,
    },
    {
        name: 'Merchant',
        selector: 'merchant',
        sortable: true,
        // right: true,
    },
    {
        name: 'Type',
        selector: 'type',
    },
    {
        name: 'Amount',
        selector: 'amount',
        sortable: true,
        // right: true,
    },
  
];

const MoneyTable = ({ data }) => (

    <DataTable
        title="Ass hole this your spending "
        columns={columns}
        data={data}
        selectableRows // add for checkbox selection
        theme="solarized"
    />
);

export default  MoneyTable;