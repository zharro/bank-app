import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import Header from './Header'


const styles = theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'stretch'
      // flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit * 2,
    },
  });

class Form  extends React.Component {

    render () {
        const { classes } = this.props;
        return (
            <form className={classes.root} autoComplete="off">
                <Header>{this.props.headerText}</Header>
                <FormControl className={classes.formControl}>
                    {this.props.children}
                </FormControl>
            </form>
        )
    }
        
} 

Form.propTypes = {
    classes: PropTypes.object.isRequired,
    headerText: PropTypes.string.isRequired
  };

export default withStyles(styles)(Form);