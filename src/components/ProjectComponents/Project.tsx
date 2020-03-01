import React, {Component} from 'react';

import ProjectCell from './ProjectCell';
import ProjectBox from './ProjectBox';
import Gravatar from '../Gravatar';


interface ProjectData {
    timeSpent?: number
    progress?: number
    status?: string
    _id?: string
    title?: string
    company?: string
    cost?: string
    deadline?: string
    
    assigned?: {
        position?: string,
        description?: string,
        phone?: string,
        address?: string,
        organization?: string,
        _id?: string,
        name?: string,
        email?: string
    }

    created_at?: string
    updated_at?: string
}

interface IState {

}

class Project extends Component<ProjectData, IState>{

    getDate(data:string):Date {
        return new Date(Date.parse(data));
    }

    render() {
        let months:string[] = [
            "January", "February", "March", "April", 
            "May", "June", "July", "August", 
            "September", "October", "November", "December"
        ];

        let {title, company, cost, deadline, created_at, timeSpent, progress, status, assigned} = this.props
        let deadlineDate:Date = this.getDate(deadline);
        let formatedDeadline:string = `${deadlineDate.getDay()} ${months[deadlineDate.getMonth()]} ${deadlineDate.getFullYear()}`;
        let daysleft:string = `${new Date(deadlineDate.getTime() - this.getDate(created_at).getTime()).getDay()} days left`;
        
        return (
            <div className={'project-page__item ' + 
                (progress === 100 ? 'project-page__item_done'
                            : progress === 0
                                ? 'project-page__item_not-started'
                                : 'project-page__item_in-progress')} >
            
                <ProjectCell cellType='project-page__cell'>
                    <ProjectBox title = {title} text = {company} />
                </ProjectCell>

                <ProjectCell cellType='project-page__cell'>
                    <span>{cost}</span>
                </ProjectCell>

                <ProjectCell cellType='project-page__cell'>
                    <ProjectBox title = {formatedDeadline} text = {daysleft} />
                </ProjectCell>
                
                <ProjectCell cellType='project-page__cell'>
                    <span>{`${timeSpent} hours`}</span>
                </ProjectCell>
                
                <ProjectCell cellType='project-page__cell'>
                    <div className='project-page__progress-container'>
                        <label htmlFor ="progress" className='project-page__progress-label'>{`${progress}%`}</label>
                        
                        <progress id='progress' value={progress} max="100" 
                            className={'project-page__progress ' + ( progress < 100 
                                ? 'project-page__progress_undone' 
                                : 'project-page__progress_done')}
                        ></progress>
                    </div>
                </ProjectCell>
                
                <ProjectCell cellType='project-page__cell'>
                    <span>{status}</span>
                </ProjectCell>
                
                <ProjectCell cellType='project-page__cell'>
                    <div className='project-page__assign-block'>
                        
                        {assigned !== null ? <Gravatar email={assigned.email} size={48} type='project-page__assign-block-avatar'/> : ''}
                        {assigned !== null ? <ProjectBox title = {assigned.name} text = {assigned.position} /> : ''}
                    </div>
                </ProjectCell>
                
                <ProjectCell cellType='project-page__cell'>
                    <div className='project-page__btn'>
                        <div className='project-page__btn-dot'></div>
                    </div>
                </ProjectCell>

            </div>
        )
    }
}

export default Project;