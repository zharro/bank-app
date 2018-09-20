import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardSelect from '../../common/CardSelect'
import SubmitButton from '../../common/SubmitButton'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import FormControl from '@material-ui/core/FormControl';


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
      inn: '',
      kpp: '',
      account: '',
      sum: '',
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
    const { sum, inn,kpp,account } = this.state
    return (
      <ValidatorForm className={classes.form} ref='form' onSubmit={this.onPay}>
        <FormControl className={classes.formControl}>

          <CardSelect cardName={this.state.card} onSelect={this.handleChange} />
        </FormControl>

        <FormControl className={classes.formControl}>

          <TextValidator
            id="number"
            name="inn"
            value={inn}
            label="ИНН"
            type="number"
            className={classes.textField}
            margin="dense"
            validators={['required']}
            errorMessages={['Обязательно']}
            onChange={this.handleChange}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextValidator
            id="number"
            name="kpp"
            value={kpp}
            onChange={this.handleChange}
            label="КПП"
            type="number"
            className={classes.textField}
            margin="dense"
            validators={['required']}
            errorMessages={['Обязательно']}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextValidator
            id="number"
            name="account"
            onChange={this.handleChange}
            value={account}
            label="Расчетный счет"
            type="number"
            className={classes.textField}
            margin="dense"
            validators={['required']}
            errorMessages={['Обязательно']}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextValidator
            id="sum"
            name='sum'
            label="Сумма"
            onChange={this.handleChange}
            value={sum}
            type="number"
            className={classes.textField}
            margin="dense"
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
