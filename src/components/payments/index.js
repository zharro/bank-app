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
  },
  header: {
    marginRight: 'auto'
  },
  stepper: {
    maxWidth: 400,
    flexGrow: 1,
    justifySelf:'flex-end'
  }
});

class Payments extends Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

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