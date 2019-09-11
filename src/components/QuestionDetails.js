import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/questionsActions';
import { votedFor } from '../utils/_DATA';


export class QuestionDetails extends Component {
    state = {
        selectedOption:'',
        submittedAnswer:false
    }
    handleSubmit = (e, id) => {
        e.preventDefault();
        const { authedUser } = this.props;
        const { selectedOption }  = this.state;
        console.log(' selected option ' + selectedOption);
        
        this.props.dispatch(handleAnswerQuestion(authedUser, id, selectedOption));
        this.setState({ submittedAnswer:true });
    }

    handleChange = (e) => {
        this.setState({selectedOption:e.target.value});
    }

        

    static getDerivedStateFromProps(props, state) {
        console.log(' redirect prop ' );
        return null;
    }

    render() {
        const { question, authedUser, users } = this.props;
        const { submittedAnswer } = this.state;
        /* if (this.props.location.state===undefined) {
            return <Redirect to='/error' />
        } */
        let questionAnswered = false;
        if (this.props.location.state!==undefined) {
             questionAnswered = this.props.location.state.questiontype;
        }
        else {
           if ((votedFor(question, 'optionOne', authedUser)) || (votedFor(question, 'optionTwo', authedUser))) {
              questionAnswered = true;
           }
        }
        let avatar = '';
        let q1answers, q2answers, totalResponses, perq1, perq2;
        if (question!==undefined) {
          avatar = users[question.author].avatarURL;
          console.log(' -->avatar '+ avatar);
          const { selectedOption } = this.state;
          if (selectedOption === '')   {
            this.setState({selectedOption:'optionOne'});
          }
          q1answers = question.optionOne.votes.length;
          q2answers = question.optionTwo.votes.length;
          totalResponses = q1answers + q2answers;
          perq1 = ((q1answers / totalResponses) * 100).toFixed(1);
          perq2 = ((q2answers / totalResponses) * 100).toFixed(1);
        }   
         
        return (
            <React.Fragment>              
               {(!questionAnswered && question!==undefined && !submittedAnswer) &&  
                 (<div className='question-card'>
                 <img className='avatar-image avatar-question-card' src={avatar} alt='user avatar' width='70px' height='70px' />
                 <div className='header-question-card'>{question.author} Asks...</div> 
                 <div className='header2-question-card'>Would You Rather...</div> 
                 <div className='answered-question-card'>
                 <input type='radio' name='answer'  onChange={this.handleChange} value='optionOne' checked={this.state.selectedOption === 'optionOne'} /> {question.optionOne.text}</div>
                 <div className='asked-question-card'>
                 <input type='radio' name='answer' onChange={this.handleChange} value='optionTwo' checked={this.state.selectedOption === 'optionTwo'} /> {question.optionTwo.text}
                 </div>
                 <button className='footer-question-card submit-button' onClick={(e) => (this.handleSubmit(e, question.id))}>Submit Answer</button>
                 </div>)}

                 {((questionAnswered && question!==undefined) || submittedAnswer) &&  
                 (<div className='poll-results-card-grid'>
                 <img className='results-avatar avatar-results-card' src={avatar} alt='user avatar' width='70px' height='70px' />
                 <div className='header-results-card'>Added by {question.author} Results:</div>
                 <div className='option1-results-card'>{question.optionOne.text}{(votedFor(question, 'optionOne', authedUser) && (<div><div className='voted-for-dot'>Voted for this One</div></div>))}</div>
                 <div className='votes1-results-card'>Votes: {q1answers} out of {totalResponses} votes | {perq1} %</div>
                 <div className='option2-results-card'>{question.optionTwo.text}{(votedFor(question, 'optionTwo', authedUser) && (<div><div className='voted-for-dot'>Voted for this One</div></div>))}</div>
                 <div className='votes2-results-card'>Votes: {q2answers} out of {totalResponses} votes | {perq2} %</div>
                 </div>)}
                 
            </React.Fragment>
        )
    }
}



const mapStateToProps = ({questions, authedUser, users}, props) => {
    const { id, questionDetails } = props.match.params;
    let question = questions[id];
    return {
        questions,
        question,
        id,
        authedUser,
        questionDetails,
        users
    }
  }

  export default connect(mapStateToProps)(QuestionDetails);
  

 

 
  
 
