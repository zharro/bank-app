import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { listItems } from './MoneyOptionsList'

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

class Money extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <h3>Получить наличные</h3>
        {listItems}
      </div>
    );
  }
}

Money.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Money);