import React, { useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import Button from '../shared/Button';
import {convertArrayOfObjectsToCSV} from './helpers';
import {headerColumns} from './constants';

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


// Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
const downloadCSV = (array) => {
    const link = document.createElement('a');
    let csv = convertArrayOfObjectsToCSV(array);
    if (csv == null) return;
    const filename = 'export.csv';
    if (!csv.match(/^data:text\/csv/i)) {
        csv = `data:text/csv;charset=utf-8,${csv}`;
      }
    const downloadData = encodeURI(csv);
    link.setAttribute('href', downloadData);
    link.setAttribute('download', filename);
    link.click();
}

const Export = ({ onExport }) => (
    <Button onClick={e => onExport(e.target.value)}>Export</Button>
);
const MoneyTable = ({ data }) => {
    const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(data)} />, []);

    return (<DataTable
        title="Ass hole this your spending "
        columns={headerColumns}
        data={data}
        selectableRows // add for checkbox selection
        theme="solarized"
        actions={actionsMemo}
    />);
};

export default MoneyTable;