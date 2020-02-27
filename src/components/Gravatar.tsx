import React, {Component} from 'react';
import {Md5} from 'md5-typescript';

interface IProps {
    email: string
    size?: number
    type?: string
}

class Gravatar extends Component<IProps> {
    
    getHash(email:string):string {
        return Md5.init(email);
    }

    render() {
        let {email, size, type} = this.props;

        return (
            <img src={"https://www.gravatar.com/avatar/" + this.getHash(email) + "?d=robohash&s=" + size}
            className={type} 
            alt="gravatar"/>
        )
    }
}

export default Gravatar;