import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import VK, { Auth } from 'react-vk';

const vkAppId = 6695119;

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

class AddCardFromVk extends React.Component {

    onUserLoggedIn = user => {
        this.props.history.push('/addCard/social/list');
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                {/* <Redirect to='/addCard/social/list' /> */}
                <VK apiId={vkAppId}>
                    <Auth options={{
                        onAuth: user => {
                            this.onUserLoggedIn(user);
                        },
                    }} />
                </VK>
            </div>
        );
    }
}

AddCardFromVk.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(AddCardFromVk));
