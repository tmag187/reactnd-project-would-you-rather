import { _getQuestions, _saveQuestionAnswer } from '../utils/_DATA.js';
export const RECEIVE_QUESTIONS = 'RECEIVE_USERS';
export const SET_QUESTION_ANSWER = 'SET_QUESTION_ANSWER';

export function receiveQuestions(questions) {
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

export function answerQuestion(qid) {
    return {
        type:SET_QUESTION_ANSWER,
        qid
    }
}

export function handleAnswerQuestion(authedUser, qid, answer) {
    return (dispatch) => {
        return _saveQuestionAnswer({ authedUser, qid, answer })
        .then(() => {
            console.log('answer added to questions ')
            dispatch(answerQuestion(qid))
        })
    }
}