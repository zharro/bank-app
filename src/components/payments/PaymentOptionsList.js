import React from 'react';
import { Link } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import GosuslugiIcon from '@material-ui/icons/BusinessCenter';
import TransportIcon from '@material-ui/icons/DriveEta';
import InternetIcon from '@material-ui/icons/Wifi';

export const mainListItems = (
  <div>
    <Link to='/templates' style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemText primary="Шаблоны" />
      </ListItem>
    </Link>
    <Link to='/autopayment' style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemText primary="Автоплатежи" />
      </ListItem>
    </Link>
    <Link to='/QR' style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemText primary="QR-код" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset></ListSubheader>
    <Link to='/gosuslugi' style={{ textDecoration: 'none' }}>

    <ListItem button>
      <ListItemIcon>
        <GosuslugiIcon />
      </ListItemIcon>
      <ListItemText primary="Госуслуги" style={{ textDecoration: 'none' }}/>
    </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <TransportIcon />
      </ListItemIcon>
      <ListItemText primary="Транспорт" style={{ textDecoration: 'none' }} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InternetIcon />
      </ListItemIcon>
      <ListItemText primary="Интернет" style={{ textDecoration: 'none' }} />
    </ListItem>
  </div>
);