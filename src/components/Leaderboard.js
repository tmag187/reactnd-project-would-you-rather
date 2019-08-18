import React, { Component } from 'react'
import { connect } from 'react-redux';
import ScoreDetails from './ScoreDetails';
import { votedFor } from '../utils/_DATA';

class Leaderboard extends Component {

    scoreInfo = () => {
        let { users, questions, authedUser } = this.props;
        let results = {};
        let id, qid;
        let details = {};
        for (id in users){
            details = {};
            details.id = id;
            details.answered = 0;
            details.asked = 0;
            for (qid in questions) {
                console.log(' user ' + id + ' questions[qid] ' + questions[qid]);
                if (votedFor(questions[qid], 'optionOne', id) || (votedFor(questions[qid], 'optionTwo', id))) {                    
                    details.answered = details.answered + 1; 
                    console.log(' details.answered ' + details.answered);
                }
                if (questions[qid].author === id) {
                    details.asked = details.asked + 1;
                }
            } 
            results[id] = details;
        }       
        this.setState({ results });
    }

    componentWillMount() {
        this.scoreInfo();
    }
    render() {
        let {userIds } = this.props;
        let { results } = this.state;
        return (
            <div>
                <h2 className='score-card-header'>Leaderboard</h2>
                {userIds.map((userid) => (
                 <ScoreDetails userid={userid} key={userid} results={results} />
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

export default connect(mapStateToProps)(Leaderboard)