import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { listItems } from './List'


const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  header: {
    marginRight: 'auto'
  }
});

class Transfer extends Component {
  constructor(props){
    super(props)
    this.state = {
      selected: ''
    }
  }

  handleSelect = (name) => {
    this.setState({selected: name})
  }

  handleSuccess = () => {
    this.setState({selected: ''})
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {listItems}
      </div>
    );
  }
}

Transfer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Transfer);