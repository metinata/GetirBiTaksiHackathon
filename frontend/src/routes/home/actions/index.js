import * as service from '../../../service'
import actionTypes from './types'

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
    getUsers,
    login,
    reset
}