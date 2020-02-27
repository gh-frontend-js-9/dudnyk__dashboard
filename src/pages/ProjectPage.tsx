import React, {Component} from'react';
import ProjectTitles from '../components/ProjectTitles';
import ProjectList from '../components/ProjectList';

class ProjectPage extends Component {
    
    render() {
        return (
            <div className='project-page'>
                
                <ProjectTitles/>
                <ProjectList/>

            </div>
        
        )
    }
}


export default ProjectPage;