import { _getUsers } from '../utils/_DATA.js';
import  { receiveUsers }  from './usersActions';

export function handleInitialUsers() {
    return (dispatch) => {
        return _getUsers()
        .then(({users}) => {
            dispatch(receiveUsers(users));
        })
    }
}