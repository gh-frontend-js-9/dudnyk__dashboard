import { IThread } from '../../interfaces/IThreads';

interface IAction {
    type: string,
    payload: {
        thread: IThread[] 
    }
}

const allThreadsReducer = (state:IThread[] = [] , action:IAction)  => {
    switch (action.type) {
        case 'UPDATE_THREADS': 
            return action.payload;   
        default:
            return state;
    }
}

export default allThreadsReducer;