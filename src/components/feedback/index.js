import React, { Component } from 'react';
import {
    MessageList,
    Input,
    Button
} from 'react-chat-elements';
import { withStyles } from '@material-ui/core/styles'
import 'react-chat-elements/dist/main.css';

const moment = require('moment');

const styles = theme => ({
	container : {
		display: 'flex',
		flexDirection: 'row',
		overflow: 'auto',
		position: 'absolute',
		top: '0',
		bottom: '60px',
		left: '0',
		right: '0',
	},
		
	rightPanel : {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
	},
	
	messageList : {
		flex: 1,
		minWidth: '140px',
	}
})

export class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: true,
            messageList: [],
        };
    }  

    createMessage(message) {
        let type = 'text';
        let status = 'read';
                
        return {
            position: 'right',
            forwarded: true,
            type: type,
            theme: 'white',
            view: 'list',
            title: null,
            text: message,
            status: status,
            date: new Date(),
            dateString: moment(new Date()).format('HH:mm'),
        };
            
    }

    addMessage = () => {
        let message = this.refs.input.state.value
        if (message) {
            var list = this.state.messageList;
        list.push(this.createMessage(message))
        this.refs.input.state.value = ''
        this.setState({
            messageList: list,
        });
        } 
    }

    render() {
        
		const { classes } = this.props
        return (
            <div className={classes.container}>
                <div
                    className={classes.rightPanel}>
                    <MessageList
                        className={classes.messageList}
                        lockable={true}
                        downButtonBadge={10}
                        dataSource={this.state.messageList} />

                    <Input
                        placeholder="Введите сообщение"
                        defaultValue=""
                        ref='input'
                        multiline={true}
                        // buttonsFloat='left'
                        onKeyPress={(e) => {
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
                        rightButtons={
                            <Button
                                text='Отправить'
                                onClick={this.addMessage} />
                        } />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(App);