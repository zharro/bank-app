import React from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Form from '../common/Form'

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
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Пол</FormLabel>
                    <RadioGroup
                        aria-label="Gender"
                        name="sex"
                        className={classes.radioGroup}
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Женский" />
                        <FormControlLabel value="male" control={<Radio />} label="Мужской" />
                    </RadioGroup>
                </FormControl>
                    <Button onClick={()=>this.props.history.push('/home')} variant="contained" color="primary">
                        Зарегистрироваться
                    </Button>
            </Form>
        );
    }
}

Registration.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Registration));
