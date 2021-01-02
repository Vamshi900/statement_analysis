import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { CSVReader } from 'react-papaparse'
import MoneyTable from './MoneyTable';

const parseData = (data) => {
    const parsedData = [];

    data.forEach(element => {
        const newTransaction = {};
        newTransaction.date = element.data[0];
        newTransaction.merchant = element.data[1];
        newTransaction.amount = element.data[2];
        if (newTransaction.amount === "") {
            newTransaction.amount = element.data[3]
        }
        newTransaction.type = 'sub';
        const tempAmount = newTransaction.amount;
        if (tempAmount && tempAmount.includes("Cr")) {
            newTransaction.type = 'add'
            newTransaction.amount = tempAmount.split('Cr')[0]
        }
        if (newTransaction.date !== "") {
            newTransaction.amount = parseFloat(newTransaction.amount.replace(/,/g, ''));
            parsedData.push(newTransaction);
        }
    });
    return parsedData;
}

const Home = () => {
    const [moneyData, setParsedData] = useState(null);

    const handleOnDrop = (data) => {
        const parsed = parseData(data);
        console.log(parsed);
        setParsedData(parsed);
    }

    const handleOnError = (err, file, inputElem, reason) => {
        console.log(err)
    }

    const handleOnRemoveFile = (data) => {
        console.log('---------------------------')
        console.log(data)
        console.log('---------------------------')
    }
    return (
        <>
            <h2>Home Page</h2>

            

            <CSVReader
                onDrop={handleOnDrop}
                onError={handleOnError}
                addRemoveButton
                onRemoveFile={handleOnRemoveFile}
            >
                <span>Drop CSV file here to upload.</span>
            </CSVReader>
            {moneyData ? <>'data ready '
            <MoneyTable data={moneyData} />
            </> : 'upload data'}
        </>
    );
};

export default Home;
