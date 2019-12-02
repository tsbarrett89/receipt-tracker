import React from 'react';
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';

const CreateNewReceipt = ({ values, touched, errors, handleSubmit }) => {

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'receipt')
        axios
            .post('https://api.cloudinary.com/v1_1/dwxkvhdoj/image/upload', data)
            .then(res => {
                console.log(res)
                values.imageurl = res.data.secure_url
                console.log(values)
            })
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Field 
                type='text'
                name='merchantname'
                placeholder='merchantname'
            />
            {touched.merchantname && errors.merchantname && (
                <p className="error">{errors.merchantname}</p>
            )}
            <Field 
                type='date'
                name='date'
            />
            {touched.date && errors.date && (
                <p className="error">{errors.date}</p>
            )}
            <Field 
                type='text'
                name='amount'
                placeholder='amount'
            />
            {touched.amount && errors.amount && (
                <p className="error">{errors.amount}</p>
            )}
            <Field as='select' name='category'>
                <option value=''>Choose One</option>
                <option value='Home'>Home</option>
                <option value='Office'>Office</option>
                <option value='Car'>Car</option>
                <option value='Children'>Children</option>
                <option value='Gift'>Gift</option>
                <option value='Insurance'>Insurance</option>
                <option value='Electronics'>Electronics</option>
                <option value='Food'>Food</option>
                <option value='Entertainment'>Entertainment</option>
            </Field>
            {touched.category && errors.category && (
                <p className="error">{errors.category}</p>
            )}
            <Field 
                type='text'
                name='imageurl'
                placeholder='imageurl'
                value={values.imageurl}
            />
            <Field
                type="file"
                name="file"
                className="file-upload" 
                data-cloudinary-field="image_id"
                data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"
                onChange={uploadImage}
            />
            <button type='submit'>Add Receipt</button>
        </Form>
    )
}

const FormikCreateNewUser = withFormik({
    mapPropsToValues({merchantname, date, amount, category, imageurl}){
        return {
            date: date || '',
            amount: amount || '',
            category: category || '',
            merchantname: merchantname || '',
            imageurl: imageurl || ''
        }
    },
    validationSchema: Yup.object().shape({
            merchantname: Yup.string()
                .required("You will need this to look up your receipt later"),
            date: Yup.string()
                .required("This is a required field"),
            amount: Yup.string()
                .required("Should be at the bottom of the receipt"),
            category: Yup.string()
                .required("We need this, you can always change it later")
    }),
    handleSubmit (values){
        const token = localStorage.getItem('token')
        axios
            .post(`http://project-receipt-tracker.herokuapp.com/receipts/receipt?access_token=${token}`, values)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))
    }

})(CreateNewReceipt)

export default FormikCreateNewUser