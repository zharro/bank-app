import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import UtilitiesIcon from '@material-ui/icons/Domain';
import InternetIcon from '@material-ui/icons/Wifi';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import { withRouter } from 'react-router-dom'
import ListItems from './List';
import Template from './Template';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  header: {
    marginRight: 'auto',
  },
});

const templates = [
  {
    name: 'Коммуналка',
    icon: <UtilitiesIcon />,
    sum: 2500,
  },
  {
    name: 'Телефон',
    icon: <PhoneIphoneIcon />,
    sum: 500,
  },
  {
    name: 'Интернет',
    icon: <InternetIcon />,
    sum: 1000,
  },
];

class Templates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
  }

  handleSelect = name => {
    this.setState({ selected: name });
  };

  handleSuccess = () => {
    this.setState({ selected: '' });
  };

  render() {
    const { classes } = this.props;
    const { selected } = this.state;

    return (
      <div className={classes.root}>
        {selected !== '' ? (
          <Template
            {...templates.find(t => t.name === selected)}
            onSuccess={this.handleSuccess}
          />
        ) : (
          <ListItems templates={templates} onSelect={this.handleSelect} />
        )}
      </div>
    );
  }
}

Templates.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Templates));
