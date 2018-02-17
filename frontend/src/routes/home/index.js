import { connect } from 'react-redux'
import Home from './components/home'
import actions from './actions'

const mapStateToProps = (state) => ({
    users: state.home.users,
    me: state.home.me
});

const mapDispatchToProps = {
    ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);