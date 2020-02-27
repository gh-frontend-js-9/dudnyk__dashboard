import React, {Component} from 'react';
import './assets/style.scss'

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

      <div className='app'>
        <Header/>
        
        <div className='app__content'>
          <SideBar/>  
          <ProjectPage />
        </div>
        
      </div>
    )
  }

}

export default App;
