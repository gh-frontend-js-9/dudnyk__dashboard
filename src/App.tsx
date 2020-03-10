import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux';

import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import GeneralPage from './pages/GeneralPage';

import {signIn, signOut} from './redux/actions/actions';

import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faChevronDown, faHome, faBars, faChartLine, faEnvelope, faUserFriends, faPaperclip, faSync } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faBell, faChevronDown, faHome, faBars, faChartLine, faEnvelope, faUserFriends, faPaperclip, faSync);

interface IProps {
  isLogged: boolean;
}

class App extends Component<IProps> {
  
  render() {

    return (
      <Router>

        <Switch>
          
          <Route path="/logIn" component= {LogInPage} />
          <Route path="/signUp" component= {SignUpPage} />
          <Route path="/resetPassword" component= {ResetPasswordPage} />
          <Route path="/" component={GeneralPage} />
          <Route path="*" component={() => '404 Not Found'}></Route>    
        </Switch>

        { 
          (this.props.isLogged) 
          ? <Redirect to="/messages" /> 
          : <Redirect to='/logIn' />
        }
      
      </Router>
    )
  }
}

let mapStateToProps = (state:any) => {
  return {
    isLogged: state.isLogged
  }
}
export default connect(mapStateToProps, { signIn, signOut })(App);
