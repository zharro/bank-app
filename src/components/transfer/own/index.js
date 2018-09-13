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
      fromCard: '',
      toCard: '',
      sum: props.sum
    };
  }
  
  handleToChange = event => {
    let toCard = event.target.value
    let {fromCard} = this.state
    fromCard === toCard && (fromCard = '')
    this.setState({ 
      toCard: event.target.value,
      fromCard: fromCard
    });
  };

  handleFromChange = event => {
    let fromCard = event.target.value
    let {toCard} = this.state
    fromCard === toCard && (toCard = '')
    this.setState({ 
      fromCard: event.target.value,
      toCard: toCard
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
    const { sum } = this.state
    return (
      <Form headerText='Между своими счетами'>
          <CardSelect cardName={this.state.fromCard} onSelect={this.handleFromChange} />
          <CardSelect cardName={this.state.toCard} onSelect={this.handleToChange} />

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
