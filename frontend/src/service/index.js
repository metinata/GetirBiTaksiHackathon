import axios from 'axios'

const api = 'http://localhost:3000';

export const users = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${api}/login`)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
};

export const login = (query) => {
    return new Promise((resolve, reject) => {
        axios.post(`${api}/login`, { params: query })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
};