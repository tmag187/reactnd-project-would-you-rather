import React, { Component } from 'react'
import { handleReceiveQuestions } from '../actions/questionsActions';
import Question from './Question';
import InfoBar from './InfoBar';
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
        let vquestions1 = questions[id].optionOne.votes.filter((vote) => {
               return (vote === authedUser)
        });
        if (vquestions1.length > 0) {
            return true;
        }
        let vquestions2 = questions[id].optionTwo.votes.filter((vote) => {
            return (vote === authedUser)
        });
        console.log(' vquestions ' + vquestions1);
        console.log(' vquestions ' + vquestions2);
        if (vquestions2.length>0) {
            return true;
        }
        console.log(' vquestions ' + votedfor);
        return votedfor;
    }

    handleAnsweredChange = (e) => {
        
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
            {/* { <header className='user-header'>Welcome {authedUser}</header> } */}
            <InfoBar />
            <span><button onClick={this.handleAnsweredChange} value='unanswered'>Unanswered Questions</button><button onClick={this.handleAnsweredChange} value='answered'>Answered Questions</button></span>
            {questionList === 'unanswered' &&
            <div>
                {questionIds.map((id) => (
                 ((questions[id].author!==authedUser && !this.votedFor(id)) && <Question id={id} key={id} questiontype={questionList} />)
                 ))}
            </div>
            }
            {questionList === 'answered' &&
            <div>
                {questionIds.map((id) => (
                 ((questions[id].author!==authedUser && this.votedFor(id)) && <Question id={id} key={id} questiontype={questionList} />)
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