import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import {cards} from '../../storage'


const styles = theme => ({
    formControl: {
      margin: theme.spacing.unit,
    },
    select: {
      paddingTop: '10px',
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    }
  });

class CardSelect extends React.Component{
    
    render() {
        const {onSelect, cardName, classes, disabled} = this.props
        return (
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="card">Выберите карту</InputLabel>
            <Select
                disabled={disabled}
                className={classes.select}
                value={cardName}
                onChange={onSelect}
                inputProps={{
                    name: 'card',
                    id: 'card',
                }}
                >
                
                { cards.map(c => <MenuItem key={c.name}     value={c.name}>{c.number}</MenuItem>)}
                </Select>
            </FormControl>
        )
    }
}
export default withStyles(styles)(CardSelect)