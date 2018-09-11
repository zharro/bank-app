import React from 'react';
import { Link } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const listItems = (
  <div>
        <Link to='/partner'>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>      
      <ListItemText primary="В кассе партнера" />
    </ListItem>
    </Link>
    <Link to='/bank'>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="В банке-партнере" />
      </ListItem>
    </Link>
  </div>
);