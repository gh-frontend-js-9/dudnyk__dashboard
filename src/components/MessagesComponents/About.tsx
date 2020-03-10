import React, {Component, ReactElement} from 'react';

import { connect } from 'react-redux';
import IUserInfo from '../../interfaces/IUserInfo';
import { ICurrentThread } from '../../interfaces/IThreads'

import Gravatar from '../Gravatar';

interface IProps {
    allUsers: IUserInfo[],
    currentThread: ICurrentThread
}


const About = (props:IProps):ReactElement => {
    let interlocutor:IUserInfo = props.allUsers.find((el) => el._id === props.currentThread.interlocutor);
    console.log(interlocutor)
    return (
        <section className='about about_theme_dark'>
            {  props.allUsers.length ? (
                <div className='about__wrapper'>

                    <div className='about__main-block'>
                        <Gravatar email={interlocutor.email} type='about__avatar' size={90}/>
                        <span className='about__name'>{interlocutor.name}</span>
                        <span className='about__position'>{interlocutor.position}</span>
                        <p className='about__description'>{interlocutor.description}</p>
                    </div>

                    <div className='about__block'>
                        <span className='about__title'>Email</span>
                        <span className='about__value'>{interlocutor.email}</span>
                    </div>

                    <div className='about__block'>
                        <span className='about__title'>Phone</span>
                        <span className='about__value'>{interlocutor.phone}</span>
                    </div>

                    <div className='about__block'>
                        <span className='about__title'>Address</span>
                        <span className='about__value'>{interlocutor.address}</span>
                    </div>

                    <div className='about__block'>
                        <span className='about__title'>Organization</span>
                        <span className='about__value'>{interlocutor.organization}</span>
                    </div>
                </div>
                ) : ( 'loading...' )

            }
        </section>
    )
}

let mapStateToProps = (state:any) => {
    return {
        currentThread: state.currentThread
    }
}

export default connect(mapStateToProps, {})(About);