import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from './Table'
import Header from '../common/Header'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    marginRight: 'auto'
  }
});

class History extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header>История</Header>
        <Table/>
      </div>
    );
  }
}

History.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(History);