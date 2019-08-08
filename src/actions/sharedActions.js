import { _getUsers } from '../utils/_DATA.js';
import  { receiveUsers }  from './usersActions';

export function handleInitialUsers() {
    return (dispatch) => {
        return _getUsers()
        .then(users => {
            console.log('users '+ users.sarahedo.id)
            dispatch(receiveUsers(users))
        })
    }
}