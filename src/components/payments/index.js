import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { mainListItems, secondaryListItems} from './PaymentOptionsList'

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

class Payments extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {mainListItems}
        {secondaryListItems}
      </div>
    );
  }
}

Payments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Payments);