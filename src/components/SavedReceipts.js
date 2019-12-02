import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Receipt from './Receipt'

const SavedReceipts = () => {
    const [receipts, setReceipts] = useState([]);
    const [update, setUpdate] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios
            .get(`http://project-receipt-tracker.herokuapp.com/receipts/receipts?access_token=${token}`)
            .then(res => {
                console.log(res.data)
                setReceipts(res.data)
            })
            .catch(err => console.log(err))
    }, [update]);

    return (
        <div>
            {receipts.map(receipt => (
                <Receipt
                    key={receipt.receiptid}
                    receipt={receipt}
                    update={update}
                    setUpdate={setUpdate}
                />
            ))}
        </div>
    )
}

export default SavedReceipts