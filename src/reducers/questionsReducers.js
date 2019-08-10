import { RECEIVE_QUESTIONS, SET_QUESTION_ANSWER } from '../actions/questionsActions';
const initialState = {};
export default function questions(state = initialState, action) {
switch (action.type) {
   case RECEIVE_QUESTIONS:
       return {
            ...state,
            ...action.questions
       } 
    case SET_QUESTION_ANSWER:
        return {
             ...state
        } 
    default:
        return {
            ...state
        }
}
}