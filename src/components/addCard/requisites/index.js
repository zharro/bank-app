import { connect } from 'react-redux'
import Component from './Component'
import { addByNumber } from '../../../actions/card';

const mapDispatchToProps = dispatch => {
  return {
      addCard: card => dispatch(addByNumber(card))
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