import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Receipt from './Receipt'

import { ContentStyled } from './styling'

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
        <ContentStyled>
            {receipts.length < 1 && <h3>Enter a receipt to view it here</h3>}
            {receipts.map(receipt => (
                <Receipt
                    key={receipt.receiptid}
                    receipt={receipt}
                    update={update}
                    setUpdate={setUpdate}
                />
            ))}
        </ContentStyled>
    )
}

export default SavedReceipts