import React, {Component} from 'react';
import AuthContainer from '../components/AuthComponents/AuthContainer';
import '../assets/auth/auth.scss';
import {Link} from 'react-router-dom';

import requestAPI from '../requestAPI';

interface IState {
    email: string,
    password: string,
    confPassword: string
} 
interface IProps {

}

class ResetPasswordPage extends Component<IProps, IState> {
    state:IState = {
        email: '',
        password: '',
        confPassword: ''
    }

    handleChange = (e):void =>  {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        }); 
    }

    async handleSubmit(event:React.MouseEvent<Element, MouseEvent>):Promise<void>  {
        event.preventDefault();
        try {
            let resp = await requestAPI.resetPassword(this.state.email, this.state.password, this.state.confPassword, localStorage.token);
            
            let data = resp.data;
            console.log(data);

        }catch (error) {
            console.log(error);
        }  
    }
    
    render() {
        return(
            <AuthContainer title="Reset Password">
                <Link to="/signUp" className="auth__link">Not a member?</Link>
                <div className="auth__form">
                    
                    <input type="email" placeholder='Email' className="auth__input"
                        name="email" onChange={this.handleChange}/>
                    
                    <input type="password" placeholder='Password' className="auth__input"
                        name="password" onChange={this.handleChange}/>
                    
                    <input type="password" placeholder='Confirmation Password' className="auth__input" 
                        name="confPassword" onChange={this.handleChange} />

                    <button className="auth__btn" onClick={(e:React.MouseEvent<Element, MouseEvent>) => this.handleSubmit(e) }>Log in</button>
                </div>
            </AuthContainer>
        )
    }
}

export default ResetPasswordPage;