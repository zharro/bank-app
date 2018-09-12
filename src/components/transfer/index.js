import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { listItems } from './List'
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

class Autopayment extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header>Переводы</Header>
        {listItems}
      </div>
    );
  }
}

Autopayment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Autopayment);