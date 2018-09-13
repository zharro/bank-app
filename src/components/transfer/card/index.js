import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Form from '../../common/Form'
import CardSelect from '../../common/CardSelect'
import SubmitButton from '../../common/SubmitButton'


const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
});

class Template extends React.Component {
  constructor(props){
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
    this.setState({showPayStatus: true})
  }
 
  onSuccess = () => {
    this.props.history.push('/transfer')
  }
  render() {
    const { classes } = this.props
    const { sum,number } = this.state
    return (
      <Form headerText='На карту другого банка'>
          <TextField
            id="number"
            name='number'
            label="Номер карты получателя"
            type="number"
            className={classes.textField}
            margin="normal"
            value={number}
            onChange={this.handleChange}
        />
          <CardSelect cardName={this.state.card} onSelect={this.handleChange} />

          <TextField
            id="sum"
            name='sum'
            label="Сумма"
            type="number"
            className={classes.textField}
            margin="normal"
            value={sum}
            onChange={this.handleChange}
        />
        <SubmitButton alertText={'Оплата прошла успешно'} 
          buttonText={'Оплатить'} 
          onClose={this.onSuccess} />
      </Form>
    );
  }
}

Template.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Template);
