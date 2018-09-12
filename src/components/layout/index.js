import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import BottomNavigation from './BottomNavigation'
// import RouteWithSubRoutes from '../../App'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexDirection: 'column',
    flexGrow: 1,
    paddingTop: '30px',
    height: '100vh',
    overflow: 'auto',
  }
});

class Layout extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>        
        <CssBaseline />
        <div className={classes.root}>
            <main className={classes.content}>
              {this.props.children}
              {/* {this.props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)} */}
              <BottomNavigation />
          </main>
        </div>
        </React.Fragment>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);