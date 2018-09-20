import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import { SelectValidator } from 'react-material-ui-form-validator';


const styles = theme => ({
    formControl: {
      margin: theme.spacing.unit,
      minHeight: '70px'
    },
    select: {
      paddingTop: '10px',
    //   marginLeft: theme.spacing.unit,
    //   marginRight: theme.spacing.unit
    }
  });

class CardSelect extends React.Component{
    render() {
        const {onSelect, name, cardName, classes, disabled,cards} = this.props
        return (
            <FormControl className={classes.formControl}>
            <SelectValidator
            label='Выберите карту'
                name={name || 'card'}
                disabled={disabled}
                className={classes.select}
                value={cardName}
                onChange={onSelect}
                inputProps={{
                    name: 'card',
                    id: 'card',
                }}
                validators={['required']}
                            errorMessages={['Обязательно']}
                >
                
                { cards.map(c => <MenuItem key={c.number} value={c.number}>{c.name + ', ' + c.shortNumber}</MenuItem>)}
                </SelectValidator>
            </FormControl>
        )
    }
}
export default withStyles(styles)(CardSelect)