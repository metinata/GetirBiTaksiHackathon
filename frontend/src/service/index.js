import axios from 'axios'

const api = 'http://localhost:3000';

export const getCountries = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${api}/countries`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export const getCitiesByCountryId = (countryId) => {
    return new Promise((resolve, reject) => {
        axios.get(`${api}/cities`, { id: countryId })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export const getProductsByCityId = (cityId) => {
    return new Promise((resolve, reject) => {
        axios.get(`${api}/products`, { id: cityId })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export const users = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${api}/login`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

export const login = (query) => {
    return new Promise((resolve, reject) => {
        axios.post(`${api}/login`, query)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};