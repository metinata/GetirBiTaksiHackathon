import * as service from '../../../service'
import actionTypes from './types'

const reset = () => (dispatch, state) => {
    dispatch({
        type: actionTypes.RESET,
        payload: {}
    })
}

// const appSearch = (term, limit = 3) => service.search({
//     term: term,
//     media: 'software',
//     entity: 'software,iPadSoftware',
//     limit: limit
// })

export default {
    reset
}