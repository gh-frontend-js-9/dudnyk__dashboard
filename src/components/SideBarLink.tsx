import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IProps {
    to: string;
    icon: IconProp;
}

const SideBarLink = (props: IProps) =>  {
    return (
        <NavLink  to={props.to} activeClassName="navigation__item_active" className='navigation__item'>
            <FontAwesomeIcon icon={props.icon}/>
        </NavLink >
    )
}

export default SideBarLink;