import * as service from '../../../service'
import actionTypes from './types'

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

const getCitiesByCountryId = (countryId) => (dispatch, state) => {
    service.getCitiesByCountryId(countryId)
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

}

export default {
    getCountries,
    getCitiesByCountryId,
    getProducts,
    getAvailableUsers
}