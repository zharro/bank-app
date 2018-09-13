import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FitnessIcon from '@material-ui/icons/FitnessCenter'
import BeachIcon from '@material-ui/icons/BeachAccess'
import GroceryIcon from '@material-ui/icons/LocalGroceryStore'
import TaxiIcon from '@material-ui/icons/LocalTaxi'

const styles = theme => ({

});

let id = 0;
function createData(name, sum, date, card) {
  id += 1;
  return { id, name, sum, date, card };
}

const spents = [
  { pointIcon: <FitnessIcon/>, amount: '1200.00 ₽', details: '*2423, сегодня' },
  { pointIcon: <BeachIcon/>, amount: '13500.20 ₽', details: '*5345, сегодня' },
  { pointIcon: <TaxiIcon/>, amount: '667.00 ₽', details: '*2423, вчера' },
  { pointIcon: <GroceryIcon/>, amount: '34.00 ₽', details: '*2423, 10 сентября' },
  { pointIcon: <TaxiIcon/>, amount: '443.00 ₽', details: '*2423, 9 сентября' }
];

function SimpleTable(props) {
  const { classes } = props;

  return (
  <List component="nav">
    {spents.map(spent => {
      return (
        <ListItem>
        <Avatar>
          {spent.pointIcon}
        </Avatar>
        <ListItemText primary={spent.amount} secondary={spent.details} />
      </ListItem>
      );
    })}
    </List>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
