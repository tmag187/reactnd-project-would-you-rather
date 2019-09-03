import { RECEIVE_QUESTIONS, SET_QUESTION_ANSWER, ADD_QUESTION } from '../actions/questionsActions';
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
             ...state,
             ...action.questions
        } 
    case ADD_QUESTION:
        let { question } = action;
        console.log(' question reducer ' + question);
        let lsQuestions = localStorage.questions;
        if (lsQuestions === undefined) {
            localStorage.setItem('questions', JSON.stringify([]));
        } else {
            lsQuestions = JSON.parse(lsQuestions);    
        }
        lsQuestions.push(question);
        localStorage.setItem('questions', JSON.stringify(lsQuestions));
        
        return {
            ...state,
            [action.question.id]:question
        } 
    default:
        return {
            ...state
        }
}
}