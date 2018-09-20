import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import Form from '../common/Form'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'


const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column'
    },
    formControl: {
        minHeight: '60px'
    },
});


class PhoneCardsList extends React.Component {

    handleChange = (e) => {
        this.props.onChange({ name: e.target.name, value: e.target.checked })
    }

    render() {
        const { classes, user } = this.props;
        return (
            <Form className={classes.root}>
                <FormControl className={classes.formControl}>
                    <FormControlLabel
                        control={
                            <Switch
                                name='push'

                                checked={user.push}
                                onChange={this.handleChange}
                                value="push"
                                color={'primary'}
                            />
                        }
                        label="PUSH-уведомления"
                    />
                </FormControl>
                <FormControl className={classes.formControl}>

                    <FormControlLabel
                        control={
                            <Switch
                                name='sms'

                                checked={user.sms}
                                onChange={this.handleChange}
                                value="sms"
                                color={'primary'}
                            />
                        }
                        label="SMS-уведомления"
                    />
                </FormControl>
                <FormControl className={classes.formControl}>

                    <FormControlLabel
                        control={
                            <Switch
                                name='internetOptions'
                                checked={user.internetOptions}
                                onChange={this.handleChange}
                                value="internetOptions"
                                color={'primary'}
                            />
                        }
                        label="Операции в интернете"
                    />
                </FormControl>
            </Form>
        );
    }
}

// VkCardsList.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(PhoneCardsList);