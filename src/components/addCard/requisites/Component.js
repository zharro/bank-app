import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Form from '../../common/Form';
import MenuItem from '@material-ui/core/MenuItem';

import { months, years } from './constants';

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
            name: 'Газпромбанк, VISA'
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = () => {
        this.props.addCard({
            ...this.state,
            shortNumber: ' *' + this.state.number.slice(-4),
            money: Math.floor(Math.random() * 10000)
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <Form>
                <TextField
                    id="number"
                    name="number"
                    label="Номер"
                    type="number"
                    className={classes.textField}
                    margin="normal"
                    value={this.state.number}
                    onChange={this.handleChange}
                />
                <div className={classes.expiresAt}>
                    <TextField
                        id="expireAtMonth"
                        name="expireAtMonth"
                        select
                        label="Месяц"
                        className={classes.selectField}
                        value={this.state.expireAtMonth}
                        onChange={this.handleChange}
                        margin="normal"
                    >
                        {months.map(month => (
                            <MenuItem key={month} value={month}>
                                {month}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
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
                        margin="normal"
                    >
                        {years.map(year => (
                            <MenuItem key={year} value={year}>
                                {year}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <TextField
                    id="cvv"
                    name="cvv"
                    label="CVV"
                    type="number"
                    className={classes.textField}
                    margin="normal"
                    value={this.state.cvv}
                    onChange={this.handleChange}
                />
                <Button onClick={this.onSubmit}
                    variant="contained" color="primary" className={classes.addButton}>
                    Добавить
                </Button>
            </Form>
        );
    }
}

AddCardByRequisites.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddCardByRequisites);
