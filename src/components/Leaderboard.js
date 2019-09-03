import React, { Component } from 'react'
import { connect } from 'react-redux';
import ScoreDetails from './ScoreDetails';
import { votedFor } from '../utils/_DATA';
import { withRouter } from 'react-router-dom';
import { handleReceiveQuestions } from '../actions/questionsActions';

class Leaderboard extends Component {
    state = {
        results:[]
    }
    scoreInfo = () => {
        let { users, questions, userIds } = this.props;
        let results = [];
        let qid;
        let details = {};
        userIds.forEach((id) => {
            details = {};
            details.id = id;
            details.avatarURL = users[id].avatarURL;
            details.answered = 0;
            details.asked = 0;
            for (qid in questions) {
                if (votedFor(questions[qid], 'optionOne', id) || (votedFor(questions[qid], 'optionTwo', id))) {                  
                    details.answered = details.answered + 1; 
                }
                if (questions[qid].author === id) {
                    details.asked = details.asked + 1;
                }
            } 
            results.push(details);
        });  
        results = results.sort(function(a, b) {
            let totala = a.answered + a.asked;
            let totalb = b.answered + b.asked;
            if (totala>totalb) {
                return -1;
            } else {
                return 1;
            }
        }); 

        this.setState({ results });
    }

    componentDidMount() {
        this.scoreInfo();
        localStorage.setItem('lastpage', 'leaderboard');
    }
    render() {
        let { results } = this.state;
        let { questions } = this.props;
        if (questions === undefined) {
            this.props.dispatch(handleReceiveQuestions());
            this.scoreInfo();
        }
        return (
            <div>
                <h2 className='score-card-header'>Leaderboard</h2>
                {results.map((result) => (
                 <ScoreDetails userid={result.id} key={result.id} results={result} avatar={result.avatarURL} />
                 ))}
            </div>
        )
    }
}

const mapStateToProps = ({questions, users, authedUser}) => {
    return {
      userIds:Object.keys(users),
      questions,
      users,
      authedUser
    }
  }

export default connect(mapStateToProps)(Leaderboard);