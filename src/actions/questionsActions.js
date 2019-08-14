import { _getQuestions, _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA.js';
export const RECEIVE_QUESTIONS = 'RECEIVE_USERS';
export const SET_QUESTION_ANSWER = 'SET_QUESTION_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';

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
        .then((result) => {
            console.log('answer added to questions ' + result)
            dispatch(answerQuestion(qid))
        })
    }
}

export function addQuestion(qid) {
    return {
        type:ADD_QUESTION,
        qid
    }
}

export function handleAddQuestion(question) {
    return (dispatch) => {
        return _saveQuestion({ question })
        .then((fquestion) => {
            console.log('question added to questions ' + fquestion)
            dispatch(answerQuestion(fquestion))
        })
    }
}