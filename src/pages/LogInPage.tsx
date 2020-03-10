import React, {Component} from 'react';
import AuthContainer from '../components/AuthComponents/AuthContainer';
import '../assets/auth/auth.scss';
import { Link } from 'react-router-dom';
import requestAPI from '../requestAPI';

import { connect } from 'react-redux';
import { signIn, assignUser } from '../redux/actions/actions';


import IUserInfo from '../interfaces/IUserInfo';

import { validateEmail, validatePassword } from '../functions/validation';
interface IState {
    email: string,
    password: string,
    isEmailError: boolean,
    isPasswordError: boolean,
    submitError: string,
    isBtnDisabled:boolean
} 

interface IProps {
    signIn: () => void,
    assignUser: (data:Object) => void
}

class LogInPage extends Component<IProps,IState> {
    state:IState= {
        email: '',
        password: '',
        isEmailError: false,
        isPasswordError: false,
        submitError: '',
        isBtnDisabled: true
    }

    async componentDidMount() {
        console.log(localStorage.token);
        try {
            
            let resp:any = await requestAPI.getCurrentUser(localStorage.token);
            if (resp.status === 200) {
                this.props.signIn();
                let data:IUserInfo  = resp.data;
                this.props.assignUser(data);

            }
        } catch(error) {
            console.log(error);
        }
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
                    isBtnDisabled: (validateEmail(value) || this.state.isPasswordError || !value || !this.state.password)
                });
                break;
            case 'password':
                this.setState({
                    ...this.state,
                    [name]: value,
                    isPasswordError: validatePassword(value),
                    submitError: '',
                    isBtnDisabled: (this.state.isEmailError || validatePassword(value) || !this.state.email || !value)
                })
                break;
        }
    }

    async handleSubmit(event, email:string, password:string):Promise<void> {
        event.preventDefault();
        
        try {
            
            let resp:any = await requestAPI.logIn(email, password, localStorage.token);
            if (resp.status === 200) {
                let token:string = resp.headers['x-auth-token']; 
                localStorage.token = token;

                this.props.signIn();
                let data:IUserInfo  = resp.data;
                this.props.assignUser(data);

            }

        } catch(error) {
            if (error.response) {
                
                this.setState({
                    ...this.state,
                    submitError: error.response.data.message 
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
        let { isEmailError, isPasswordError, submitError, isBtnDisabled} = this.state;
        return(
            <AuthContainer title="Log In">
                <Link to="/signUp" className="auth__link">Not a member?</Link>
                
                <form className="auth__form" action='#' method="POST">

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
                        ? <p style={{color:'red', fontSize: '0.8em'}}>Password must contain more than 5 letters</p> 
                        : ''}
                    </div>


                    <div style={{display:'flex', 'flexDirection': 'column', }}>
                        <button className={"auth__btn " + ((isBtnDisabled) ? 'auth__btn_disabled' : '')} 
                            disabled = {isBtnDisabled}
                            onClick= {(e) => this.handleSubmit(e, this.state.email, this.state.password)}>
                            Log in
                        </button>
                        { submitError 
                        ? <p style={{color:'red', fontSize: '0.8em', textAlign:'center'}}>{submitError}</p> 
                        : ''}
                    </div>

                </form>

                {/* <Link to="/resetPassword"  className="auth__link auth__link_position_center">Forgot password?</Link> */}
            </AuthContainer>
        )
    }
}

export default connect(null, { signIn, assignUser })(LogInPage);