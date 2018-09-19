import { connect } from 'react-redux'
import Component from './UserCardsList'

const mapDispatchToProps = dispatch => {
  return {
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards.cards
  }
}

const UserCardsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default UserCardsList