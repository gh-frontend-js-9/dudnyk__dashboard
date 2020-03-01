import React, {Component} from 'react';

interface Box {
    title: string,
    text: string
}

class ProjectBox extends Component<Box> {
    constructor(props:Box) {
        super(props);
        this.state = {}
    }

    render() {
        let { title, text } = this.props; 
        
        return (
            <div className='project-page__box'>
                <span >{title}</span>
                <span className='project-page__subtext'>{text}</span>
            </div>
        )
    }
}

export default ProjectBox;