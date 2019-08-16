import React, { Component } from 'react'
import { connect } from 'react-redux';

 class ScoreDetails extends Component {
    render() {
        let { userid } = this.props;

        /* if (question!==undefined) {
            const { id, author  } = question;
            console.log(' prop question ' + question.id);
          }    */

        let total = 1;
        return (
            <div>                
                 <div className='user-score-card-grid'>
                 <img className='avatar-image avatar-score-card' src='http://localhost:3000/img_avatar.png' width='70px' height='70px' />
                 <div className='header-score-card'>{userid}</div>
                 <div className='answered-score-card'>Answered Questions :{total}</div> 
                 <div className='total-score-card'>Score<span className='score-total-dot'> <div className='score-dot-value'>{total*2}</div></span></div>             
                 <div className='asked-score-card'>Asked Questions :{total}</div> 
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
