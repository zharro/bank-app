import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FitnessIcon from '@material-ui/icons/FitnessCenter';
import BeachIcon from '@material-ui/icons/BeachAccess';
import GroceryIcon from '@material-ui/icons/LocalGroceryStore';
import TaxiIcon from '@material-ui/icons/LocalTaxi';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const styles = theme => ({});

// let id = 0;
// function createData(name, sum, date, card) {
//   id += 1;
//   return { id, name, sum, date, card };
// }

const spents = [
  {
    id: 1,
    pointIcon: <FitnessIcon />,
    amount: '1200.00 ₽',
    details: '*2423, сегодня',
    color: '#ED5844',
  },
  {
    id: 2,
    pointIcon: <BeachIcon />,
    amount: '13500.20 ₽',
    details: '*5345, сегодня',
    color: '#ED5844',
  },
  {
    id: 3,
    pointIcon: <TaxiIcon />,
    amount: '667.00 ₽',
    details: '*2423, вчера',
    color: '#ED5844',
  },
  {
    id: 4,
    pointIcon: <GroceryIcon />,
    amount: '34.00 ₽',
    details: '*2423, 10 сентября',
    color: '#ED5844',
  },
  {
    id: 5,
    pointIcon: <TaxiIcon />,
    amount: '443.00 ₽',
    details: '*2423, 9 сентября',
    color: '#ED5844',
  },
  {
    id: 6,
    pointIcon: <ArrowDownwardIcon />,
    amount: '40000.00 ₽',
    details: '*2423, 1 сентября',
    color: '#83BBB0',
  },
];

function SimpleTable() {
  return (
    <List component="nav">
      {spents.map(spent => {
        return (
          <ListItem key={spent.id}>
            <Avatar style={{ backgroundColor: spent.color }}>
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
