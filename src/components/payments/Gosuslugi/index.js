import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Form from '../../common/Form';
import SubmitButton from '../../common/SubmitButton';
import CardSelect from '../../common/CardSelect';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  menu: {},
  select: {
    paddingTop: '10px',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class Gosuslugi extends React.Component {
  state = {
    payOption: '',
    checkedA: '',
    checkedB: '',
    card: '',
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

  renderSwitch(param) {
    const { classes } = this.props;
    // const { }
    switch (param) {
      case 'req':
        return (
          <div className={classes.root}>
            <CardSelect
              cardName={this.state.card}
              onSelect={this.handleChange}
            />

            <TextField
              id="number"
              label="ИНН"
              type="number"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="number"
              label="КПП"
              type="number"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="number"
              label="Расчетный счет"
              type="number"
              className={classes.textField}
              margin="normal"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.checkedA}
                  onChange={this.handleCheck('checkedA')}
                  value="checkedA"
                  color={'primary'}
                />
              }
              label="Создать автоплатеж"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.checkedB}
                  onChange={this.handleCheck('checkedB')}
                  value="checkedB"
                  color={'primary'}
                />
              }
              label="Создать шаблон"
            />
            <SubmitButton
              alertText={'Оплата прошла успешно'}
              buttonText={'Оплатить'}
              onClose={this.onPayStatusClose}
            />
          </div>
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
    return (
      <Form headerText="Госуслуги">
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
      </Form>
    );
  }
}

Gosuslugi.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Gosuslugi);
