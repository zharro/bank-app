import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import CardIcon from '@material-ui/icons/CreditCard';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  addButton: {
    marginLeft: 'auto'
  },
  card: {
    // marginTop: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing.unit,
    alignItems: 'center'
  },
  paperContent: {
    margin: theme.spacing.unit,
  }
});

class UserCardsList extends Component {

  getBankColor(cardName){
    if(cardName.startsWith('Мегафон')){
      return '#00B856';
    }
    else if(cardName.startsWith('Газпром')){
      return '#1553B8';
    }
    else if(cardName.startsWith('Сбербанк')){
      return '#2DCA60';
    }
    return '#BDBDBD';
  }

  render() {
    const { classes, cards } = this.props;


    return (
      <div className={classes.root}>
        {/* <div className={classes.content}> */}
        {cards.length ? cards.map(c => (
          <List component="nav" key={c.number}>
            <Paper>
              <ListItem className={classes.card} button key={c.number}>
                <Avatar style={{ backgroundColor: this.getBankColor(c.name) }}>
                  <CardIcon />
                </Avatar>
                <ListItemText primary={c.name} secondary={c.shortNumber} />
                <Typography variant="display1">
                  {c.money + ' ₽'}
                </Typography>
              </ListItem>
            </Paper>
          </List>
        ))
          : (
            <Paper className={classes.paper}>
              <Typography variant="display1" className={classes.paperContent}>
                Нет добавленных карт
                </Typography>
            </Paper>
          )
        }
        <Button component={Link} to="/addCard"
          variant="fab" color="primary" aria-label="Add" className={classes.addButton}>
          <AddIcon />
        </Button>
        {/* </div> */}
      </div>
    );
  }
}

UserCardsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserCardsList);
