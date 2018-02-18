import axios from 'axios'

const api = 'http://localhost:3000';

export const getOrders = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${api}/orders`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export const placeOrder = (items, owner, supplier) => {
    return new Promise((resolve, reject) => {
        axios.post(`${api}/order/place`, { items: items, owner: owner, supplier: supplier })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export const getCountries = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${api}/order/countries`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export const getCitiesByCountryId = (countryId, cityId) => {
    return new Promise((resolve, reject) => {
        axios.get(`${api}/order/cities`, { params: { countryId: countryId, cityId: cityId } })
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
        axios.get(`${api}/order/products`, { params: { id: cityId } })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export const getAvailableUsers = (location, destination) => {
    return new Promise((resolve, reject) => {
        axios.get(`${api}/order/users`, { params: { location: location, destination: destination } })
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