import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export const listItems = (
  <div>
    <ListItem button>
      <ListItemText primary="Сад" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Футбол" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Интернет" />
    </ListItem>
  </div>
);
