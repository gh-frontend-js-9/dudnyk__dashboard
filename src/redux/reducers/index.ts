import {combineReducers} from 'redux';

import loggedReducer from './loggedReducer';
import userReducer from './userReducer';
import threadRedducer from './threadRedducer';
import allThreadsReducer from './allThreadsReducer';

const allReducers = combineReducers({
    isLogged: loggedReducer,
    user: userReducer,
    currentThread: threadRedducer,
    threads: allThreadsReducer
});

export default allReducers;