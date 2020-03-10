import React, {Component} from 'react';
import { connect } from "react-redux";

import { IMessage } from '../../interfaces/IMessages'
import Gravatar from '../Gravatar';

import {FullDate, getDate} from '../../functions/date'
import IUserInfo  from "../../interfaces/IUserInfo";

interface IProps {
    message: IMessage,
    me: IUserInfo 
}

interface IState {

}

class Message extends Component<IProps, IState> {
    render() {
        
        let date:Date = getDate(this.props.message.created_at);
        let isMe:boolean = this.props.me._id === this.props.message.user._id;

        return (
            <div className={'message ' + (isMe ? 'message_to-someone': '')}>
                <Gravatar email={isMe ? this.props.me.email : this.props.message.user.name} size={46} type='message__avatar'/>
                
                <div className='message__body'>{this.props.message.body}</div>

                <span className={'message__date ' + (isMe ? 'message__date_to-someone' : '') }>
                    {FullDate(date)}
                </span>
            </div>
        )
    }
}

let mapStateToProps= (state:any) => {
    return {
        me: state.user
    }
}
export default connect(mapStateToProps, {})(Message);