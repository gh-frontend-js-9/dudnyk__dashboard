import React, {Component} from 'react';
import {connect} from 'react-redux';

import requestAPI from '../../requestAPI';
import { IMessage, IResponseMessage } from '../../interfaces/IMessages';
import IUserInfo from '../../interfaces/IUserInfo';
import { ICurrentThread } from '../../interfaces/IThreads'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Message from './Message';

interface IProps {
    currentThread: ICurrentThread,
    userName: string
    allUsers: IUserInfo[]
}

interface IState {
    messages: IMessage[]
}


class Messages extends Component<IProps, IState> {
    chatContainer = React.createRef<HTMLDivElement>();
    
    state:IState = {
        messages: []
    }    

    async componentDidMount() {
        if(!!this.props.currentThread.id) {
            try {
                let resp:any = await requestAPI.getThreadMessages(this.props.currentThread.id, localStorage.token);
                this.setState({
                    ...this.state,
                    messages: resp.data
                });
            } catch (error) {
                console.log(error);
            }

        } else {
            console.log('No thread provided');
        }
    }

    async componentWillReceiveProps(nextProps) {
        if(!!nextProps.currentThread.id) {
            try {
                let resp:any = await requestAPI.getThreadMessages(nextProps.currentThread.id, localStorage.token);
                this.setState({
                    ...this.state,
                    messages: resp.data
                });
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log('No token Provided')
        }
    }
    

    componentDidUpdate() {
        if (this.chatContainer.current !== null) {
            this.chatContainer.current.scrollTop = this.chatContainer.current.scrollHeight;
        }
    }


    createMessage = (message:IResponseMessage, myName:string):IMessage => {
        return {
            _id: message._id,
            user: {
                _id: message.user,
                name: myName,
            },
            thread: message.thread,
            body: message.body,
            created_at: message.created_at,
        }
    }

    addMessage = (message:IMessage) => {
        this.setState({
            messages: [...this.state.messages, message]
        })
        var objDiv = document.getElementById("your_div");
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    handleEnterPress = async (event:React.KeyboardEvent<HTMLTextAreaElement>, id:string) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            try {
                let textareaValue:string = event.currentTarget.value;
                
                if (!textareaValue) {
                    throw new Error('textarea is empty');
                }

                event.currentTarget.value = '';
            
                let resp = await requestAPI.sendMessage(id, textareaValue, localStorage.token);
                let message:IMessage = this.createMessage(resp.data, this.props.userName);
                this.addMessage(message);

            } catch(error) {
                console.log(error);
            }
        }
    }

    render() {
        return (
            <section className='chat'>
                <div className='chat__container' ref={this.chatContainer}>
                    {
                        this.state.messages.map(el => {
                            return <Message message={el} key={el._id} />
                        })
                    }
                </div>
                
                <div className='chat__send-block'>
                    <textarea name="message" className='chat__textarea' 
                        placeholder='Write a message' 
                        onKeyPress={(event: React.KeyboardEvent<HTMLTextAreaElement>) => this.handleEnterPress(event, this.props.currentThread.id,)}>
                        {/* <FontAwesomeIcon icon='paperclip'/>         */}
                    </textarea>
                </div>
            </section>
        )
    }
}


let mapStateToProps = (state:any) =>  {
    return {
        currentThread: state.currentThread,
        userName: state.user.name
    }
}

export default connect(mapStateToProps, {})(Messages);