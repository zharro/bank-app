import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FeedbackIcon from '@material-ui/icons/Feedback';
import CardIcon from '@material-ui/icons/CreditCard';
import MoneyIcon from '@material-ui/icons/Money';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import AssignmentIcon from '@material-ui/icons/Assignment';

const styles = {
  root: {
    width: "100%",
    position:'absolute',
    bottom: '0px',
  },
};

class HomeBottomNavigation extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.props.history.push(value);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={this.props.history.location.pathname}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Главная" icon={<CardIcon /> } value='/home' />
        <BottomNavigationAction label="Платежи" icon={<LocalParkingIcon />} value='/payments' />
        <BottomNavigationAction label="Переводы" icon={<LocalParkingIcon />} value='/transfer' />
        <BottomNavigationAction label="Наличные" icon={<MoneyIcon />} value='/money' />
        <BottomNavigationAction label="История" icon={<AssignmentIcon />} value='/history' />
        <BottomNavigationAction label="Обратная связь" icon={<FeedbackIcon />} value='/feedback' />
      </BottomNavigation>
    );
  }
}

HomeBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(HomeBottomNavigation));
