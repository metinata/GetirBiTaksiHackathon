import { connect } from 'react-redux'
import Success from './components/success'
import actions from '../_actions'

const mapStateToProps = (state) => ({
    users: state.reducer.users,
    me: state.reducer.me
});

const mapDispatchToProps = {
    ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(Success);