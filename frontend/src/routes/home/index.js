import { connect } from 'react-redux'
import Home from './components/home'
import actions from '../_actions'

const mapStateToProps = (state) => ({
    users: state.reducer.users,
    me: state.reducer.me
});

const mapDispatchToProps = {
    ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);