import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import List from './List'
import GosuslugiIcon from '@material-ui/icons/BusinessCenter'
import TransportIcon from '@material-ui/icons/DriveEta'
import InternetIcon from '@material-ui/icons/Wifi'
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import StarRateIcon from '@material-ui/icons/StarRate';
import Forward30Icon from '@material-ui/icons/Forward30';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  header: {
    marginRight: 'auto',
  },
});

const items = [
  {
    name: "Шаблоны",
    icon: StarRateIcon,
    path: '/templates'
  },
  {
    name: "Автоплатежи",
    icon: Forward30Icon,
    path: '/autopayment'
  },
  {
    name: "QR-код",
    icon: FullscreenIcon,
    path: '/QR'
  },
  {
    name: "Госуслуги",
    icon: GosuslugiIcon,
    path: '/gosuslugi'
  },
  {
    name: "Транспорт",
    icon: TransportIcon,
    path: '/payments'
  },
  {
    name: "Интернет",
    icon: InternetIcon,
    path: '/payments'
  },
]
class Payments extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List items={items}/>
      </div>
    );
  }
}

Payments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Payments);
