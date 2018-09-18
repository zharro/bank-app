import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import Form from '../../common/Form';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
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
            cvv: ''
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <Form >
                <TextField
                    id="number"
                    name="number"
                    label="Номер"
                    type="number"
                    className={classes.textField}
                    margin="normal"
                    value={this.state.number}
                />
                <TextField
                    id="expireAtMonth"
                    name="expireAtMonth"
                    label="Действительна до"
                    type="number"
                    className={classes.textField}
                    margin="normal"
                    value={this.state.expireAtMonth}
                />
                <TextField
                    id="expireAtYear"
                    name="expireAtYear"
                    label="Действительна до"
                    type="number"
                    className={classes.textField}
                    margin="normal"
                    value={this.state.expireAtYear}
                />
                <TextField
                    id="cvv"
                    name="cvv"
                    label="CVV"
                    type="number"
                    className={classes.textField}
                    margin="normal"
                    value={this.state.cvv}
                />
                <Button component={Link} to="/home"
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
