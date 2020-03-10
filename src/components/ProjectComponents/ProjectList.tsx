import React, {Component} from 'react';
import requestAPI from '../../requestAPI';
import Project from './Project';
import Loading from '../Loading';

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
    
    
    async componentDidMount() {
        
        try { 
            this.setState({
                ...this.state,
                isLoading: true
            })

            let resp = await requestAPI.getAllProjects(localStorage.token);
            this.setState({
                ...this.state, 
                projects: resp.data,
                isLoading: false
            })
        } catch(error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className='project-page__project-list'>
               
               {!this.state.isLoading 
                ?       
                    this.state.projects.map(el => {
                        return <Project {...el} key={el._id}/>
                    })

                :   <Loading size={3} />
                
                }

            </div>
        )
    }
}

export default ProjectList;