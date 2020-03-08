import React, {Component} from 'react';

import {connect} from 'react-redux'
import Gravatar from '../Gravatar';

import { IThread, IUserInfo } from '../../interfaces/IThreads';
import {getDate, YMDate} from '../../functions/date';
interface IState {

}

interface IProps {
    thread: IThread,
    user: IUserInfo
}

class Thread extends Component<IProps, IState> {
    getSenderId = (myId:string, users:IUserInfo[]):IUserInfo => {
        return users.find((el) => el._id !== myId) || users[0]
    }

    render() {
        
        let sender:IUserInfo =  this.getSenderId(this.props.user._id, this.props.thread.users)
        let date:string = this.props.thread.updated_at; 
        
        return (
            <div className='thread thread_pd_10'>
                <div className='thread__header'>
                    <div className='thread__user'>
                        <Gravatar email={sender._id} size={40} type='thread__user-photo'/>
                        <span className='thread__name'>{sender.name}</span>
                    </div>
                    <p className='thread__date thread__date_viewed'>{YMDate(getDate(date))}</p>
                </div>

                <div className='thread__body'>
                    <p className='thread__message'>
                        {this.props.thread.message ? this.props.thread.message.body : 'No messages yet'}
                    </p>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state:any):any => {
    return {user: state.user}
}

export default connect(mapStateToProps, {})(Thread);