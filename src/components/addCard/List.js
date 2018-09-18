import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import PhoneIcon from '@material-ui/icons/ContactPhone';
import SocialIcon from '@material-ui/icons/Group';
import AssignmentIcon from '@material-ui/icons/Assignment';

const items = [
  {
    link: 'addCard/requisites',
    description: 'По реквизитам',
    icon: <AssignmentIcon />,
  },
  {
    link: 'addCard/phone',
    description: 'По номеру телефона',
    icon: <PhoneIcon />,
  },
  {
    link: 'addCard/social',
    description: 'Из социальный сетей',
    icon: <SocialIcon />,
  },
];

export const listItems = (
  <Grid container direction='column' alignItems='center'>
    <Grid item>
      <Grid container direction='column' alignItems='flex-start'>
        {items.map(i => (
          <Link key={i.link} to={'/' + i.link} style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon>{i.icon}</ListItemIcon>
              <ListItemText primary={i.description} />
            </ListItem>
          </Link>
        ))
        }
      </Grid>
    </Grid>
  </Grid>
);
