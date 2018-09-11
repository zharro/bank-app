import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import Button from '@material-ui/core/Button';
import { listItems } from './List'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    marginRight: 'auto'
  }
});

class Autopayment extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {listItems}
      </div>
    );
  }
}

Autopayment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Autopayment);