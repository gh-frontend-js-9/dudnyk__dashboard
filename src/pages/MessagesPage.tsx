import React, {Component} from 'react';

import Threads from '../components/MessagesComponents/Threads';
import Messages from '../components/MessagesComponents/Messages';
import About from '../components/MessagesComponents/About';

import '../assets/messages/messages.scss';

import requestAPI from '../requestAPI';

import {IThread} from '../interfaces/IThreads';

interface IState {
    threads: IThread[]
}

interface IProps {

}

class MessagesPage extends Component<IProps, IState> {
    state:IState = {
        threads: []
    }

    async componentDidMount() {
        try {
            let resp:any = await requestAPI.getAllThreads();
            
            console.log(resp)
            
            this.setState({
                ...this.state,
                threads: resp.data
            })

        } catch (error) {
            console.log(error);
        }
        
        
    }

    render() {

        return (
            <div className='messages'>
                <Threads threads={this.state.threads}/>
                <Messages/>
                <About/>
            </div>
        )
        
    }
}

export default MessagesPage;