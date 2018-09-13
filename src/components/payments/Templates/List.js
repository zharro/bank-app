import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import Button from '@material-ui/core/Button';

 const ListItems = (props) => (
    <div>
      { props.templates.map(t => (
        <ListItem button key={t.name} onClick={() => props.onSelect(t.name)}>
          <ListItemText primary={t.name} />
        </ListItem>
      ))}
      <Button style={{alignSelf: 'center'}}>
          <PlaylistAddIcon style={{fontSize: 50}} />
        </Button>
    </div>)

export default ListItems