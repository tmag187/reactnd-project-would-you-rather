import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/questionsActions';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import  InfoBar from './InfoBar';


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

    render() {
        const { question } = this.props;
        let { questionDetails } = this.props.location.state.questiontype;
        questionDetails = 'answered';
        console.log(' questiontype ' + this.props.location.state);
        const { toDetail } = this.state;
        if (question!==undefined) {
          const { id, author  } = question;
          console.log(' prop question ' + question.id);
          const { selectedOption } = this.state;
          if (selectedOption === '')   {
            this.setState({selectedOption:'optionOne'});
          }
        }   
        
         
        return (
            <React.Fragment>               
                <InfoBar />
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
                 (<div className='question-card'>
                 <img className='avatar-image' src='' width='50px' height='60px' />
                 <h3 className='author-label'>Added by {question.author}</h3> 
                 <h4 className='title-label'>Results:</h4> 
                 <div className='radio-label'>
                 <label><input type='radio' name='answer'  onChange={this.handleChange} value='optionOne' checked={this.state.selectedOption === 'optionOne'} />{question.optionOne.text}</label>
                 </div>
                 <div>
                 <label className='radio-label'><input type='radio' name='answer' onChange={this.handleChange} value='optionTwo' checked={this.state.selectedOption === 'optionTwo'} />{question.optionTwo.text}</label>
                 </div>
                 </div>)}
                 
            </React.Fragment>
        )
    }
}



const mapStateToProps = ({questions}, props) => {
    const { id } = props.match.params;
    let question = questions[id];
    return {
        questions,
        question,
        id
    }
  }

  export default connect(mapStateToProps)(QuestionDetails);

 

 
  
 
