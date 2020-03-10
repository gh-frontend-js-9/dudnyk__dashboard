import React, {Component} from 'react';

import {connect} from 'react-redux';
import { setCurrentThread } from '../../redux/actions/actions';

import Gravatar from '../Gravatar';
import { IThread, IUserInfo as IUser} from '../../interfaces/IThreads';
import IUserInfo from '../../interfaces/IUserInfo';
import { ICurrentThread } from '../../interfaces/IThreads'
import { getDate, DMDate } from '../../functions/date';

interface IState {

}

interface IProps {
    thread: IThread,
    user: IUser,
    currentThread: ICurrentThread,
    allUsers: IUserInfo[]
    setCurrentThread: (id:string, sender:string) => void;
}

class Thread extends Component<IProps, IState> {
    getSender = (myId:string, users:IUser[]):IUser => {
        return users.find((el) => el._id !== myId) || users[0]
    }

    handleThreadClick = (id:string, senderId:string):void => {
        this.props.setCurrentThread(id, senderId);
    }

    render() {

        let sender:IUser = this.getSender(this.props.user._id, this.props.thread.users)
        let date:string = this.props.thread.updated_at; 
        let isActive:boolean = this.props.currentThread.id === this.props.thread._id;
        let senderData = this.props.allUsers.find(el => el._id === sender._id) 

        return (
        
            <div className={'thread thread_pd_10 ' + (isActive ? 'thread_active' : '') } 
                onClick={():void => this.handleThreadClick(this.props.thread._id, sender._id)}>
               { this.props.allUsers.length ? 
                <>
                    <div className='thread__header'>
                        <div className='thread__user'>
                            <Gravatar email={senderData.email} size={40} type='thread__user-photo'/>
                            <span className='thread__name'>{sender.name}</span>
                        </div>

                        <p className='thread__date thread__date_viewed'>{DMDate(getDate(date))}</p>
                    </div>

                    <div className='thread__body'>
                        <p className='thread__message'>
                            {this.props.thread.message ? this.props.thread.message.body : 'No messages yet'}
                        </p>
                    </div>
                </>
                : ''
                }

            </div>
            
        )
    }
}

let mapStateToProps = (state:any):any => {
    return {
        user: state.user,
        currentThread: state.currentThread
        
    }
}

export default connect(mapStateToProps, { setCurrentThread })(Thread);