import React, {Component} from'react';
import ProjectTitles from '../components/ProjectComponents/ProjectTitles';
import ProjectList from '../components/ProjectComponents/ProjectList';

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