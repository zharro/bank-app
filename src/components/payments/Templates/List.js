import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const templates = [
  {
    name: "Коммуналка",
    sum: 2500
  },
  {
    name: "Телефон",
    sum: 500
  },
  {
    name: "Интернет",
    sum: 1000
  },
]

 const ListItems = () => (
    <div>
      { templates.map(t => (
        <ListItem button key={t.name}>
          <ListItemText primary={t.name} />
        </ListItem>
      ))}
    </div>)

export default ListItems