import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class InfoBar extends Component {
    render() {
        const { authedUser } = this.props;
        return (
            <div>
                { <span><header className='user-header'>Welcome {authedUser}<Link to={`/signin`}>    Sign Out</Link></header></span> }
            </div>  
        )
    }
}
const mapStateToProps = ({authedUser}) => {
    return {
      authedUser
    }
  }
export default connect(mapStateToProps)(InfoBar);
