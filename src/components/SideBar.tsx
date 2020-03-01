import React, {Component} from 'react';
import '../assets/sideBar/sideBar.scss';
// import { NavLink } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideBarLink from './SideBarLink';

class SideBar extends Component {
    render() {
        return (
            <div className='side-bar'>
                <nav className='navigation'>

                  <SideBarLink to="/home" icon="home"/>  
                  
                  <SideBarLink to="/projects" icon="bars"/>  
                  
                  <SideBarLink to="/chart" icon="chart-line"/>  
                  
                  <SideBarLink to="/messages" icon="envelope"/>  
                  
                  <SideBarLink to="/friends" icon="user-friends"/>  
                  
                </nav>
            </div>
        )
    }
}

export default SideBar;