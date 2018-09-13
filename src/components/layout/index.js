import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import BottomNavigation from './BottomNavigation';
import Grid from '@material-ui/core/Grid';
import AppBar from './AppBar';

const styles = theme => ({
  root: {
    display: 'flex',
    flex: 1,
    flexGrow: 1,
    height: '100vh',
    // minWidth: '500px'
    // padding: theme.spacing.unit,
  },
  content: {
    flex: 1,
    overflow: 'auto',
    padding: theme.spacing.unit * 2,
    backgroundColor: '#fff',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class Layout extends React.Component {
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  

  render() {
    const { classes, history, back } = this.props;
    const renderLayout = history.location.pathname !== '/';

    return (
      <Grid
        container
        className={classes.root}
        direction="column"
        justify="space-between"
        alignItems="stretch"
      >
        <Grid item>
          <AppBar back={back} renderChat={renderLayout} />
        </Grid>
        <Grid
          container
          direction="column"
          className={classes.content}
        >
          {this.props.children}
        </Grid>
        { renderLayout && (
          <Grid item>
            <BottomNavigation />
          </Grid>
        )}
      </Grid>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Layout));