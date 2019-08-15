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
                 <div className='user-score-card'>
                 <img className='avatar-image' src='' width='50px' height='60px' />
                 <h3 className='author-label'>{userid}</h3> 
                 <h4 className='answered-question-title'></h4> 
                 <div>
                 <div><div>Answered Questions :</div><div>{total}</div><span className='score-total-dot'><div className='score-dot-value'>{total*2}</div></span></div>
                 </div>             
                 <div>
                 <span><label>Asked Questions :</label><div>{total}</div></span>
                 </div>               
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
