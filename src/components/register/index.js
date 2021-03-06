import { connect } from 'react-redux'
import Component from './Component'
import { register } from '../../actions/user';

const mapDispatchToProps = dispatch => {
    return {
        register: user => dispatch(register(user))
    }
}

const mapStateToProps = state => {
    return {
    }
}

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)

export default Container