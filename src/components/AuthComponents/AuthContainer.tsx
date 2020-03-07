import React, {Component} from 'react';
import Logo from '../../assets/images/Logo.png';

interface IProps {
    title: string;
}

class AuthContainer extends Component<IProps> {
    render() {
        return(
            <div className="auth auth_background_dark">
                <section className="auth__container">
                    <img src={Logo} alt="Logo" className="auth__logo"/>
                    <h1 className="auth__title">{this.props.title}</h1>
                    
                    <div className='auth__content'>
                        {this.props.children}
                    </div>

                </section>
            </div>
            
        )
    }
}

export default AuthContainer;