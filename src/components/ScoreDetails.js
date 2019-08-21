import React, { Component } from 'react'
import { connect } from 'react-redux';

 class ScoreDetails extends Component {
    render() {
        let { userid, results, avatar } = this.props;

        /* if (question!==undefined) {
            const { id, author  } = question;
            console.log(' prop question ' + question.id);
          }    */

        console.log(' res ' + results[userid].answered);
        let answered = results[userid].answered;
        let asked = results[userid].asked;
       // let avatar = '';
       /*  if (user!==undefined) {
           avatar = user.avatarURL;
           console.log(" -->scores avatar " + avatar); 
        } */
        return (
            <div>                
                 <div className='user-score-card-grid'>
                 <img className='avatar-image avatar-score-card' src={avatar} alt='user avatar' width='70px' height='70px' />
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

const mapStateToProps = ({questions}, { id, results }) => {
  //  let user = users[id]; 
    return {
        questions,
        results     
    }
  }
export default connect(mapStateToProps)(ScoreDetails);
