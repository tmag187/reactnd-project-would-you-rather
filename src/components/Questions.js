import React, { Component } from 'react'
import { handleReceiveQuestions } from '../actions/questionsActions';
import Question from './Question';
import { connect } from 'react-redux';
 
class Questions extends Component {
    state = {
        questionList:'unanswered'
    }
    componentDidMount() {
        this.props.dispatch(handleReceiveQuestions())
    }

    votedFor = (id) => {
        let votedfor = false;
        const { authedUser, questions } = this.props;
        votedfor = questions[id].optionOne.votes.some((vote) => {
               return (vote === authedUser)
        });
        if (votedfor===true) {
            console.log(' vquestions ' + votedfor);
            return votedfor;
        }
        votedfor = questions[id].optionTwo.votes.some((vote) => {
            return (vote === authedUser)
        });

        console.log(' vquestions ' + votedfor);
        return votedfor;
    }

    handleAnsweredChange = (e) => {
        console.log(' questiontype ' + e.target.value);
        this.setState({
            questionList:e.target.value
        });
    }

    render() {
        const { questionIds, authedUser, questions } = this.props;
        console.log(' authed user ' + authedUser);
        const { questionList } = this.state;
        //console.log(' voted user ' + questions[questionIds[0]]);
        if (questions!==undefined) {
        console.log(' voted user ' + questionIds[0]);
       //  this.votedFor(questions[questionIds[0]]);
        }
        return (
            
            <React.Fragment>
            <div className='answered-state-button-group' >
                <button variant='secondary' onClick={this.handleAnsweredChange} value='unanswered'>Unanswered Questions</button>
                <button variant='secondary' onClick={this.handleAnsweredChange} value='answered'>Answered Questions</button>
                </div>
            {questionList === 'unanswered' &&
            <div>
                {questionIds.map((id) => (
                 ((!this.votedFor(id)) && <Question id={id} key={id} questiontype={questionList} />)
                 ))}
            </div>
            }
            {questionList === 'answered' &&
            <div>
                {questionIds.map((id) => (
                 ((this.votedFor(id)) && <Question id={id} key={id} questiontype={questionList} />)
                 ))}
            </div>
            }
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({questions, authedUser}) => {
    return {
      questionIds:Object.keys(questions),
      questions,
      authedUser
    }
  }
  
  export default connect(mapStateToProps)(Questions);