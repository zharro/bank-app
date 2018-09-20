import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import Form from '../../common/Form'


const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  menu: {
  },
  select: {
    paddingTop: '10px',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class Template extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      card: '',
      sum: props.sum
    };
  }
  
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onPay = () => {
    this.setState({showPayStatus: true})
  }
 

  render() {
    const { classes, name, onSuccess, card, period } = this.props
    const { sum } = this.state
    return (
      <Form headerText={name}>
        <TextField
            disabled
            id="card"
            name='card'
            label="Карта списания"
            type="text"
            className={classes.textField}
            margin="dense"
            value={card}
        />
        
        <FormControl className={classes.formControl}>
         <InputLabel htmlFor="card">Периодичность</InputLabel>
          <Select
          disabled
          className={classes.select}
              value={period}
              onChange={this.handleChange}
              inputProps={{
                name: 'period',
                id: 'preiod',
              }}
            >
              <MenuItem value={'week'}>Раз в неделю</MenuItem>
              <MenuItem value={'month'}>Раз в месяц</MenuItem>
            </Select>
        </FormControl>
        
          <TextField
            disabled
            id="sum"
            name='sum'
            label="Сумма"
            type="number"
            className={classes.textField}
            margin="dense"
            value={sum}
            onChange={this.handleChange}
        />
        <Button onClick={onSuccess}>Назад</Button>
      </Form>
    );
  }
}

Template.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Template);
