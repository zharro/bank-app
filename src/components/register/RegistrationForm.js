import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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
        <h4 className={classes.header}>Регистрация</h4>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <TextField
            name="lastName"
            label="Фамилия"
            className={classes.formControl}
            onChange={this.handleInputChange}
          />
          <TextField
            name="name"
            label="Имя"
            className={classes.formControl}
            onChange={this.handleInputChange}
          />
          <TextField
            name="middleName"
            label="Отчество"
            className={classes.formControl}
            onChange={this.handleInputChange}
          />
          <TextField
            name="phone"
            label="Телефон"
            className={classes.formControl}
            type="tel"
            onChange={this.handleInputChange}
          />
          <TextField
            name="email"
            label="Email"
            className={classes.formControl}
            type="email"
            onChange={this.handleInputChange}
          />
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Пол</FormLabel>
            <RadioGroup
              aria-label="Gender"
              name="sex"
              className={classes.radioGroup}
              value={this.state.value}
              onChange={this.handleInputChange}
            >
              <FormControlLabel value="female" control={<Radio />} label="Женский" />
              <FormControlLabel value="male" control={<Radio />} label="Мужской" />
            </RadioGroup>
          </FormControl>
          <Link to='/home'>
            <Button type="submit" variant="contained" color="primary" className={classes.formControl}>
            Зарегистрироваться
          </Button>
        </Link>
        </form>
      </div>
    );
  }
}

RegistrationForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegistrationForm);