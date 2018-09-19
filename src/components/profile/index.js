import { connect } from 'react-redux'
import Component from './Component'

const mapDispatchToProps = dispatch => {
    return {
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