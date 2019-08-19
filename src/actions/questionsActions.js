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
            dispatch(receiveQuestions(questions))
        })
    }
}

export function answerQuestion(questions) {
    return {
        type:SET_QUESTION_ANSWER,
        questions
    }
}

export function handleAnswerQuestion(authedUser, qid, answer) {
    return (dispatch) => {
        return _saveQuestionAnswer({ authedUser, qid, answer })
        .then((result) => {
            console.log('answer added to questions ' + result)
            dispatch(answerQuestion(result))
        })
    }
}

export function addQuestion(question) {
    return {
        type:ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(question) {
    console.log(' ^^^ action author of question ' + question.author)
    return (dispatch) => {
        return _saveQuestion({author:question.author, optionOneText:question.optionOneText, optionTwoText:question.optionTwoText})
        .then((fquestion) => {
            console.log('question added to questions ' + fquestion)
            dispatch(addQuestion(fquestion))
        })
    }
}