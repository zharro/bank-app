import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ListItemIcon from '@material-ui/core/ListItemIcon';


export const listItems = (
  <div>
    <ListItem button>
    <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Между своими счетами" />
    </ListItem>
    <ListItem button>
    <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Клиенту банка" />
    </ListItem>
    <ListItem button>
    <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="На карту другого банка" />
    </ListItem>
    <ListItem button>
    <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="На счет другого банка" />
    </ListItem>
  </div>
);
