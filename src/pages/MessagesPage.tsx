import React, {Component} from 'react';
import {connect} from 'react-redux';

import Threads from '../components/MessagesComponents/Threads';
import Messages from '../components/MessagesComponents/Messages';
import About from '../components/MessagesComponents/About';
import Modal from '../components/Modal';
import NewThreadModal from '../components/MessagesComponents/NewThreadModal';


import '../assets/messages/messages.scss';

import requestAPI from '../requestAPI';

import IUserInfo from '../interfaces/IUserInfo'
import { ICurrentThread } from '../interfaces/IThreads';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

interface IState {
    allUsers: IUserInfo[],
    isModal: boolean
}

interface IProps {
    currentThread: ICurrentThread
}

class MessagesPage extends Component<IProps, IState> {
    state:IState = {
        allUsers: [],
        isModal: false
    }

    async componentDidMount() {
        this.getAllUsers();
    }
    
    getAllUsers= async () => {
        try {
            let resp = await requestAPI.getAllUsers(localStorage.token);
            
            this.setState({
                allUsers: resp.data
            })
        }catch(error) {
            console.log(error);
        }
    }
    
    callbackFunction = (childData:boolean):void => {
        this.setState({
            ...this.state,
            isModal: childData
        })
    }

    render() {
        let  isCurrentThread:boolean = (!!this.props.currentThread.id && !!this.props.currentThread.interlocutor);
        return (
            <div className='messages'>
                <Threads allUsers={this.state.allUsers} 
                type={isCurrentThread ? 'threads-block_normal-width' : 'threads-block_full-width'}
                parentCallback={this.callbackFunction}/>  
                
                {isCurrentThread ? <Messages allUsers={this.state.allUsers} /> : ''}
                
                {isCurrentThread ? <About allUsers={this.state.allUsers} /> : ''}
                
                {this.state.isModal ? 
                    (
                        <Modal title='Create new thread' parentCallback={this.callbackFunction}>
                            <NewThreadModal allUsers={this.state.allUsers} 
                                parentModalCallback={this.callbackFunction}
                                parentThreadCallback={this.getAllUsers}
                                />
                        </Modal>
                    ) : ''}
            </div>
        )
        
    }
}

let mapStateToProps = (state:any) => {
    return {
        currentThread: state.currentThread
    }
}

export default connect(mapStateToProps, {})(MessagesPage);