import actionTypes from '../_actions/types'

const initialState = {
    countries: [],
    cities: [],
    users: [],
    products: [],
    users: [],
    availableUsers: [],
    country: null,
    city: null,
    me: {},
    basket: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_COUNTRIES:
            return { ...state, countries: action.payload }
        case actionTypes.GET_CITIES:
            return { ...state, cities: action.payload }
        case actionTypes.GET_AVAILABLE_USERS:
            return { ...state, availableUsers: action.payload }
        case actionTypes.GET_PRODUCTS:
            return { ...state, products: action.payload }
        case actionTypes.GET_USERS:
            return { ...state, users: action.payload }
        case actionTypes.CHANGE_COUNTRY:
            return { ...state, country: action.payload }
        case actionTypes.CHANGE_CITY:
            return { ...state, city: action.payload }
        case actionTypes.LOGIN:
            return { ...state, me: action.payload }
        case actionTypes.RESET:
            return { ...initialState }
        default:
            return state
    }
}