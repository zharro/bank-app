import React, { Component } from 'react';
import {
    MessageList,
    Input,
    Button
} from '../../chat';

const loremIpsum = require('lorem-ipsum');
const Identicon = require('identicon.js')
const moment = require('moment');

export class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: true,
            messageList: [],
        };
    }

    componentWillMount() {
        // setInterval(this.addMessage.bind(this), 3000);
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    token() {
        return (parseInt(Math.random() * 10 % 6));
    }

    photo(size) {
        return new Identicon('443212341234123', {
            margin: 0,
            size: size || 20,
        }).toString()
    }

    makeMessage(message) {
                const type = 'text'
                var status = 'read';

                return {
                    position: ('right'),
                    forwarded: true,
                    type: type,
                    theme: 'white',
                    view: 'list',
                    titleColor: '#335442',
                    text: message,
                    onLoad: () => {
                        console.log('Photo loaded');
                    },
                    status: status,
                    date: new Date(),
                    dateString: moment(new Date()).format('HH:mm'),
                }

    }

    addMessage = () => {
      if(this.refs.input.state.value){
        var list = this.state.messageList;
        list.push(this.makeMessage(this.refs.input.state.value));
        this.refs.input.clear();
        this.setState({
            messageList: list,
        });
      }
    }

    render() {
        var arr = [];
        for (var i = 0; i < 5; i++)
            arr.push(i);

        return (
            <div style={{
              width: '100%',
              position: 'absolute',
              bottom: '60px'
              }}>
                <div
                    className='right-panel'>
                    <MessageList
                        className='message-list'
                        lockable={true}
                        downButtonBadge={10}
                        dataSource={this.state.messageList} />
                  <Input
                        placeholder=""
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

export default App;