import React, {Component} from 'react';
import requestAPI from '../../requestAPI';
import Project from './Project';

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
    projects?: ProjectData[]
    isLoading?: boolean 
}

interface IProps {

}

class ProjectList extends Component<IProps, IState> {
    constructor(props:IProps) {
        super(props);
        this.state = {
            projects: [],
            isLoading: false
        }    
    }
    
    
    componentDidMount() {
        
        requestAPI.getAllProjects(localStorage.token)
        .then((res) => {
            console.log(res)
            this.setState({ 
                projects: res,
                isLoading: false
            }) 
        })
    }

    render() {
        return (
            <div className='project-page__project-list'>
               
               {   
                    this.state.projects.map(el => {
                        return <Project {...el} key={el._id}/>
                    })
                }

            </div>
        )
    }
}

export default ProjectList;