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
        const { question, questiontype, users } = this.props;
        const { toDetail } = this.state;
        let avatarURL = '';
          if (question!==undefined) {
            console.log(' questiontype ' + questiontype);
          let { id, author  } = question;
          author = users[author];
        //   let { userAvatar }  = author;
          console.log(' prop author ' + author);
         /*  userAvatar = users[author].avatarURL; */
         /*  console.log(' prop userAvatar ' + userAvatar); 
          avatarURL = userAvatar; */
          if (toDetail) {
                return <Redirect to={{pathname:`/question/${question.id}`, state: {questiontype:questiontype}}} />    
            }
        }      
        return (
            <React.Fragment>               
                
               {(questiontype==='unanswered' && question!==undefined) &&  
                 (<Link to={`question/:${question.id}`}><div className='question-card'>
                  <img className='avatar-image' src={avatarURL} width='50px' height='60px' />
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



const mapStateToProps = ({questions, users}, {id, questiontype}) => {
    const question = questions[id];
    console.log(' question ' + question);
    return {
      question,
      users,
      questiontype
    }
  }

  export default connect(mapStateToProps)(Question);

 

 
  
 
