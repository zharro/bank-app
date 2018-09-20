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
  menu: {},
});

class SimpleSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleSubmit = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.props.onClick()
  }

  render() {
    const { classes, buttonText, text, showStatus, onSubmit, component } = this.props;
    return (
        <Button type='submit'
          variant="contained" color="primary" className={classes.addButton}>
          {buttonText}
          <Alert text={text} open={showStatus} onClose={onSubmit} component={component}/>
        </Button>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
