import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUserActions';

class InfoBar extends Component {
    state = {
        isAuthenticated:false,
        toSignin:false
    }

    static getDerivedStateFromProps(props, state) {
      let { authedUser } = props;
      if (authedUser) {
            return {isAuthenticated:true};
      } else {
        return {isAuthenticated:false};
      }
    }

    onSignout = (e) => {
        e.preventDefault();
        this.props.dispatch(setAuthedUser(null));
        this.setState({toSignin:true});
    }

    render() {
      if (this.state.toSignin) {
            this.setState({toSignin:false});
            return <Redirect to='/signin' />
      }
      let { authedUser } = this.props;
      let { isAuthenticated } = this.state;
      if (isAuthenticated) {
          authedUser = authedUser.toString();
          console.log(' str authed user ' + authedUser);
      }
        return (
            <nav>
            {(isAuthenticated) &&
                (<div className='infobar'>
                <Link to='/' className='infobar-a'>Home</Link>
                <Link to='/add' className='infobar-a'>Ask a Question</Link>
                <Link to='/leaderboard' className='infobar-a'>Leaderboard</Link>               
                <div className='welcome-label infobar-a-right'>Welcome {authedUser}</div>
                <a href='#!' className='infobar-a-right' onClick={this.onSignout}>Sign Out</a>
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
