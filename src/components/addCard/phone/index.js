import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
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

class AddCardFromPhone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = () => {
    this.props.history.push("/addCard/phone/list");
}

  render() {
    const { classes } = this.props;
    const { number } = this.state;

    return (
      <ValidatorForm className={classes.form} ref='form' onSubmit={this.handleSubmit}>
                  <FormControl className={classes.formControl}>

      <TextValidator
            id="number"
            name="number"
            label="Номер телефона"
            type="number"
            className={classes.textField}
            margin="dense"
            value={number}
            onChange={this.handleChange}
            validators={['required','matchRegexp:^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{10,11}$']}
            errorMessages={['Обязательно','Телефон недействителен']}
          />
          </FormControl>
        <Button type='submit'
          variant="contained" color="primary" className={classes.addButton} disabled={!number}>
          Поиск
        </Button>
      </ValidatorForm>
    );
  }
}

AddCardFromPhone.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(AddCardFromPhone));
