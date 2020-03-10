import React, { Component } from 'react';
import AuthContainer from '../components/AuthComponents/AuthContainer';
import '../assets/auth/auth.scss';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { signIn, assignUser } from '../redux/actions/actions';
import requestAPI from '../requestAPI';

import {validateEmail, validateLength, validatePassword} from '../functions/validation';

import IUserInfo from '../interfaces/IUserInfo';

interface IState {
    email: string,
    password: string,
    name: string,
    isEmailError: boolean,
    isPasswordError: boolean,
    isNameError: boolean
    submitError: string,
    isBtnDisabled: boolean
} 

interface IProps {
    signIn: () => void,
    assignUser: (data:IUserInfo) => void
}

class SignUpPage extends Component<IProps, IState> {
    state:IState = {
        email: '',
        password: '',
        name: '',
        isEmailError: false,
        isPasswordError: false,
        isNameError: false,
        submitError: '',
        isBtnDisabled: true
    }

    handleChange = (e):void =>  {
        let { name, value } = e.target;
        switch (name) {
            case 'email':
                this.setState({
                    ...this.state,
                    [name]: value,
                    isEmailError: validateEmail(value),
                    submitError: '',
                    isBtnDisabled: (validateEmail(value) || this.state.isPasswordError || this.state.isNameError 
                    || !value || !this.state.password || !this.state.name)
                });
                break;
            case 'password':
                this.setState({
                    ...this.state,
                    [name]: value,
                    isPasswordError: validatePassword(value),
                    submitError: '',
                    isBtnDisabled: (this.state.isEmailError || validatePassword(value) || this.state.isNameError 
                    || !this.state.email || !value || !this.state.name)

                });
                break;
            case 'name':
                this.setState({
                    ...this.state,
                    [name]: value,
                    isNameError: !validateLength(value, 5),
                    submitError: '',
                    isBtnDisabled: (this.state.isEmailError ||  this.state.isPasswordError || !validateLength(value, 5) 
                    || !this.state.email || !this.state.password || !value)
                });
                break;
        }
    }
    
    async handleSubmit(event):Promise<void> {
        event.preventDefault();
        
        try {
            let resp:any = await requestAPI.signUp(this.state.email, this.state.password, this.state.name, localStorage.token);
                this.props.signIn();
                let data:IUserInfo  = resp.data;
                this.props.assignUser(data);
        } catch(error) {
            if (error.response) {
                let errors:string = '';
                
                for (let key in error.response.data.errors) {
                    errors +=  error.response.data.errors[key] + '. ';
                }

                this.setState({
                    ...this.state,
                    submitError: errors
                });    

            } else {
                this.setState({
                    ...this.state,
                    submitError: 'Error occurred.  Try again'
                });
            }
        }
    }

    render() {
        let { isEmailError, isPasswordError, submitError, isNameError,isBtnDisabled} = this.state;
        return(
            <AuthContainer title="Sign Up">
                <Link to="/logIn" className="auth__link">Existin member?</Link>
                
                <form className="auth__form" method='POST' action='#'>

                    <div>
                        <input type="email" placeholder='Email' name="email" 
                            className={"auth__input " + (isEmailError ? 'auth__input_error' : '')} 
                            onChange={this.handleChange}/>
                        { isEmailError 
                        ? <p style={{color:'red', fontSize: '0.8em'}}>Email must contain '@' and has more than 6 letters</p> 
                        : '' }
                    </div>


                    <div>
                        <input type="password" placeholder='Password' name="password" 
                            className={"auth__input " + (isPasswordError ? 'auth__input_error' : '')} 
                            onChange={this.handleChange}/>
                        { isPasswordError 
                        ? <p style={{color:'red', fontSize: '0.8em'}}>Password must contain more than 7 letters</p> 
                        : ''}
                    </div>


                    <div>
                        <input type="text" placeholder="Name" name="name"
                            className={"auth__input " + (isNameError ? 'auth__input_error' : '')} 
                            onChange={this.handleChange} />
                        { isNameError 
                        ? <p style={{color:'red', fontSize: '0.8em'}}>Name must contain more than 5 letters</p> 
                        : ''}
                    </div>

                    <div style={{display:'flex', 'flexDirection': 'column', }}>
                        <button className={"auth__btn " + ((isBtnDisabled) ? 'auth__btn_disabled' : '')} 
                            // disabled = {isBtnDisabled}
                            onClick= {(e) => this.handleSubmit(e)}>
                            Sign up
                        </button>
                        { submitError 
                        ? <p style={{color:'red', fontSize: '0.8em', textAlign:'center'}}>{submitError}</p> 
                        : ''}
                    </div>


                
                </form>

            </AuthContainer>
        )
    }
}


export default connect(null, {signIn, assignUser})(SignUpPage);