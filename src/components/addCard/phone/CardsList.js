import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import CardIcon from '@material-ui/icons/CreditCard';
import List from '@material-ui/core/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const cards = [
    {
        id: 'Mastercard ****3245',
        expiresAt: '04/2019',
        icon: <CardIcon />,
    },
    {
        id: 'Visa ****5232',
        expiresAt: '07/2020',
        icon: <CardIcon />,
    },
    {
        id: 'Mastercard ****3433',
        expiresAt: '04/2023',
        icon: <CardIcon />,
    },
];

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

class PhoneCardsList extends React.Component {
    state = {
        checked: [],
    };

    handleToggle = card => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(card.id);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(card.id);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <Grid container direction='column' alignItems='center'>
                <Grid item>
                    <Grid container direction='column'>
                        <List>
                            {cards.map(card => (
                                <ListItem
                                    key={card.id}
                                    role={undefined}
                                    dense
                                    button
                                    onClick={this.handleToggle(card)}
                                    className={classes.listItem}>
                                    <Checkbox
                                        checked={this.state.checked.indexOf(card.id) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                    <ListItemText primary={card.id} secondary={card.expiresAt} />
                                    <ListItemSecondaryAction>
                                        <IconButton aria-label="Comments">
                                            <CommentIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))
                            }
                        </List>
                        <Button disabled={this.state.checked.length === 0} component={Link} to="/home" color="primary" variant="contained">
                            Привязать
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

// VkCardsList.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(PhoneCardsList);