import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import BankAccountIcon from '@material-ui/icons/AccountBalance';
import SelfAccountIcon from '@material-ui/icons/Sync';
import CardIcon from '@material-ui/icons/CreditCard';
import OtherBankIcon from '@material-ui/icons/Publish';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'own',
    description: 'Между своими счетами',
    icon: <SelfAccountIcon />,
  },
  {
    name: 'client',
    description: 'Клиенту банка',
    icon: <BankAccountIcon />,
  },
  {
    name: 'card',
    description: 'На карту другого банка',
    icon: <CardIcon />,
  },
  {
    name: 'account',
    description: 'На счет в другом банке',
    icon: <OtherBankIcon />,
  },
];

export const listItems = (
  <div>
    {items.map(i => (
      <Link key={i.name} to={'/' + i.name} style={{ textDecoration: 'none' }}>
        <ListItem button>
          <ListItemIcon>{i.icon}</ListItemIcon>
          <ListItemText primary={i.description} />
        </ListItem>
      </Link>
    ))}
  </div>
);
