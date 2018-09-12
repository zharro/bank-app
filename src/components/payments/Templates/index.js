import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import Button from '@material-ui/core/Button';
import ListItems from './List'
import Header from '../../common/Header'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    paddingLeft: theme.spacing.unit * 2,
    paddingight: theme.spacing.unit * 2
  },
  header: {
    marginRight: 'auto'
  }
});

class Templates extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header>Шаблоны</Header>
        <ListItems />
        <Button style={{alignSelf: 'center'}}>
          <PlaylistAddIcon style={{fontSize: 50}} />
        </Button>
      </div>
    );
  }
}

Templates.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Templates);