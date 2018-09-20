import React from 'react';
import { withRouter } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import AppBar from '@material-ui/core/AppBar';
import { routes } from '../../App';
import Grid from '@material-ui/core/Grid';




class Bar extends React.Component {
    getHeader = () => {
        let route = routes.find(
          r => r.path === this.props.history.location.pathname
        );
        return route.name;
    };

    backButton = () => (
        <IconButton onClick={this.props.history.goBack}>
            <ArrowBackIcon nativeColor="white" />
        </IconButton>
    )                            
    
    render() {
        const { renderChat, back } = this.props
        return (
            <AppBar position="static">
            <Toolbar>
                <Grid container justify='space-between' alignItems='center'>
                    <Grid item xs={1}>
                        <Grid container alignContent='flex-start'>
                            { back && this.backButton() }
                        </Grid>
                    </Grid>
                    <Grid item xs={10} >
                        <Grid container alignContent='flex-start' >
                            <Typography variant="title" color="inherit">
                                {this.getHeader()}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid  item xs={1} >
                        <Grid container alignContent='flex-end'>
                            { renderChat && (
                                <Link to='/feedback'>
                                <IconButton>
                                    <FeedbackIcon nativeColor="white" />
                                </IconButton>
                            </Link>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
          </AppBar>
        )
    }
}
export default withRouter(Bar)