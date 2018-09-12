import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RegistrationForm from './RegistrationForm';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
});

class RegistrationPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <RegistrationForm />
      </div>
    );
  }
}

RegistrationPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegistrationPage);