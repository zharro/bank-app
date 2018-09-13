import React from 'react';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BankIcon from '@material-ui/icons/AccountBalance';
import StoreIcon from '@material-ui/icons/Store';

export const listItems = (
  <Grid container direction='column' alignItems='center'>
        <Link to='/partner' style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <StoreIcon />
      </ListItemIcon>
      <ListItemText primary="В кассе партнера" />
    </ListItem>
    </Link>
    <Link to="/bank" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <BankIcon />
        </ListItemIcon>
        <ListItemText primary="В банке-партнере" />
      </ListItem>
    </Link>
  </Grid>
);
