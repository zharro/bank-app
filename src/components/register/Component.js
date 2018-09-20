import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    form: {
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column'
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
            lastName: '',
            name: '',
            middleName: '',
            phone: '',
            email: null,
            sex: "",
            submitted: false,
        };
    }

    handleChange = (event) => {
        
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = () => {
        this.setState({ submitted: true }, () => this.props.register({...this.state}));
    }

    render() {
        const { classes } = this.props;
        const { lastName, name, middleName, phone, email, sex } = this.state
        return (

            <ValidatorForm className={classes.form} ref='form' onSubmit={this.handleSubmit}>
                <TextValidator
                    name="lastName"
                    label="Фамилия"
                    type='text'
                    className={classes.formControl}
                    onChange={this.handleChange}
                    value={lastName}
                    validators={['required']}
                    errorMessages={['Обязательно']}
                />
                <FormControl className={classes.formControl}>
                    <TextValidator
                        name="name"
                        label="Имя"
                        type='text'
                        className={classes.formControl}
                        onChange={this.handleChange}
                        value={name}
                        validators={['required']}
                        errorMessages={['Обязательно']}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextValidator
                        name="middleName"
                        label="Отчество"
                        type='text'
                        className={classes.formControl}
                        onChange={this.handleChange}
                        value={middleName}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextValidator
                        name="phone"
                        label="Телефон"
                        className={classes.formControl}
                        type="number"
                        onChange={this.handleChange}
                        value={phone}
                        validators={['required','matchRegexp:^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{10,11}$']}
                        errorMessages={['Обязательно','Телефон недействителен']}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextValidator
                        name="email"
                        label="Email"
                        className={classes.formControl}
                        type="email"
                        onChange={this.handleChange}
                        value={email}
                        validators={['required', 'isEmail']}
                        errorMessages={['Обязательно', 'Адрес недействителен']}
                    />
                </FormControl>

                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Пол</FormLabel>
                    <RadioGroup
                        aria-label="Gender"
                        name="sex"
                        className={classes.radioGroup}
                        value={sex}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="female" control={<Radio color="primary" />} label="Женский" />
                        <FormControlLabel value="male" control={<Radio color="primary" />} label="Мужской" />
                    </RadioGroup>
                </FormControl>
                <Button type='submit' variant="contained" color="primary">
                    Зарегистрироваться
                    </Button>
            </ValidatorForm>

        );
    }
}

Registration.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Registration);
