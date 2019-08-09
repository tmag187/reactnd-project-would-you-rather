import { combineReducers } from 'redux';
import  users from './usersReducers'
import questions from './questionsReducers'

export default combineReducers({
    users,
    questions
});