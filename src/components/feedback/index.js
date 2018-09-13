import React, { Component } from 'react';
import { MessageList, Input, Button } from 'react-chat-elements';
import { withStyles } from '@material-ui/core/styles';
import 'react-chat-elements/dist/main.css';
import Grid from '@material-ui/core/Grid';

const moment = require('moment');

const styles = theme => ({
  container: {
    flexGrow: 1,
    flexWrap: 'nowrap',
  },
  messageListContainer: {
    justifyContent: 'flex-end',

    overflow: 'auto',
    height: '67vh',
  },
  messageList: {
    flexDirection: 'column-reverse',
    paddingBottom: theme.spacing.unit,
  },
});

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
      messageList: [],
    };
  }

  createMessage(message) {
    return {
      position: 'right',
      type: 'text',
      theme: 'white',
      view: 'list',
      text: message,
      date: new Date(),
      dateString: moment(new Date()).format('HH:mm'),
    };
  }

  addMessage = () => {
    let message = this.refs.input.state.value;
    if (message) {
      var list = this.state.messageList;
      list.push(this.createMessage(message));
      this.refs.input.state.value = '';
      this.setState({
        messageList: list,
      });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        className={classes.container}
        direction="column-reverse"
        alignItems="stretch"
        justify="flex-start"
      >
        <Grid item>
          <Input
            className={classes.input}
            placeholder="Введите сообщение"
            defaultValue=""
            ref="input"
            multiline={true}
            // buttonsFloat='left'
            onKeyPress={e => {
              if (e.shiftKey && e.charCode === 13) {
                return true;
              }
              if (e.charCode === 13) {
                this.refs.input.clear();
                this.addMessage();
                e.preventDefault();
                return false;
              }
            }}
            rightButtons={<Button text="Отправить" onClick={this.addMessage} />}
          />
        </Grid>
        <Grid container className={classes.messageListContainer}>
          <MessageList
            className={classes.messageList}
            lockable={true}
            downButtonBadge={10}
            dataSource={this.state.messageList}
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
