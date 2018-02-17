import { connect } from 'react-redux'
import Home from './components/home'
import actions from './actions'

const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = {
    reset: actions.reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);