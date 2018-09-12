import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    header: {
      alignSelf: 'center'
    }
  });

class Header extends React.Component {

    render () {
        const { classes } = this.props;
        return (
            <Typography className={classes.header} variant="display1" gutterBottom> 
                {this.props.children}
            </Typography>
        )
    }
        
} 

export default withStyles(styles)(Header);