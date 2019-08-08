import React, { Component } from 'react';
import { connect } from 'react-redux';

 class Signin extends Component {
    render() {
        let { users, userIds } = this.props;
        console.log('users >' + this.props);
        return (
            <React.Fragment>
            <br />
            <br />
            <h2>Select a User</h2>
            <form>
            <select name='users' className='select-sign'>
               {  userIds.map(userId => (
                    <option value='User1'>{users[userId].id}</option>
                ))}   }              
           </select>
           <br />
           <br />
            <input type='submit' className='submit-button' />
            </form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({users}) => {
    return {
      userIds:Object.keys(users),
      users
    }
  }
  
  export default connect(mapStateToProps)(Signin);