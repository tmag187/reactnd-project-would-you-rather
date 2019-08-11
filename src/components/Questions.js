import React, { Component } from 'react'
import { handleReceiveQuestions } from '../actions/questionsActions';
import Question from './Question';
import { connect } from 'react-redux';
 
class Questions extends Component {

    componentDidMount() {
        this.props.dispatch(handleReceiveQuestions())
    }

    render() {
        const { questionIds, authedUser } = this.props;
        console.log(' authed user ' + authedUser);
        return (
            
            <React.Fragment>
            { <header className='user-header'>Welcome {authedUser}</header> }
            <h3>Unanswered Questions</h3>
            <div>
                {questionIds.map((id) => (
                 <Question id={id} key={id} />
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