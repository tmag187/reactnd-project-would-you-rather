import { combineReducers } from 'redux';
import  users from './usersReducers'
import questions from './questionsReducers';
import authedUser from './authedUserReducer';

export default combineReducers({
    authedUser,
    users,
    questions
});