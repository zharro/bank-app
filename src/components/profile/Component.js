import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});


class PhoneCardsList extends React.Component {

    render() {
        const { classes, user } = this.props;
        return (
            <List component="nav">
                <ListItem >
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary={user.name} secondary={user.lastName} />
                </ListItem>
                <ListItem>
                <ListItemIcon>
                        <EmailIcon />
                    </ListItemIcon>
                    <ListItemText primary={user.email} />
                </ListItem>
                <ListItem>
                <ListItemIcon>
                        <PhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary={user.phone} />
                </ListItem>
                
            </List>
        );
    }
}

// VkCardsList.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(PhoneCardsList);