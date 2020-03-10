import React, {Component} from 'react';

import { connect } from 'react-redux'
import { updateAllThreads } from '../../redux/actions/actions';

import { IThread } from '../../interfaces/IThreads';
import IUserInfo from '../../interfaces/IUserInfo';
import Thread from './Thread';

import requestAPI from '../../requestAPI';

interface IState {
}

interface IProps {
    allUsers: IUserInfo[],
    type: string,
    parentCallback: (isModal: boolean) => void,
    threads: IThread[]
    updateAllThreads: (data:any) => void
}


class Threads extends Component<IProps, IState> {

    async componentDidMount() {
        try {

            let resp:any = await requestAPI.getAllThreads(localStorage.token);
            this.props.updateAllThreads(resp.data);

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <section className={'threads-block '+ this.props.type}>
                <div className='threads-block__container'>
                {
                    this.props.threads.length ?
                    this.props.threads.map(thread => {
                        return <Thread thread = {thread}  key={thread._id} allUsers={this.props.allUsers}/>
                    }) : <p className='threads-block__empty-thread'>No threads yet)</p>
                }
                </div>

                <div className='threads-block__btn-container'>
                    <button className='threads-block__btn' onClick={():void => {this.props.parentCallback(true)}}>
                        New conversation
                    </button>   
                </div>
            </section>
        )
    }
}

let mapStateToProps= (state:any) => {
    return {
        threads: state.threads
    }
} 

export default connect(mapStateToProps, { updateAllThreads })(Threads);