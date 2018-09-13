import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Form from '../../common/Form';
import CardSelect from '../../common/CardSelect';
import SubmitButton from '../../common/SubmitButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import QRCode from 'react-qr-code';

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
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
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
    this.setState({ showPayStatus: true });
  };

  onSuccess = () => {
    this.props.history.push('/transfer');
  };
  render() {
    const { classes } = this.props;
    const { sum, number, tab } = this.state;
    return (
      <Form headerText="Клиенту банка">
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
          <TextField
            id="number"
            name="number"
            label="Номер телефона"
            type="number"
            className={classes.textField}
            margin="normal"
            value={number}
            onChange={this.handleChange}
          />
        )}
        {tab === 1 && (
          <TextField
            id="number"
            name="number"
            label="Номер карты получателя"
            type="number"
            className={classes.textField}
            margin="normal"
            value={number}
            onChange={this.handleChange}
          />
        )}

        <CardSelect cardName={this.state.card} onSelect={this.handleChange} />

        <TextField
          id="sum"
          name="sum"
          label="Сумма"
          type="number"
          className={classes.textField}
          margin="normal"
          value={sum}
          onChange={this.handleChange}
        />
        <SubmitButton
          alertText={'Оплата прошла успешно'}
          buttonText={'Оплатить'}
          onClose={this.onSuccess}
        />
      </Form>
    );
  }
}

Template.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Template);
