import { _getUsers } from '../utils/_DATA.js';
import  { receiveUsers }  from './usersActions';
import  { setAuthedUser }  from './authedUserActions';
import {  handleReceiveQuestions } from './questionsActions';

export function handleInitialUsers() {
    return (dispatch) => {
        return _getUsers()
        .then(users => {
            dispatch(receiveUsers(users))
            let user = localStorage.user;
            if (user === 'null' || user === undefined) {
                user = null;
            }
            dispatch(setAuthedUser(user));
            dispatch(handleReceiveQuestions());
        })
    }
}