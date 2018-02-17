import actionTypes from '../actions/types'

const initialState = {
    users: [],
    me: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USERS:
            return { ...state, users: action.payload }
        case actionTypes.LOGIN:
            return { ...state, me: action.payload }
        case actionTypes.RESET:
            return { ...initialState }
        default:
            return state
    }
}