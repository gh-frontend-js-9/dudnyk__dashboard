import React, {Component} from 'react';
import '../assets/header/header.scss';

import { connect } from 'react-redux';
import { signOut, updateAllThreads } from '../redux/actions/actions'
import Modal from './Modal';
import AddProjectModal from './AddProjectModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/images/Logo.png';
import Gravatar from './Gravatar';

import IUserInfo from "../interfaces/IUserInfo";
import {IThread} from '../interfaces/IThreads'

interface IState {
    showModal: boolean
}

interface IProps { 
    me: IUserInfo,
    signOut: () => void,
    updateAllThreads: (data:IThread[]) => void
}

class Header extends Component<IProps, IState> {
    constructor(props:IProps) {
        super(props);
        this.state = {
            showModal: false
        }
    }
    
    handleAddClick = ():void => {
        this.setState({showModal: true})
    }

    callbackFunction = (childData:boolean):void => {
        this.setState({showModal: childData})
    }
    
    handleExitClick = ():void => {
        localStorage.token = '';
        this.props.signOut();
        this.props.updateAllThreads([]);
    }

    render() {
        return (
            <div className='header'>
                {this.state.showModal  
                    ?   <Modal title='New Project' parentCallback={this.callbackFunction}>
                            <AddProjectModal parentCallback={this.callbackFunction}/>      
                        </Modal> 
                    : ''}

                <img src={Logo} alt='Virtus' className='header__logo'/>
            
                <div className="header__menu">
                    <div className="header__add-btn" onClick={this.handleAddClick}>Add</div>
                    
                    <FontAwesomeIcon icon="search" className='header__bell'/>
                    <FontAwesomeIcon icon={['far', 'bell']} className='header__search'/>

                    <div className="header__user" onClick={this.handleExitClick}>
                        <Gravatar email={this.props.me.email} size={48} type='header__user-avatar'/>
                        <FontAwesomeIcon icon='chevron-down'/>
                    </div>
                </div>
            </div>
        )
    }
}


let mapStateToProps = (state:any):any => {
    return {
        me: state.user
    }
}

export default connect(mapStateToProps, { signOut, updateAllThreads })(Header);