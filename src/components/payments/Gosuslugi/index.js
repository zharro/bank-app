import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import SubmitButton from '../../common/SubmitButton';
import CardSelect from '../../common/CardSelect';
import { FormGroup } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    flexWrap: 'nowrap'
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
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
  }
});

class Gosuslugi extends React.Component {
  state = {
    payOption: '',
    checkedA: '',
    checkedB: '',
    card: '',
    inn: '',
    kpp: '',
    account: '',
    sum: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheck = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  onPay = () => {
    this.setState({ showPayStatus: true });
  };
  onPayStatusClose = () => {
    this.setState({
      checkedA: false,
      checkedB: false,
      payOption: '',
      card: '',
    });
  };
  handleSubmit = () => {
    this.props.history.goBack();
  };


  renderSwitch(param) {
    const { classes } = this.props;
    // const { }
    const { inn, kpp, account, sum } = this.state
    switch (param) {
      case 'req':
        return (
          <ValidatorForm className={classes.form} ref='form' onSubmit={this.handleSubmit}>
            <CardSelect
              cardName={this.state.card}
              onSelect={this.handleChange}
            />
            <FormControl className={classes.formControl}>
              <TextValidator
                name='inn'
                id="number"
                value={inn}
                label="ИНН"
                type="number"
                className={classes.textField}
                validators={['required']}
                errorMessages={['Обязательно']}
                margin="dense"
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextValidator
                name='kpp'
                value={kpp}
                id="number"
                label="КПП"
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
                name='account'
                value={account}
                id="number"
                label="Расчетный счет"
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
                id="sum"
                name="sum"
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

            <FormControl className={classes.formControl}>
              <FormControlLabel
                control={
                  <Switch
                    name='autopaument'
                    checked={this.state.checkedA}
                    onChange={this.handleCheck('checkedA')}
                    value="checkedA"
                    color={'primary'}
                  />
                }
                label="Создать автоплатеж"
              />
            </FormControl>

            <FormControl className={classes.formControl}>
              <FormControlLabel
                control={
                  <Switch
                    name='template'
                    checked={this.state.checkedB}
                    onChange={this.handleCheck('checkedB')}
                    value="checkedB"
                    color={'primary'}
                  />
                }
                label="Создать шаблон"
              />
            </FormControl>
            <SubmitButton
              buttonText={'Оплатить'}
            />
          </ValidatorForm>
          // </div>
        );
      case 'qr':
        return (
          <Button
            style={{ marginTop: '10px' }}
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => window.postMessage('START_QR_SCANNING', '*')}
          >
            Сканировать QR
          </Button>
        );
      default:
    }
  }
  render() {
    const { payOption } = this.state;
    const { classes } = this.props
    return (
      <FormGroup className={classes.root}>

        {payOption ? null : (
          <InputLabel htmlFor="payOption">Выберите способ оплаты</InputLabel>
        )}
        <Select
          value={this.state.payOption}
          onChange={this.handleChange}
          inputProps={{
            name: 'payOption',
            id: 'payOption',
          }}
        >
          <MenuItem value={'req'}>Оплата по реквизитам</MenuItem>
          <MenuItem value={'qr'}>Оплата по QR</MenuItem>
        </Select>

        {this.renderSwitch(payOption)}
      </FormGroup>
    );
  }
}

Gosuslugi.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Gosuslugi);
