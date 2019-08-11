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
        let vquestions2 = questions[id].optionTwo.votes.filter((vote) => {
            return (vote === authedUser)
        });
        console.log(' vquestions ' + vquestions1);
        console.log(' vquestions ' + vquestions2);
        if (vquestions1.length > 0 || vquestions2.length>0) {
            votedfor = true;
        }
        console.log(' vquestions ' + votedfor);
        return votedfor;
    }

    handleAnsweredChange = (e) => {
        const { questionList } = this.state;
        this.setState({
            questionList:!questionList
        });
    }

    render() {
        const { questionIds, authedUser, questions } = this.props;
        console.log(' authed user ' + authedUser);
        //console.log(' voted user ' + questions[questionIds[0]]);
        if (questions!==undefined) {
        console.log(' voted user ' + questionIds[0]);
       //  this.votedFor(questions[questionIds[0]]);
        }
        return (
            
            <React.Fragment>
            {/* { <header className='user-header'>Welcome {authedUser}</header> } */}
            <InfoBar />
            <span><button onClick={this.handleAnsweredChange}>Unanswered Questions</button><button onClick={this.handleAnsweredChange}>Answered Questions</button></span>
            <div>
                {questionIds.map((id) => (
                 ((questions[id].author!==authedUser && !this.votedFor(id)) && <Question id={id} key={id} />)
                 ))}
            </div>
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