import React, {Component} from 'react';
import '../assets/sideBar/sideBar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SideBar extends Component {
    render() {
        return (
            <div className='side-bar'>
                <nav className='navigation'>
                    <FontAwesomeIcon icon='home' className='navigation__item'/>
                    
                    <FontAwesomeIcon icon='bars' className='navigation__item'/>
                    
                    <FontAwesomeIcon icon='chart-line' className='navigation__item'/>
                    
                    <FontAwesomeIcon icon='envelope' className='navigation__item'/>
                    
                    <FontAwesomeIcon icon='user-friends' className='navigation__item'/>                    
                </nav>
            </div>
        )
    }
}

export default SideBar;