import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
    // flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 240,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 240,
  },
  menu: {
    width: 240,
  },
});

class SimpleSelect extends React.Component {
  state = {
    age: '',
    name: 'hai',
    sum: 0
  };


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  handleChange2 = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="partnerId">Выберите партнера</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value={10}>Евросеть</MenuItem>
            <MenuItem value={20}>WesternUnion</MenuItem>
            <MenuItem value={30}>Связной</MenuItem>
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
        <Button variant="contained" color="primary" className={classes.button}>
        Подтвердить
      </Button>
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
