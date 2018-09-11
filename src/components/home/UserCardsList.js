import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import CardIcon from '@material-ui/icons/CreditCard';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    alignItems: 'flex-start'
  },
  card: {
    paddingLeft: theme.spacing.unit * 2,
  },
});

class UserCardsList extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List>
          <ListItem className={classes.card}>
            <Avatar>
              <CardIcon color="primary"/>
            </Avatar>
            <ListItemText primary="20340.00 ₽" secondary="Газпромнефть *3424" />
          </ListItem>
          <ListItem className={classes.card}>
            <Avatar>
              <CardIcon color="secondary"/>
            </Avatar>
            <ListItemText primary="2014.23 ₽" secondary="Travel Miles *5345" />
          </ListItem>
          <ListItem className={classes.card}>
            <Avatar>
              <CardIcon color="secondary"/>
            </Avatar>
            <ListItemText primary="200.00 ₽" secondary="Карта МИР *2423" />
          </ListItem>
        </List>
      </div>
    );
  }
}

UserCardsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserCardsList);