import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

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
    width: '100%',
    position: 'absolute',
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
    return (
      <BottomNavigation
        value={this.props.history.location.pathname}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          icon={<CardIcon />}
          value="/home"
          style={{ minWidth: 10 }}
        />
        <BottomNavigationAction
          icon={<LocalParkingIcon />}
          value="/payments"
          style={{ minWidth: 10 }}
        />
        <BottomNavigationAction
          icon={<LocalParkingIcon />}
          value="/transfer"
          style={{ minWidth: 10 }}
        />
        <BottomNavigationAction
          icon={<MoneyIcon />}
          value="/money"
          style={{ minWidth: 10 }}
        />
        <BottomNavigationAction
          icon={<AssignmentIcon />}
          value="/history"
          style={{ minWidth: 10 }}
        />
        <BottomNavigationAction
          icon={<FeedbackIcon />}
          value="/feedback"
          style={{ minWidth: 10 }}
        />
      </BottomNavigation>
    );
  }
}

HomeBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(HomeBottomNavigation));
