import React, {Component} from 'react';

import { IThread } from '../../interfaces/IThreads';
import Thread from './Thread';
interface IState {
    
}

interface IProps {
    threads: IThread[]
}


class Threads extends Component<IProps, IState> {
    render() {
        return (
            <div className='threads-block'>
                <div className='threads-block__container'>
                {
                    this.props.threads.map(thread => {
                        return <Thread thread = {thread} key={thread._id}/>
                    })
                }
                </div>

                <div className='threads-block__btn-container'>
                    <button className='threads-block__btn'>New conversation</button>   
                </div>
            </div>
        )
    }
}


export default Threads