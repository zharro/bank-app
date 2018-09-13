import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import ListItems from './List'
import Header from '../../common/Header'
import Template from './Template'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  header: {
    marginRight: 'auto'
  }
});

const templates = [
  {
    name: "Коммуналка",
    sum: 2500
  },
  {
    name: "Телефон",
    sum: 500
  },
  {
    name: "Интернет",
    sum: 1000
  },
]

class Templates extends Component {
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
    const { selected } = this.state

    return (
      <div className={classes.root}>
        <Header>Шаблоны</Header>
        { selected !== '' ? <Template {...templates.find(t => t.name === selected)} onSuccess={this.handleSuccess}/>
          :<ListItems templates={templates} onSelect={this.handleSelect}/>
        }
      </div>
    );
  }
}

Templates.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Templates);