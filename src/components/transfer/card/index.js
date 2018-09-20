import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

import CardSelect from '../../common/CardSelect'
import SubmitButton from '../../common/SubmitButton'
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

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      card: '',
      sum: props.sum,
      number: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onPay = () => {
    this.setState({ showPayStatus: true })
  }

  handleSubmit = () => {
    this.props.history.push('/transfer')
  }
  render() {
    const { classes } = this.props
    const { sum, number } = this.state
    return (
      <ValidatorForm className={classes.form} ref='form' onSubmit={this.handleSubmit}>
        <FormControl className={classes.formControl}>
          <TextValidator
            id="number"
            name='number'
            label="Номер карты получателя"
            type="number"
            className={classes.textField}
            margin="dense"
            value={number}
            onChange={this.handleChange}
            validators={['required']}
            errorMessages={['Обязательно']}
          />
        </FormControl>

        <CardSelect cardName={this.state.card} onSelect={this.handleChange} />
        <FormControl className={classes.formControl}>

          <TextValidator
            id="sum"
            name='sum'
            label="Сумма"
            type="number"
            className={classes.textField}
            margin="dense"
            value={sum}
            onChange={this.handleChange}
            validators={['required']}
            errorMessages={['Обязательно']}
          />
        </FormControl>

        <SubmitButton buttonText={'Оплатить'} />
      </ValidatorForm>
    );
  }
}

Template.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Template);
