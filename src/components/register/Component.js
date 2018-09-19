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
import Form from '../common/Form';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  form: {
    overflow: 'auto',
  },
  formControl: {
    minHeight: '70px'
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
      sex: "",
    };
  }

  handleChange = event => {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  };

  onSubmit = () => {
    this.props.register({...this.state})
  }

  render() {
    const { classes } = this.props;
    
        return (
            <Form className={classes.form}>
                <FormControl className={classes.formControl}>
                <TextField
                    name="lastName"
                    label="Фамилия"
                    type='text'
                    className={classes.formControl}
                    onChange={this.handleChange}
                />
                </FormControl>
                <FormControl className={classes.formControl}>
                <TextField
                    name="name"
                    label="Имя"
                    type='text'
                    className={classes.formControl}
                    onChange={this.handleChange}
                />
                </FormControl>
                <FormControl className={classes.formControl}>
                <TextField
                    name="middleName"
                    label="Отчество"
                    type='text'
                    className={classes.formControl}
                    onChange={this.handleChange}
                />
                </FormControl>
                <FormControl className={classes.formControl}>
                <TextField
                    name="phone"
                    label="Телефон"
                    className={classes.formControl}
                    type="number"
                    onChange={this.handleChange}
                />
                </FormControl>
                <FormControl className={classes.formControl}>
                <TextField
                    name="email"
                    label="Email"
                    className={classes.formControl}
                    type="email"
                    onChange={this.handleChange}
                />
                </FormControl>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Пол</FormLabel>
                    <RadioGroup
                        aria-label="Gender"
                        name="sex"
                        className={classes.radioGroup}
                        value={this.state.sex}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Женский" />
                        <FormControlLabel value="male" control={<Radio />} label="Мужской" />
                    </RadioGroup>
                </FormControl>
                    <Button onClick={this.onSubmit} variant="contained" color="primary">
                        Зарегистрироваться
                    </Button>
            </Form>
        );
    }
}

Registration.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Registration);