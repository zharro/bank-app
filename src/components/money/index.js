import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { listItems } from './MoneyOptionsList'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  header: {
    marginRight: 'auto'
  }
});

class Money extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {listItems}
      </div>
    );
  }
}

Money.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Money);