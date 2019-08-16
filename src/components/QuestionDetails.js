import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/questionsActions';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


export class QuestionDetails extends Component {
    state = {
        selectedOption:''
    }
    handleSubmit = (e, id) => {
        e.preventDefault();
        console.log(' submitted ' + id);
        const { selectedOption }  = this.state;
        this.props.dispatch(handleAnswerQuestion('sarahedo', id, selectedOption));
    }

    handleChange = (e) => {
        this.setState({selectedOption:e.target.value});
        console.log(' selected ' + e.target.value);
    }

    votedFor = (question, option) => {
        let votedfor = false;
        const { authedUser } = this.props;
        let vquestions1 = question[option].votes.filter((vote) => {
               return (vote === authedUser)
        });
        if (vquestions1.length > 0) {
            return true;
        }
        console.log(' vquestions ' + votedfor);
        return votedfor;
    }

    render() {
        const { question, authedUser } = this.props;
        let { questionDetails } = this.props;
        questionDetails = 'unanswered';
        console.log(' questiontype ' + this.props.location.state);
        const { toDetail } = this.state;
        if (question!==undefined) {
          const { id, author  } = question;
        //  console.log(' prop question ' + question.id);
          const { selectedOption } = this.state;
          if (selectedOption === '')   {
            this.setState({selectedOption:'optionOne'});
          }
        }   
        
         
        return (
            <React.Fragment>              
               {(questionDetails==='unanswered' && question!==undefined) &&  
                 (<div className='question-card'>
                 <img className='avatar-image' src='' width='50px' height='60px' />
                 <h3 className='author-label'>{question.author} Asks...</h3> 
                 <h4 className='title-label'>Would You Rather...</h4> 
                 <form>
                 <div className='radio-label'>
                 <label><input type='radio' name='answer'  onChange={this.handleChange} value='optionOne' checked={this.state.selectedOption === 'optionOne'} />{question.optionOne.text}</label>
                 </div>
                 <div>
                 <label className='radio-label'><input type='radio' name='answer' onChange={this.handleChange} value='optionTwo' checked={this.state.selectedOption === 'optionTwo'} />{question.optionTwo.text}</label>
                 </div>
                 </form>
                 <button className='view-button' onClick={(e) => (this.handleSubmit(e, question.id))}>Submit Answer</button>
                 </div>)}

                 {(questionDetails==='answered' && question!==undefined) &&  
                 (<div className='poll-results-card-grid'>
                 <img className='avatar-score-card' src='http://localhost:3000/img_avatar.png' width='50px' height='60px' />
                 <div className='header-score-card'>Added by {question.author} Results:</div>
                 <div className='option1-score-card'>{question.optionOne.text}{(this.votedFor(question, 'optionOne') && (<div>Voted for this One</div>))}</div>
                 <div className='votes1-score-card'>Votes: {question.optionOne.votes.length}</div>
                 <div className='option2-score-card'>{question.optionTwo.text}{(this.votedFor(question, 'optionTwo') && (<div>Voted for this One</div>))}</div>
                 <div className='votes2-score-card'>Votes: {question.optionTwo.votes.length}</div>
                 </div>)}
                 
            </React.Fragment>
        )
    }
}



const mapStateToProps = ({questions, authedUser}, props) => {
    const { id, questionDetails } = props.match.params;
    let question = questions[id];
    return {
        questions,
        question,
        id,
        authedUser,
        questionDetails
    }
  }

  export default connect(mapStateToProps)(QuestionDetails);

 

 
  
 
