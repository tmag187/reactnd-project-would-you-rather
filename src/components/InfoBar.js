import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class InfoBar extends Component {
    render() {
        let { authedUser } = this.props;
        authedUser = 'johndoe';
        console.log(authedUser);
        return (
            <nav>
                <div>
                <ul>
              {(authedUser!=='') ?  
                (<li>
                    <div className='user-header'><a href='#!'>Welcome {authedUser}</a><Link to='/signin'>Sign Out</Link></div>
                </li>): null}  
                </ul> 
                </div>
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
