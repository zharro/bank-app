import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Form from '../../common/Form'
import SubmitButton from '../../common/SubmitButton'
 
const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  menu: {
  },
});

class SimpleSelect extends React.Component {
  state = {
    partner: '',
    sum: '',
    showPayStatus: 'false'
  };


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  handleChange2 = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  onPay = () => {
    this.setState({showPayStatus: true})
  }
  onPayStatusClose = () => {
    this.setState({
      partner: '',
      sum: ''
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <Form headerText='Получить наличные'>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="partnerId">Выберите партнера</InputLabel>
          <Select
            value={this.state.partner}
            onChange={this.handleChange}
            inputProps={{
              name: 'partner',
              id: 'partner',
            }}
          >
            <MenuItem value={'euroset'}>ВТБ</MenuItem>
            <MenuItem value={'wu'}>АльфаБанк</MenuItem>
            <MenuItem value={'sv'}>Сбербанк</MenuItem>
          </Select>
          <TextField
            id="number"
            label="Сумма"
            value={this.state.sum}
          onChange={this.handleChange2('sum')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <SubmitButton alertText={'Заявка отправлена'} 
          buttonText={'Получить'} 
          onClose={this.onPayStatusClose} />
        </FormControl>
      </Form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
