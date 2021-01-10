import axios from 'axios';

export const axiosWithAuth = () => {
    //get token form env
    const token = process.env.REACT_APP_TOKEN;

    //create new "instance" of axios with the config obj built-in
    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'https://foodtruck-backend-api.herokuapp.com/api'
    });
};