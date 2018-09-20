import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import FormControl from '@material-ui/core/FormControl';
import { months, years } from './constants';
import SubmitButton from '../../common/SubmitButton'
const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    selectField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 100
    },
    expiresAt: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    form: {
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column'
    },
    formControl: {
        // margin: theme.spacing.unit,
        minHeight: '70px'
    },
});

class AddCardByRequisites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: '',
            expireAtMonth: '',
            expireAtYear: '',
            holderName: '',
            cvv: '',
            name: 'Газпромбанк'
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = () => {
        this.props.addCard({
            ...this.state,
            shortNumber: 'VISA *' + this.state.number.slice(-4),
            money: Math.floor(Math.random() * 10000)
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <ValidatorForm className={classes.form} ref='form' onSubmit={this.handleSubmit}>
                <FormControl className={classes.formControl}>
                    <TextValidator
                        className={classes.formControl}
                        id="number"
                        name="number"
                        label="Номер"
                        type="number"
                        margin="dense"
                        value={this.state.number}
                        onChange={this.handleChange}
                        validators={['required', 'matchRegexp:^\\d{16}$']}
                        errorMessages={['Обязательно', 'Номер недействителен']}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>

                <div className={classes.expiresAt}>
                        <SelectValidator
                            id="expireAtMonth"
                            name="expireAtMonth"
                            select
                            label="Месяц"
                            className={classes.selectField}
                            value={this.state.expireAtMonth}
                            onChange={this.handleChange}
                            margin="dense"
                            validators={['required']}
                            errorMessages={['Обязательно']}
                        >
                            {months.map(month => (
                                <MenuItem key={month} value={month}>
                                    {month}
                                </MenuItem>
                            ))}
                        </SelectValidator>
                        <SelectValidator
                            id="expireAtYear"
                            name="expireAtYear"
                            select
                            label="Год"
                            className={classes.selectField}
                            value={this.state.expireAtYear}
                            onChange={this.handleChange}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            margin="dense"
                            validators={['required']}
                            errorMessages={['Обязательно']}
                        >
                            {years.map(year => (
                                <MenuItem key={year} value={year}>
                                    {year}
                                </MenuItem>
                            ))}
                        </SelectValidator>

                </div>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <TextValidator
                        id="cvv"
                        name="cvv"
                        label="CVV"
                        type="number"
                        className={classes.textField}
                        margin="dense"
                        value={this.state.cvv}
                        onChange={this.handleChange}
                        validators={['required', 'matchRegexp:^\\d{3}$']}
                        errorMessages={['Обязательно', 'CVV недействителен']}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <SubmitButton buttonText='Добавить'/>
                </FormControl>

            </ValidatorForm>
        );
    }
}

AddCardByRequisites.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddCardByRequisites);
