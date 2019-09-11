import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export class Question extends Component {
    state = {
        toDetail:false,
        answered:false
    }
    handleSubmit = (e, id) => {
        e.preventDefault();
        this.setState({
            toDetail:true,
            answered:true
        });       
    }

    componentDidMount() {
        let answered = (this.props.questiontype === 'unanswered' ? false : true);
        this.setState({
            answered
        });
    }

    changeAnsweredStatus() {
        let { answered } = this.state;
        this.setState({
            answered:!answered
        })
    }

    

    render() {
        const { question, questiontype, users } = this.props;
        const { toDetail } = this.state;
        let avatar = "";
        if (question !== undefined) {
          console.log(" questiontype " + questiontype);
          let { author } = question;
          
          if (users !== undefined) {
            let avatarUser = users[author];
            avatar = avatarUser['avatarURL'];
            console.log(" -->avatar " + avatar); 
          }
          if (toDetail) {
            let answered =
              this.props.questiontype === "unanswered" ? false : true;
            return (
              <Redirect
                to={{
                  pathname: `/question/${question.id}`,
                  state: {
                    questiontype: answered,
                    changeStatus: this.changeAnsweredStatus()
                  }
                }}
              />
            );
          }
        }      
        return (
            <React.Fragment>               
                
               {(questiontype==='unanswered' && question!==undefined) &&  
                 (<div className='question-card'>
                  <img className='avatar-image avatar-question-card' src={avatar} alt='user avatar' width='70px' height='70px' />
                 <div className='question-card-title header-question-card'>{question.author} Asks...</div> 
                 <div className='question-card-label1 answered-question-card'>Would You Rather...</div> 
                 <div className='question-card-label1 asked-question-card'>...{question.optionOne.text}...</div>
                 <div className='footer-question-card question-card-button'><button className='view-button' onClick={(e) => (this.handleSubmit(e, question.id))}>View Poll</button></div>
                 </div>
                 )}

                 {(questiontype==='answered' && question!==undefined) &&  
                 (<div className='question-card'>
                  <img className='avatar-image avatar-question-card' src={avatar} alt='user avatar' width='70px' height='70px' />
                 <div className='question-card-title header-question-card'>{question.author} Asks...</div> 
                 <div className='question-card-label1 answered-question-card'>Would You Rather...</div> 
                 <div className='question-card-label1 asked-question-card'>...{question.optionOne.text}...</div>
                 <div className='footer-question-card question-card-button'><button className='view-button' onClick={(e) => (this.handleSubmit(e, question.id))}>View Poll</button></div>
                 </div>
                 )}
                 
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

 

 
  
 
