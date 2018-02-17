import { connect } from 'react-redux'
import Order from './components/order'
import actions from '../_actions'

const mapStateToProps = (state) => ({
    users: state.reducer.users,
    availableUsers: state.reducer.availableUsers,
    products: state.reducer.products,
    cities: state.reducer.cities,
    countries: state.reducer.countries,
    me: state.reducer.me,
    country: state.reducer.country,
    city: state.reducer.city
});

const mapDispatchToProps = {
    ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);