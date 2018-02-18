import * as service from '../../service'
import actionTypes from './types'

const getOrders = () => (dispatch, state) => {
    service.getOrders()
        .then(orders => {
            dispatch({
                type: actionTypes.GET_ORDERS,
                payload: orders
            });
        })
        .catch(e => {
            
        });
};

const placeOrder = (items, owner, supplier) => (dispatch, state) => {
    return new Promise((resolve, reject) => {
        service.placeOrder(items, owner, supplier)
        .then(result => {
            resolve(result);
        })
        .catch(e => {
            reject(result);
        });
    });
}

const changeCountry = (country) => (dispatch, state) => {
    dispatch({
        type: actionTypes.CHANGE_COUNTRY,
        payload: country
    });
}

const changeCity = (city) => (dispatch, state) => {
    dispatch({
        type: actionTypes.CHANGE_CITY,
        payload: city
    });
}

const getCountries = () => (dispatch, state) => {
    service.getCountries()
        .then(countries => {
            dispatch({
                type: actionTypes.GET_COUNTRIES,
                payload: countries
            });
        })
        .catch(e => {

        });
}

const getCitiesByCountryId = (countryId, cityId) => (dispatch, state) => {
    return new Promise((resolve, reject) => {
        service.getCitiesByCountryId(countryId, cityId)
            .then(cities => {
                dispatch({
                    type: actionTypes.GET_CITIES,
                    payload: cities
                });
                resolve(cities);
            })
            .catch(e => {
                reject(e);
            });
    });
}

const getProductsByCityId = (cityId) => (dispatch, state) => {
    return new Promise((resolve, reject) => {
        service.getProductsByCityId(cityId)
            .then(cities => {
                dispatch({
                    type: actionTypes.GET_PRODUCTS,
                    payload: cities
                });
                resolve(cities);
            })
            .catch(e => {
                reject(e);
            });
    });
}

const getAvailableUsers = (location, destination) => (dispatch, state) => {
    return new Promise((resolve, reject) => {
        service.getAvailableUsers(location, destination)
            .then(users => {
                dispatch({
                    type: actionTypes.GET_AVAILABLE_USERS,
                    payload: users
                });
                resolve(users)
            })
            .catch(e => {
                reject(e);
            });
    });
}

const getUsers = () => (dispatch, state) => {
    service.users()
        .then(list => {
            dispatch({
                type: actionTypes.GET_USERS,
                payload: list
            });
        })
        .catch(e => {

        });
};

const login = (id) => (dispatch, state) => {
    service.login({ _id: id })
        .then(result => {
            dispatch({
                type: actionTypes.LOGIN,
                payload: result
            });
        })
        .catch(e => {

        });
}

const reset = () => (dispatch, state) => {
    dispatch({
        type: actionTypes.RESET,
        payload: {}
    })
}

export default {
    getOrders,
    placeOrder,
    changeCountry,
    changeCity,
    getCountries,
    getCitiesByCountryId,
    getProductsByCityId,
    getAvailableUsers,
    getUsers,
    login,
    reset
}