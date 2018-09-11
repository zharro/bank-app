import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    marginRight: 'auto',
  },
});

class QR extends Component {
  onButtonClick = () => {
    window.postMessage('START_QR_SCANNING', '*');
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <h2>QR</h2>
        <Button onClick={this.onButtonClick}>
          <AspectRatioIcon style={{ fontSize: 50 }} />
          Сканировать
        </Button>
      </div>
    );
  }
}

QR.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QR);
