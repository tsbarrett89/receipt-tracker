import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { axiosWithAuth } from '../utils/axiosWithAuth'

import { ReceiptCard, ReceiptSpan } from './styling'

const Receipt = props => {
    const [editing, setEditing] = useState(false)
    const [receiptToEdit, setReceiptToEdit] = useState(props.receipt);
    const [image, setImage] = useState('');
    const [receiptImage, setReceiptImage] = useState(false);
 
    const token = localStorage.getItem('token');

    const deleteReceipt = e => {
        e.stopPropagation()
        axiosWithAuth()
            .delete(`http://project-receipt-tracker.herokuapp.com/receipts/receipt/delete/${props.receipt.receiptid}?access_token=${token}`)
            .then(res => {
                console.log(res)
                props.setUpdate(!props.update)
            })
            .catch(err => console.log(err))
    }

    const editReceipt = receipt => {
        setEditing(true);
        setReceiptToEdit(receipt);
    }

    const handleChanges = e => {
        console.log(e.target.value)
        setReceiptToEdit({...receiptToEdit, [e.target.name]: e.target.value})
    }

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'receipt')
        axios
            .post('https://api.cloudinary.com/v1_1/dwxkvhdoj/image/upload', data)
            .then(res => {
                console.log(res)
                setImage(res.data.secure_url)
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios
            .put(`http://project-receipt-tracker.herokuapp.com/receipts/receipt/${props.receipt.receiptid}?access_token=${token}`, receiptToEdit)
            .then(res => {
                console.log(res)
                props.setUpdate(!props.update)
                setEditing(!editing)
            })
            .catch(err => console.log(err))
    }

    const showReceipt = e => {
        setReceiptImage(true)
    }

    useEffect(() => {
        const image = document.getElementById("receiptImg");
        if (receiptImage) {
            image.classList.remove("hide");
        } else {
            image.classList.add("hide")
        }
    }, [receiptImage])

    return (
        <ReceiptCard>
            <ReceiptSpan>
                <p>{props.receipt.merchantname}</p>
                <p>{props.receipt.date}</p>
                <p>{props.receipt.amount}</p>
                <p>{props.receipt.category}</p>
            </ReceiptSpan>
            <img className="hide" id="receiptImg" src={props.receipt.imageurl} alt={props.receipt.merchantname} />
            <button onClick={showReceipt}>Show Receipt</button>
            <button onClick={deleteReceipt}>Delete Receipt</button>
            <button onClick={() => editReceipt(props.receipt)}>Edit Receipt</button>
            {editing &&(
                <form onSubmit={handleSubmit}>
                    <label>Date:
                        <input 
                            type='date'
                            name='date'
                            value={receiptToEdit.date}
                            onChange={handleChanges}
                        />
                    </label>
                    <label>Amount:
                    <input 
                        type='text'
                        name='amount'
                        placeholder='amount'
                        value={receiptToEdit.amount}
                        onChange={handleChanges}
                    />
                    </label>
                    <label>Category:
                    <input 
                        type='text'
                        name='category'
                        placeholder='category'
                        value={receiptToEdit.category}
                        onChange={handleChanges}
                    />
                    </label>
                    <label>Merchant Name:
                    <input 
                        type='text'
                        name='merchantname'
                        placeholder='merchantname'
                        value={receiptToEdit.merchantname}
                        onChange={handleChanges}
                    />
                    </label>
                    <label>Image URL:
                    <input 
                        type='text'
                        name='imageurl'
                        placeholder='imageurl'
                        value={receiptToEdit.imageurl}
                        onChange={handleChanges}
                    />
                    </label>
                    <button>Save Edit</button>
                    <input 
                        name="file" 
                        type="file"
                        className="file-upload" 
                        data-cloudinary-field="image_id"
                        data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"
                        onChange={uploadImage}
                    />
                    <label>Copy and paste this to imageurl
                    <input  
                        type='text'
                        name='url'
                        value={image}
                        onChange={handleChanges}
                    />
                    </label>
                </form>
            )}
            
        </ReceiptCard>
    )
}

export default Receipt