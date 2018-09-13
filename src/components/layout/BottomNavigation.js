import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MoneyIcon from '@material-ui/icons/Money';
import HomeIcon from '@material-ui/icons/Home';
import PaymentsIcon from '@material-ui/icons/ImportExport';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import CreditCardIcon from '@material-ui/icons/CreditCard';

const styles = theme => ({
  root: {
    // width: '100%',
    // position:'absolute',
    // bottom: '0px',
    // backgroundColor: '#e8f4fd'
  },
  selected: {
    paddingTop: '6px',
    color: '#fff',
  },
});

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
          icon={<HomeIcon />}
          value="/home"
          style={{ minWidth: 10 }}
        />
        <BottomNavigationAction
          icon={<CreditCardIcon />}
          value="/payments"
          style={{ minWidth: 10 }}
        />
        <BottomNavigationAction
          icon={<CompareArrowsIcon />}
          value="/transfer"
          style={{ minWidth: 10 }}
        />
        <BottomNavigationAction
          icon={<MoneyIcon />}
          value="/money"
          style={{ minWidth: 10 }}
        />
        <BottomNavigationAction
          icon={<FormatListBulletedIcon />}
          value="/history"
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
