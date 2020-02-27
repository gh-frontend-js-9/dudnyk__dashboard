import React, {Component} from 'react';
import requestAPI from '../requestAPI';

interface IProps {

}

interface IProps {
    parentCallback: (arg0: boolean) => void;
}

interface IState {
    title: string;
    company: string;
    cost: number;
    deadline: string;
    assigned: string;
}

class AddProjectModel extends Component<IProps, IState> {
    state = {
        title: '',
        company: '',
        cost: 0,
        deadline: '',
        assigned: '',
    }

    addProject = async (e:any):Promise<void> => {
        e.preventDefault();
        let response:Object = await requestAPI.addProject(this.state);
        if (Object.keys(response).length === 0) {
        }
        this.props.parentCallback(false);
        
    }

    handleChange = (e):void =>  {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        }); 
    }

    render() {
        let {title, company, cost, deadline, assigned} = this.state;
        return (
            <form className='modal__content' action='#' method='POST'>
                <input type="text" placeholder='title' name='title' required
                className='modal__input' value = {title} onChange={this.handleChange}/>
                
                <input type="text" placeholder='company' name='company' required
                className='modal__input' value={company} onChange={this.handleChange}/>
                
                <input type="number" placeholder='cost' name='cost' required
                className='modal__input' value={cost} onChange={this.handleChange}/>
                
                <input type="date" placeholder='deadline' name='deadline' required
                className='modal__input' value={deadline} onChange={this.handleChange}/>
                
                <input type="text" placeholder='assigned' name='assigned' required
                className='modal__input' value={assigned} onChange={this.handleChange}/>
                
                <button className='modal__submit' onClick={(e) => this.addProject(e)}>Add project</button>
            </form>
        )
    }
}

export default AddProjectModel