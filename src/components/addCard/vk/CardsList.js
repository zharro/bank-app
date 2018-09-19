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
        name: 'Сбербанк, Visa',
        shortNumber: '*5232',
        number: 7534673364213564,
        expiresAtYear: '2020',
        expiresAtMonth: '07',
        money: 500
    },
    {
        name: 'Сбербанк, Mastercard',
        shortNumber: '*3433',
        number: 3453532456432169,
        expiresAtYear: '2019',
        expiresAtMonth: '04',
        money: 234
    },
];

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

class VkCardsList extends React.Component {
    state = {
        checked: [],
    };

    handleToggle = card => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(card.shortNumber);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(card.shortNumber);
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
                                    key={card.shortNumber}
                                    role={undefined}
                                    dense
                                    button
                                    onClick={this.handleToggle(card)}
                                    className={classes.listItem}>
                                    <Checkbox
                                        checked={this.state.checked.indexOf(card.shortNumber) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                    <ListItemText primary={card.shortNumber} secondary={card.expiresAt} />
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

export default withStyles(styles)(VkCardsList);