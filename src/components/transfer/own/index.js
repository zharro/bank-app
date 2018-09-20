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
      fromCard: '',
      toCard: '',
      sum: '',
      showStatus: false
    };
  }

  handleToChange = event => {
    let toCard = event.target.value
    let { fromCard } = this.state
    fromCard === toCard && (fromCard = '')
    this.setState({
      toCard: event.target.value,
      fromCard: fromCard
    });
  };

  handleFromChange = event => {
    let fromCard = event.target.value
    let { toCard } = this.state
    fromCard === toCard && (toCard = '')
    this.setState({
      fromCard: event.target.value,
      toCard: toCard
    });
  };

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
    const { sum } = this.state
    return (
      <ValidatorForm className={classes.form} ref='form' onSubmit={this.onPay}>
        <CardSelect name='from' cardName={this.state.fromCard} onSelect={this.handleFromChange} />
        <CardSelect name='to' cardName={this.state.toCard} onSelect={this.handleToChange} />
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
          />        </FormControl>

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
