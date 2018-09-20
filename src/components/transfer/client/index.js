import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardSelect from '../../common/CardSelect';
import SubmitButton from '../../common/SubmitButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import FormControl from '@material-ui/core/FormControl';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
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
});

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: '',
      sum: props.sum,
      number: '',
      tab: 0,
      showStatus: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleTabChange = (event, value) => {
    this.setState({ tab: value });
  };

  onPay = () => {
    this.setState({ showStatus: true });
  };

  handleSubmit = () => {
    this.props.history.push('/transfer');
  };
  render() {
    const { classes } = this.props;
    const { sum, number, tab } = this.state;
    return (
      <ValidatorForm className={classes.form} ref='form' onSubmit={this.onPay}>
        <Tabs
          name="tab"
          value={tab}
          onChange={this.handleTabChange}
          centered
          fullWidth
        >
          <Tab label="По телефону" />
          <Tab label="По карте" />
        </Tabs>
        {tab === 0 && (
          <FormControl className={classes.formControl}>

            <TextValidator
              id="number"
              name="number"
              label="Номер телефона"
              type="number"
              className={classes.textField}
              margin="dense"
              value={number}
              onChange={this.handleChange}
              validators={['required','matchRegexp:^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{10,11}$']}
              errorMessages={['Обязательно','Телефон недействителен']}
            />        </FormControl>

        )}
        {tab === 1 && (
          <FormControl className={classes.formControl}>

            <TextValidator
              id="number"
              name="number"
              label="Номер карты получателя"
              type="number"
              className={classes.textField}
              margin="dense"
              value={number}
              onChange={this.handleChange}
              validators={['required', 'matchRegexp:^\\d{16}$']}
                        errorMessages={['Обязательно', 'Номер недействителен']}
            /> </FormControl>
        )}


        <CardSelect cardName={this.state.card} onSelect={this.handleChange} />
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
