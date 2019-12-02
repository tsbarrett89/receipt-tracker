import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    
    return axios.create({
        baseURL: `http://project-receipt-tracker.herokuapp.com`,
        headers: {
            Authorization: token
        }
    });
};