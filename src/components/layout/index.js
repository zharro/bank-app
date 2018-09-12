import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import BottomNavigation from './BottomNavigation'

const drawerWidth = 240;

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

class Dashboard extends React.Component {


  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <main className={classes.content}>
            {this.props.children}
            <BottomNavigation />
          </main>
        </div>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);