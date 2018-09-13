import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom'
import BottomNavigation from './BottomNavigation';
import Grid from '@material-ui/core/Grid';
import AppBar from './AppBar'

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
    flexGrow: 1,
    overflow: 'auto',
    padding: theme.spacing.unit * 2,
    backgroundColor: '#e8f4fd'
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
    const { classes } = this.props;
    return (
      <Grid
        container
        className={classes.root}
        direction="column"
        justify="space-between"
        alignItems="stretch"
      >
        <Grid item>
          <AppBar />
        </Grid>
        <Grid
          container
          direction="column"
          className={classes.content}
        >
          {this.props.children}
        </Grid>
        <Grid item>
          <BottomNavigation />
        </Grid>
        {/* {this.props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)} */}
      </Grid>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Layout));