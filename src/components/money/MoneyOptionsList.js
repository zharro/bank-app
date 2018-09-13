import React from 'react';
import { Link } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PartnerCashDeskIcon from '@material-ui/icons/Shop';
import BankIcon from '@material-ui/icons/AccountBalance';

export const listItems = (
  <div>
        <Link to='/partner' style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <PartnerCashDeskIcon />
      </ListItemIcon>
      <ListItemText primary="В кассе партнера" />
    </ListItem>
    </Link>
    <Link to='/bank' style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <BankIcon />
        </ListItemIcon>
        <ListItemText primary="В банке-партнере" />
      </ListItem>
    </Link>
  </div>
);