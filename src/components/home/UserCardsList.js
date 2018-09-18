import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import CardIcon from '@material-ui/icons/CreditCard';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  addButton: {
    marginLeft: 'auto'
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
      <div className={classes.content}>
        <List component="nav">
          <ListItem className={classes.card} button>
            <Avatar style={{ backgroundColor: '#3748AC' }}>
              <CardIcon />
            </Avatar>
            <ListItemText primary="20340.00 ₽" secondary="Газпромнефть *3424" />
          </ListItem>
          <ListItem className={classes.card} button>
            <Avatar>
              <CardIcon />
            </Avatar>
            <ListItemText primary="2014.23 ₽" secondary="Travel Miles *5345" />
          </ListItem>
          <ListItem className={classes.card} button>
            <Avatar>
              <CardIcon />
            </Avatar>
            <ListItemText primary="200.00 ₽" secondary="Карта МИР *2423" />
          </ListItem>
        </List>
        <Button component={Link} to="/addCard"
          variant="fab" color="primary" aria-label="Add" className={classes.addButton}>
          <AddIcon />
        </Button>
        </div>
      </div>
    );
  }
}

UserCardsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserCardsList);
