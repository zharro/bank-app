import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Alert from './Alert'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',

  },
  formControl: {
    margin: theme.spacing.unit,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  menu: {
  },
});


class SimpleSelect extends React.Component {
  state = {
    showAlert: false
  };


  onClick = () => {
    this.setState({showAlert: true})
  }

  onClose = () => {
    this.setState({
      showAlert: false,
    })
    this.props.onClose()
  }

  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
          
          <Button variant="contained" color="primary" className={classes.button} onClick={this.onClick}>
            {this.props.buttonText}
          </Button>
          <Alert text={this.props.alertText} open={this.state.showAlert} handleClose={this.onClose}/>
        </div>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
