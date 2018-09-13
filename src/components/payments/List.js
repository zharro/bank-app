import React from 'react';
import { Link } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid'

const renderItem = (t) => (
  <Grid item key={t.name}>
            <Link to={t.path} style={{ textDecoration: 'none' }}>
              <ListItem button>
                {t.icon && <ListItemIcon><t.icon/></ListItemIcon>}
                <ListItemText primary={t.name} />
              </ListItem>
            </Link>
          </Grid>
)

const renderList = ({items}) => (
  <Grid container direction= 'column' alignItems='center'>
    <Grid item>
      <Grid container direction='column' alignItems='flex-start'>
        {items.map(t => renderItem(t))}
      </Grid>
    </Grid>
  </Grid>)

  export default renderList