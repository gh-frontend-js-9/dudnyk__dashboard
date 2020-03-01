import React, {Component} from 'react';
import './assets/style.scss'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header';
import SideBar from './components/SideBar';
import ProjectPage from './pages/ProjectPage';

import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faChevronDown, faHome, faBars, faChartLine, faEnvelope, faUserFriends } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch, faBell, faChevronDown, faHome, faBars, faChartLine, faEnvelope, faUserFriends);

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          
          <Switch>
          
            <Route path="/logIn"></Route>

            <Route path="/signUp"></Route>

            <Route path="/resetpassword"></Route>

            <Route path="/">
              <Header/>
              
              <div className='app__content'>
                <SideBar/>  
                
                <Switch>
                  <Route path="/home"> </Route>
                  
                  <Route path="/projects" component= {ProjectPage}/>

                  <Route path="/chart"> </Route>

                  <Route path="/messages"> </Route>

                  <Route path="/friends"> </Route>

                </Switch>
              </div>

            </Route>

          </Switch>
        
        </div>
      </Router>
    )
  }
}

export default App;
