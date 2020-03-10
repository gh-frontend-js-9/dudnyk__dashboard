import React from 'react'

import '../assets/loading.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
    size?: number
}

function Loading(props:IProps) {
    return (
        <FontAwesomeIcon icon={['fas', 'sync']} spin 
        style={{fontSize: `${props.size}em`}} className='loading'/>
    )
}

export default Loading;