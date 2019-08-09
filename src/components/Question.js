import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export class Question extends Component {
    render() {
        const { question } = this.props;
          if (question!==undefined) {
          const { id, author  } = question;
          console.log(' prop question ' + question.id);
        }      
        return (
            <React.Fragment>
               {question!==undefined &&  
                 (<div className='question-card'>
                  <img className='avatar-image' src='file:///Users/tom_mag/Downloads/1376606916.svg' width='50px' height='60px' />
                 <h3 className='author-label'>{question.author} Asks...</h3> 
                 <p></p>
                 <p></p>
                 <h4 className='title-label'>Would You Rather...</h4> 
                 <h3 className='question-label'>...{question.optionOne.text}...</h3>
                 {/* <h3>{question.optionTwo.text}</h3> */}
                 <button className='view-button'>View Poll</button>
                 <p></p>
                 </div>)}
                 
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

 

 
  
 
