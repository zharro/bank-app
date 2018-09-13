import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Link } from 'react-router-dom';
import Form from '../common/Form';
import { push } from 'react-router-redux';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  radioGroup: {
    margin: `${theme.spacing.unit}px 0`,
    flexDirection: 'row',
  },
});

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: 'Дзюба',
      name: 'Артём',
      middleName: null,
      phone: '+7',
      email: null,
      sex: null,
    };
  }

  handleChange = event => {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Form>
        <TextField
          name="lastName"
          label="Фамилия"
          className={classes.formControl}
          onChange={this.handleChange}
        />
        <TextField
          name="name"
          label="Имя"
          className={classes.formControl}
          onChange={this.handleChange}
        />
        <TextField
          name="middleName"
          label="Отчество"
          className={classes.formControl}
          onChange={this.handleChange}
        />
        <TextField
          name="phone"
          label="Телефон"
          className={classes.formControl}
          type="tel"
          onChange={this.handleChange}
        />
        <TextField
          name="email"
          label="Email"
          className={classes.formControl}
          type="email"
          onChange={this.handleChange}
        />
        <FormControl component="fieldset">
          <FormLabel component="legend">Пол</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="sex"
            className={classes.radioGroup}
            value={this.state.sex}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio color={'primary'} />}
              label="Женский"
            />
            <FormControlLabel
              value="male"
              control={<Radio color={'primary'} />}
              label="Мужской"
            />
          </RadioGroup>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <Button
              type="submit"
              color="primary"
              variant={'contained'}
              className={classes.formControl}
            >
              Зарегистрироваться
            </Button>
          </Link>
        </FormControl>
      </Form>
    );
  }
}

Registration.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Registration);
