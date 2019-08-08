import { RECEIVE_USERS } from '../actions/usersActions';
const initialState = {};
export default function users(state = initialState, action) {
switch (action.type) {
   case RECEIVE_USERS:
       return {
            ...state,
            ...action.users
       } 
    default:
        return {
            ...state
        }
}
}