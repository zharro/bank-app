import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import Form from '../../common/Form';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class AddCardFromPhone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
    };
  }

  render() {
    const { classes } = this.props;
    const { number } = this.state;

    return (
      <Form >
          <TextField
            id="number"
            name="number"
            label="Номер телефона"
            type="number"
            className={classes.textField}
            margin="normal"
            value={number}
          />
        <Button component={Link} to="/addCard/phone/list"
          variant="contained" color="primary" className={classes.addButton}>
          Поиск
        </Button>
      </Form>
    );
  }
}

AddCardFromPhone.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddCardFromPhone);
