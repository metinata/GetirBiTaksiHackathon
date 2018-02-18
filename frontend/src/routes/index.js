/* Route Components */
import homeView from './home'
import orderView from './order'
import successView from './success'
import adminView from './admin'

/* Reducers */
import reducer from './_reducers'

export const routes = {
    homeView,
    orderView,
    successView,
    adminView
}

export const reducers = {
    reducer
}