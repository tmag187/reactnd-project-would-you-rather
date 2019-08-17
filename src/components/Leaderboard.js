import React, { Component } from 'react'
import { connect } from 'react-redux';
import ScoreDetails from './ScoreDetails';

class Leaderboard extends Component {

    scoreInfo = () => {
        let { users, questions } = this.props;
        let results = {};
        let id, qid;
        for (id in users){
            results[id] = id;
            for (qid in questions) {
                results[qid] = qid; 
            }
        }
        this.setState({ results });
    }

    componentWillMount() {
        this.scoreInfo();
    }
    render() {
        let {userIds } = this.props;
        return (
            <div>
                <h2 className='score-card-header'>Leaderboard</h2>
                {userIds.map((userid) => (
                 <ScoreDetails userid={userid} key={userid} />
                 ))}
            </div>
        )
    }
}

const mapStateToProps = ({questions, users}) => {
    return {
      userIds:Object.keys(users),
      questions,
      users
    }
  }

export default connect(mapStateToProps)(Leaderboard)