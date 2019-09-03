import React, { Component } from 'react'
import { handleReceiveQuestions } from '../actions/questionsActions';
import Question from './Question';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
 
class Questions extends Component {
  state = {
    questionList: "unanswered"
  };
  componentDidMount() {
  //  this.props.dispatch(handleReceiveQuestions());
    localStorage.setItem('lastpage', '/');
  }

  orderedObject = (questionIds, questions) => {
    let newIds = [];
    let idObj = {};
    questionIds.forEach((id) => {
      idObj = {};
      idObj.id = id;
      idObj.timestamp = questions[id].timestamp;
      newIds.push(idObj);
    });
    newIds = newIds.sort((a, b) =>  b.timestamp - a.timestamp );

    return newIds;
  }

  votedFor = id => {
    let votedfor = false;
    const { authedUser, questions } = this.props;
    votedfor = questions[id].optionOne.votes.some(vote => {
      return vote === authedUser;
    });
    if (votedfor === true) {
      console.log(" vquestions " + votedfor);
      return votedfor;
    }
    votedfor = questions[id].optionTwo.votes.some(vote => {
      return vote === authedUser;
    });

    console.log(" vquestions " + votedfor);
    return votedfor;
  };

  handleAnsweredChange = e => {
    console.log(" questiontype " + e.target.value);
    this.setState({
      questionList: e.target.value
    });
  };

  render() {
    let { questionIds, authedUser, questions } = this.props;
    console.log(" authed user " + authedUser);
    const { questionList } = this.state;
    if (questions !== undefined) {
      console.log(" voted user " + questionIds[0]);
      questionIds = this.orderedObject(questionIds, questions);
    }
    return (
      <React.Fragment>
        <div className="answered-state-button-group">
          <button
            variant="secondary"
            onClick={this.handleAnsweredChange}
            value="unanswered"
          >
            Unanswered Questions
          </button>
          <button
            variant="secondary"
            onClick={this.handleAnsweredChange}
            value="answered"
          >
            Answered Questions
          </button>
        </div>
        {questionList === "unanswered" && (
          <div>
            {questionIds.map(
              idObj =>
                !this.votedFor(idObj.id) && (
                  <Question id={idObj.id} key={idObj.id} questiontype={questionList} />
                )
            )}
          </div>
        )}
        {questionList === "answered" && (
          <div>
            {questionIds.map(
              idObj =>
                this.votedFor(idObj.id) && (
                  <Question id={idObj.id} key={idObj.id} questiontype={questionList} />
                )
            )}
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({questions, authedUser}) => {
    return {
      questionIds:Object.keys(questions),
      questions,
      authedUser
    }
  }
  
  export default withRouter(connect(mapStateToProps)(Questions));