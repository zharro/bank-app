import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import TransfersIcon from '@material-ui/icons/NearMe';
import SchoolIcon from '@material-ui/icons/School';
import Paper from '@material-ui/core/Paper';
import ListItems from './List'
import Autopayment from './Autopayment'
import FlashOnIcon from '@material-ui/icons/FlashOn';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit * 2,
    paddingight: theme.spacing.unit * 2,
  },
  header: {
    marginRight: 'auto',
  },
});


class Autopayments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
  }

  handleSelect = name => {
    this.setState({ selected: name });
  };

  handleSuccess = () => {
    this.setState({ selected: '' });
  };

  render() {
    const { selected } = this.state
    const { cards } = this.props
    console.log(cards[0].shortNumber)
    const autopayments = cards.length ? [
      {
        name: 'Детский сад',
        icon: <SchoolIcon />,
        sum: 4500,
        card: cards[0].shortNumber,
        period: 'month'
      },
      {
        name: 'Футбол',
        icon: <DirectionsRunIcon />,
        sum: 2000,
        card: cards[0].shortNumber,
        period: 'week'
      },
      {
        name: 'МосЭнергоСбыт',
        icon: <FlashOnIcon />,
        sum: 400,
        card: cards[0].shortNumber,
        period: 'month'
      },
    ] : []
    if (autopayments.length < 1) {
      return (<div style={{display: 'flex', justifyContent:'center'}}>
        <Typography variant='display1'>Нет автоплатежей</Typography>
      </div>)

    } else {
      return selected !== '' ? <Paper><Autopayment {...autopayments.find(t => t.name === selected)} onSuccess={this.handleSuccess} /></Paper>
        : <ListItems autopayments={autopayments} onSelect={this.handleSelect} />
    }


  }
}

Autopayments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Autopayments);
