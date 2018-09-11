import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export const listItems = (
  <div>
    <ListItem button>
      <ListItemText primary="Коммуналка" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Телефон" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Интернет" />
    </ListItem>
  </div>
);
