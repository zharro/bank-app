import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar';


const ListItems = (props) => (
  <Grid container direction= 'column' alignItems='center'>
    <Grid item>
      <Grid container direction='column' alignItems='flex-start'>
    {props.templates.map(t => (
      <Grid item key={t.name}>
      <ListItem button key={t.name} onClick={() => props.onSelect(t.name)}>
        <Avatar>
          {t.icon}
        </Avatar>
        <ListItemText primary={t.name} />
      </ListItem>
      </Grid>
    ))}
    <Grid item style={{alignSelf:'center'}}>
        <Button  variant="contained" color="primary">Создать</Button>
        </Grid>
    </Grid>
    </Grid>
  </Grid>)

export default ListItems