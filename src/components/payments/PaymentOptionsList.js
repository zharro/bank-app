import React from 'react';
import { Link } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    <Link to='/templates'>
      <ListItem button>
        <ListItemText primary="Шаблоны" />
      </ListItem>
    </Link>
    <Link to='/autopayment'>
      <ListItem button>
        <ListItemText primary="Автоплатежи" />
      </ListItem>
    </Link>
    <Link to='/QR'>
      <ListItem button>
        <ListItemText primary="QR" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset></ListSubheader>
    <Link to='/gosuslugi'>

    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Госуслуги" />
    </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Транспорт" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Интернет" />
    </ListItem>
  </div>
);