import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import SubmitButton from '../../common/SubmitButton';
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import QRCode from 'react-qr-code/lib/components/QRCode';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  selectEmpty: {
    // marginTop: theme.spacing.unit * 2,
  },
  // textField: {
  //   marginLeft: theme.spacing.unit,
  //   marginRight: theme.spacing.unit,
  // },
  form: {
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column'
  },
  formControl: {
    // margin: theme.spacing.unit,
    minHeight: '70px'
  },
  menu: {},
});

class SimpleSelect extends React.Component {
  state = {
    partner: '',
    sum: '',
    showStatus: false,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  onPay = () => {
    this.setState({ showStatus: true });
  };

  handleSubmit = () => {
    this.props.history.goBack()
  };

  render() {
    const { classes } = this.props;

    return (
      <ValidatorForm className={classes.form} ref='form' onSubmit={this.onPay}>
        <FormControl className={classes.formControl}>
          <SelectValidator
            name='partner'
            value={this.state.partner}
            onChange={this.handleChange}
            className={classes.textField}
            label='Выберите партнера'
            inputProps={{
              name: 'partner',
              id: 'partner',
            }}
            validators={['required']}
            errorMessages={['Обязательно']}
          >
            <MenuItem value={'alfa'}>Альфа-банк</MenuItem>
            <MenuItem value={'sber'}>Сбербанк</MenuItem>
            <MenuItem value={'vtb'}>ВТБ</MenuItem>
          </SelectValidator>
          </FormControl>
          <FormControl className={classes.formControl}>
          <TextValidator
            name='sum'
            id="number"
            label="Сумма"
            value={this.state.sum}
            onChange={this.handleChange}
            type="number"
            className={classes.textField}
            // InputLabelProps={{
            //   shrink: true,
            // }}
            margin="dense"
            validators={['required']}
            errorMessages={['Обязательно']}
          />
                  </FormControl>

         <SubmitButton 
         showStatus={this.state.showStatus} 
         buttonText='Получить' 
         text='Поднесите к сканеру' 
         onSubmit={this.handleSubmit}
         component={<QRCode value="hey" size={100} />}
         />

        </ValidatorForm>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
