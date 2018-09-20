import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Alert from '../../../common/Alert'

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

const phoneCards = [
    {
        name: 'Мегафон Банк',
        shortNumber: 'Mastercard, *3245',
        number: 2434243323453245,
        money: 5433,
        expiresAtYear: '2019',
        expiresAtMonth: '04'
    },
    {
        name: 'Мегафон Банк',
        shortNumber: 'Visa, *5232',
        number: 5124432234535232,
        money: 14770,
        expiresAtYear: '2020',
        expiresAtMonth: '07'
    }
];

class PhoneCardsList extends React.Component {
    state = {
        checked: '',
        open: false
    };

    handleToggle = number => () => {
        this.setState({
            checked: this.state.checked === number ? '' : number,
        });
    };

    addCard = () => {
        let card = phoneCards.find(c => c.number === this.state.checked)
        this.props.addCard(card)
    }

    handleSubmit = () => {
        this.setState({ open: true })
      }

    render() {
        const { classes, cards } = this.props;
        return (
            <Grid container direction='column' alignItems='stretch'>
                <Grid item>
                    <Grid container direction='column'>
                        <List>
                            {phoneCards.map(card => {
                                let isDisabled = cards && !!cards.find(c => c.number === card.number)
                                return (
                                    <ListItem
                                        key={card.number}
                                        role={undefined}
                                        dense
                                        button
                                        onClick={isDisabled ? null : this.handleToggle(card.number)}
                                        className={classes.listItem}>
                                        <Checkbox
                                            checked={this.state.checked === card.number}
                                            tabIndex={-1}
                                            disableRipple
                                            disabled={isDisabled}
                                            color="primary"
                                        />
                                        <ListItemText primary={card.name} secondary={card.shortNumber} />
                                        { isDisabled && 
                                               <Typography>
                                                   Добавлено
                                               </Typography>
                                        }
                                    </ListItem>
                                )
                            }
                            )
                            }
                        </List>
                        <Button disabled={!this.state.checked} onClick={this.handleSubmit} color="primary" variant="contained">
                            Привязать
                        </Button>
                        <Alert text={'Карта успешно добавлена'} open={this.state.open} onClose={this.addCard} />
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(PhoneCardsList);