import { connect } from 'react-redux'
import Component from './Component'
import {updateUser} from '../../actions/user'

const mapDispatchToProps = dispatch => {
    return {
        onChange: (update) => dispatch(updateUser(update))
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)

export default Container