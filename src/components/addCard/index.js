import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { listItems } from './List'


const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

class AddCard extends Component {
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

AddCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddCard);