import React, {Component} from 'react';

import { connect } from 'react-redux';
import { updateAllThreads } from '../../redux/actions/actions' 

import requestAPI from '../../requestAPI';

import Gravatar from '../Gravatar';

import IUserInfo from '../../interfaces/IUserInfo';
import { IThread } from '../../interfaces/IThreads';

interface IState {
    activeId: string
}

interface IProps {
    allUsers: IUserInfo[],
    parentModalCallback: (isModal: boolean) => void,
    parentThreadCallback: () => void, 
    threads: IThread[],
    // myName:string,
    updateAllThreads: (threads: IThread[]) => void
}

class NewThreadModal extends Component<IProps, IState> {
    state:IState = {
        activeId: ''
    }

    handleClick= (id:string):void => {
        this.setState({
            activeId: id
        })
    }

    handleSubmit = async ():Promise<void> => {
        try {
            let resp = await requestAPI.createThread(this.state.activeId, localStorage.token);
            this.props.parentThreadCallback();

        } catch(error) {
            console.log(error);
            this.props.parentModalCallback(false);
        }
        this.props.parentModalCallback(false);
    } 

    render() {
        return (
            <div className='thread-modal'>
                <div className='thread-modal__container'>
                    {
                        this.props.allUsers.map(el => {
                            return (
                                    <div key={el._id} onClick={():void => this.handleClick(el._id)} 
                                    className={`thread-modal__user-block ${(this.state.activeId === el._id)
                                    ? 'thread-modal__user-block_active' : ''} `}>
                                    
                                    <Gravatar email={el.email} size={56} type='thread-modal__avatar'/>
                                    <span className='thread-modal__user-name'>{el.name}</span>
                                </div>
                                )
                        })
                    }
                </div>

                <button className='thread-modal__btn' onClick={this.handleSubmit} >Create</button>
            </div>
        )
    }
}

let mapStateToProps = (state:any) => {
    return {
        threads: state.threads,
        myName: state.user.name
    }
}

export default connect(mapStateToProps , { updateAllThreads })(NewThreadModal);