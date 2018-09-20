import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import SettingsIcon from '@material-ui/icons/Settings';
import {Link} from 'react-router-dom'

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: `0 ${theme.spacing.unit}px`,
  },
  avatar: {
    marginRight: 'auto',
    width: 60,
    height: 60,
  },
  settings: {
    marginLeft: 'auto',
  },
});

function HomeTopNavigation(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <Link to='/profile'>
    <Avatar
        alt="Artem Dzyuba"
        src="./images/dzuba.jpg"
        className={classes.avatar}
      />
    </Link>
    <Link to='/settings'>

      <Avatar className={classes.settings}>
        <SettingsIcon />
      </Avatar>
      </Link>

    </div>
  );
}

HomeTopNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeTopNavigation);
