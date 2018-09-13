import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import TransfersIcon from '@material-ui/icons/NearMe';
import SchoolIcon from '@material-ui/icons/School';

import {cards} from '../../../storage'
import ListItems from './List'
import Autopayment from './Autopayment'
import FlashOnIcon from '@material-ui/icons/FlashOn';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';

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

const autopayments = [
  {
    name: 'Детский сад',
    icon: <SchoolIcon />,
    sum: 4500,
    card: cards[0].name,
    period: 'month'
  },
  {
    name: 'Футбол',
    icon: <DirectionsRunIcon />,
    sum: 2000,
    card: cards[1].name,
    period: 'week'
  },
  {
    name: 'МосЭнергоСбыт',
    icon: <FlashOnIcon />,
    sum: 400,
    card: cards[0].name,
    period: 'month'
  },
];

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
    return selected !== '' ? <Autopayment {...autopayments.find(t => t.name === selected)} onSuccess={this.handleSuccess}/>
          :<ListItems autopayments={autopayments} onSelect={this.handleSelect}/>
  }
}

Autopayments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Autopayments);
