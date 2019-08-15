import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class InfoBar extends Component {
    render() {
        let { authedUser } = this.props;
     //   authedUser = 'johndoe';
     let es = {};
        console.log(authedUser.valueOf());
        return (
            <nav>
            {(authedUser!==es) &&
                (<div className='infobar'>
                <Link to='/' className='infobar-a'>Home</Link>
                <Link to='/add' className='infobar-a'>Ask a Question</Link>
                <Link to='/leaderboard' className='infobar-a'>Leaderboard</Link>               
                <div className='infobar-label'>Welcome</div>
                <Link to='/signin' className='infobar-a'>Sign Out</Link>
                </div>)}
            </nav>
        )
    }
}
const mapStateToProps = ({authedUser}) => {
    return {
      authedUser
    }
  }
export default connect(mapStateToProps)(InfoBar);
