import { connect } from 'react-redux'
import Admin from './components/admin'
import actions from '../_actions'

const mapStateToProps = (state) => ({
    users: state.reducer.users,
    me: state.reducer.me,
    orders: state.reducer.orders
});

const mapDispatchToProps = {
    ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);