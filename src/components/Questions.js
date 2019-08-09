import React, { Component } from 'react'
import { handleReceiveQuestions } from '../actions/questionsActions';
import Question from './Question';
import { connect } from 'react-redux';
 
class Questions extends Component {

    componentDidMount() {
        this.props.dispatch(handleReceiveQuestions())
    }

    render() {
        const { questionIds } = this.props;
        return (
            <React.Fragment>
            <h3>Unanswered Questions</h3>
            <div>
                {questionIds.map((id) => (
                 <Question id={id} />
                 ))}
            </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({questions}) => {
    return {
        questionIds:Object.keys(questions),
      questions
    }
  }
  
  export default connect(mapStateToProps)(Questions);