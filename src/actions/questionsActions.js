import { _getQuestions } from '../utils/_DATA.js';
export const RECEIVE_QUESTIONS = 'RECEIVE_USERS';

export function receiveQuestions(questions) {
    console.log('receive questions');
    return {
        type:RECEIVE_QUESTIONS,
        questions
    }
}

export function handleReceiveQuestions() {
    return (dispatch) => {
        return _getQuestions()
        .then(questions => {
            console.log('r questions '+ questions)
            dispatch(receiveQuestions(questions))
        })
    }
}