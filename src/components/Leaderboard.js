import React, { Component } from 'react'
import { connect } from 'react-redux';
import ScoreDetails from './ScoreDetails';

class Leaderboard extends Component {

    scoreInfo = () => {

    }

    componentWillMount() {
        this.scoreInfo();
    }
    render() {
        let {userIds } = this.props;
        return (
            <div>
                <h2>Leaderboard</h2>
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