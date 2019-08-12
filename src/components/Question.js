import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { QuestionDetails } from './QuestionDetails';
import { withRouter } from 'react-router-dom';


export class Question extends Component {
    state = {
        toDetail:false
    }
    handleSubmit = (e, id) => {
        e.preventDefault();
        console.log(' submitted ' + id);
        this.setState({
            toDetail:true
        });       
    }

    render() {
        const { question, questiontype } = this.props;
        const { toDetail } = this.state;
          if (question!==undefined) {
          const { id, author  } = question;
          console.log(' prop question ' + question.id);
          if (toDetail) {
                return <Redirect to={{pathname:`/question/${question.id}`, state: {questiontype:questiontype}}} />    
            }
        }      
        return (
            <React.Fragment>               
                
               {(questiontype==='unanswered' && question!==undefined) &&  
                 (<Link to={`question/:${question.id}`}><div className='question-card'>
                  <img className='avatar-image' src='' width='50px' height='60px' />
                 <h3 className='author-label'>{question.author} Asks...</h3> 
                 <p></p>
                 <p></p>
                 <h4 className='title-label'>Would You Rather...</h4> 
                 <h3 className='question-label'>...{question.optionOne.text}...</h3>
                 {/* <h3>{question.optionTwo.text}</h3> */}
                 <button className='view-button' onClick={(e) => (this.handleSubmit(e, question.id))}>View Poll</button>
                 <p></p>
                 </div>
                 </Link>)}

                 {(questiontype==='answered' && question!==undefined) &&  
                 (<Link to={`question/:${question.id}`}><div className='question-card'>
                  <img className='avatar-image' src='' width='50px' height='60px' />
                 <h3 className='author-label'>{question.author} Asks...</h3> 
                 <p></p>
                 <p></p>
                 <h4 className='title-label'>Would You Rather...</h4> 
                 <h3 className='question-label'>...{question.optionOne.text}...</h3>
                 {/* <h3>{question.optionTwo.text}</h3> */}
                 <button className='view-button' onClick={(e) => (this.handleSubmit(e, question.id))}>View Poll</button>
                 <p></p>
                 </div>
                 </Link>)}
                 
            </React.Fragment>
        )
    }
}



const mapStateToProps = ({questions}, {id}) => {
    const question = questions[id];
    console.log(' question ' + question);
    return {
      question
    }
  }

  export default connect(mapStateToProps)(Question);

 

 
  
 
