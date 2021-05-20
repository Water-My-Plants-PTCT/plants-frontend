import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://water-my-plants-ptct.herokuapp.com',
        //update with new API
        headers: {
            authorization: token
        }
    })
}