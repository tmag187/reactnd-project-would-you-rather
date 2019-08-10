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

    render() {
        const { question } = this.props;
        const { toDetail } = this.state;
        if (question!==undefined) {
          const { id, author  } = question;
          console.log(' prop question ' + question.id);
          const { selectedOption } = this.state;
          if (selectedOption === '')   {
            this.setState({selectedOption:question.optionOne.text});
          }
        }   
        
         
        return (
            <React.Fragment>
                
                
               {question!==undefined &&  
                 (<div className='question-card'>
                 <img className='avatar-image' src='' width='50px' height='60px' />
                 <h3 className='author-label'>{question.author} Asks...</h3> 
                 <h4 className='title-label'>Would You Rather...</h4> 
                 <form>
                 <div className='radio-label'>
                 <label><input type='radio' name='answer'  onChange={this.handleChange} value={question.optionOne.text} checked={this.state.selectedOption === question.optionOne.text} />{question.optionOne.text}</label>
                 </div>
                 <div>
                 <label className='radio-label'><input type='radio' name='answer' onChange={this.handleChange} value={question.optionTwo.text} checked={this.state.selectedOption === question.optionTwo.text} />{question.optionTwo.text}</label>
                 </div>
                 </form>
                 <button className='view-button' onClick={(e) => (this.handleSubmit(e, question.id))}>Submit Answer</button>
                 </div>)}
                 
            </React.Fragment>
        )
    }
}



const mapStateToProps = ({questions}, props) => {
    const { id } = props.match.params;
    let question = questions[id];
    return {
        question,
        id
    }
  }

  export default connect(mapStateToProps)(QuestionDetails);

 

 
  
 
