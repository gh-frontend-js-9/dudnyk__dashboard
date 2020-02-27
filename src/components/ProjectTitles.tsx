import React, {Component} from 'react'
import ProjectCell from './ProjectCell'

class ProjectTitles extends Component{
    render() {
        return (
            <div className='project-page__header'>
                <ProjectCell cellType='project-page__titles'>
                    Project Title
                </ProjectCell>

                
                <ProjectCell cellType='project-page__titles'>
                    Value
                </ProjectCell>

                
                <ProjectCell cellType='project-page__titles'>
                    Deadline
                </ProjectCell>

                
                <ProjectCell cellType='project-page__titles'>
                    Time spent
                </ProjectCell>

                
                <ProjectCell cellType='project-page__titles'>
                    Progress
                </ProjectCell>

                
                <ProjectCell cellType='project-page__titles'>
                    Status
                </ProjectCell>

                
                <ProjectCell cellType='project-page__titles'>
                    Assigned to
                </ProjectCell>
            </div>
        )
    }
}

export default ProjectTitles