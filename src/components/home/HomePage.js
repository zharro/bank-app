import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import HomeTopNavigation from './HomeTopNavigation';
import UserCardsList from './UserCardsList';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    marginRight: 'auto'
  }
});

class HomePage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div>
          <HomeTopNavigation />
          <UserCardsList />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);