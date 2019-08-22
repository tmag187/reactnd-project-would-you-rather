import { SET_AUTHED_USER } from '../actions/authedUserActions';
let initialState = {};
export default function setAuthedUser(state= initialState, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
        //   let { authedUser } = action;
           return action.id   
        default: 
            return state
    }
}