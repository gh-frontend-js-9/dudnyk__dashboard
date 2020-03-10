import {ICurrentThread} from '../../interfaces/IThreads'

interface IAction {
    type: string,
    payload: ICurrentThread
}

let defaultState:ICurrentThread = {
    id: '',
    interlocutor: ''
}

const threadReducer = (state = defaultState, action:IAction)  => {
    switch (action.type) {
        case 'SET_THREAD': 
            return action.payload;    
        default:
            return state;
    }
}

export default threadReducer;