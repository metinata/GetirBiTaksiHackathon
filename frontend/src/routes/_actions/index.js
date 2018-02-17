import * as service from '../../service'
import actionTypes from './types'

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
    service.getCitiesByCountryId(countryId, cityId)
        .then(cities => {
            dispatch({
                type: actionTypes.GET_CITIES,
                payload: cities
            });
        })
        .catch(e => {

        });
}

const getProductsByCityId = (cityId) => (dispatch, state) => {
    service.getProductsByCityId(cityId)
        .then(cities => {
            dispatch({
                type: actionTypes.GET_PRODUCTS,
                payload: cities
            });
        })
        .catch(e => {

        });
}

const getAvailableUsers = (cityId) => (dispatch, state) => {
    service.getAvailableUsers(cityId)
        .then(cities => {
            dispatch({
                type: actionTypes.GET_PRODUCTS,
                payload: cities
            });
        })
        .catch(e => {

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