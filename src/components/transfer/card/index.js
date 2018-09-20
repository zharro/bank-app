import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

import CardSelect from '../../common/CardSelect'
import SubmitButton from '../../common/SubmitButton'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


const styles = theme => ({

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
      sum: '',
      number: '',
      showStatus: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onPay = () => {
    this.setState({ showStatus: true })
  }

  handleSubmit = () => {
    this.props.history.push('/transfer')
  }
  render() {
    const { classes } = this.props
    const { sum, number } = this.state
    return (
      <ValidatorForm className={classes.form} ref='form' onSubmit={this.onPay}>
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
            validators={['required', 'matchRegexp:^\\d{16}$']}
            errorMessages={['Обязательно', 'Номер недействителен']}
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

        <SubmitButton
          showStatus={this.state.showStatus}
          buttonText='Перевести'
          text='Перевод прошел успешно'
          onSubmit={this.handleSubmit} />
      </ValidatorForm>
    );
  }
}

Template.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Template);
