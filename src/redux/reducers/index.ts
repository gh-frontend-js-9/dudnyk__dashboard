import loggedReducer from './loggedReducer';
import userReducer from './userReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    isLogged: loggedReducer,
    user: userReducer
});

export default allReducers;