import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { mainListItems, secondaryListItems} from './PaymentOptionsList'
import Header from '../common/Header'

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

class Payments extends Component {

  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <Header>Платежи</Header>
        {mainListItems}
        {secondaryListItems}
      </div>
    );
  }
}

Payments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Payments);