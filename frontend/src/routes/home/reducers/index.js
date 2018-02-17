import actionTypes from '../actions/types'

const initialState = {
    all: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PUBLIC_SEARCH:
            return { ...state, ...action.payload }
        case actionTypes.PARTIAL_SEARCH:
            return { ...state, ...action.payload }
        case actionTypes.RESET:
            return { ...initialState }
        default:
            return state
    }
}