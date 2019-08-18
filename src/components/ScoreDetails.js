import React, { Component } from 'react'
import { connect } from 'react-redux';

 class ScoreDetails extends Component {
    render() {
        let { userid, results, user } = this.props;

        /* if (question!==undefined) {
            const { id, author  } = question;
            console.log(' prop question ' + question.id);
          }    */

        let total = 1;
        console.log(' res ' + results[userid].answered);
        let answered = results[userid].answered;
        let asked = results[userid].asked;
        return (
            <div>                
                 <div className='user-score-card-grid'>
                 <img className='avatar-image avatar-score-card' src='http://localhost:3000/img_avatar.png' width='70px' height='70px' />
                 <div className='header-score-card'>{userid}</div>
                 <div className='answered-score-card'>Answered Questions :{answered}</div> 
                 <div className='total-score-card'>Score<span className='score-total-dot'> <div className='score-dot-value'>{answered+asked}</div></span></div>             
                 <div className='asked-score-card'>Asked Questions :{asked}</div> 
                 <div className='footer-score-card'></div>            
                 </div>
            </div>
        )
    }
}

const mapStateToProps = ({questions, users}, { id }) => {
    let user = users[id]; 
    return {
        questions,
        id,
        users,
        user
    }
  }
export default connect(mapStateToProps)(ScoreDetails);
