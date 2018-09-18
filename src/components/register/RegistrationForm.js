import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    // marginRight: 'auto'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formControl: {
    margin: `${theme.spacing.unit}px 0`,
  },
  radioGroup: {
      margin: `${theme.spacing.unit}px 0`,
      flexDirection: 'row'
    }
});

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: 'Дзюба',
      name: 'Артём',
      middleName: null,
      phone: '+7',
      email: null,
      sex: 'male'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = event => {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    // alert(this.state);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24} direction="column">
          <Grid item xs={12}>
            <Typography variant="headline" gutterBottom>
              Headline
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="lastName"
              label="Фамилия"
              className={classes.formControl}
              onChange={this.handleInputChange}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

RegistrationForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegistrationForm);