import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUserActions';
 class Signin extends Component {
     constructor(props){
        super(props);

        this.state = {
        value:''
        }
    }

    handleSubmit = e => {
      e.preventDefault();
      console.log(" submitted >" + this.state.value);
      if (this.state.value === "") {
        let { userIds } = this.props;
        let user = userIds[0];
        this.setState({ value: user });
        console.log(" user set @>" + user);
        this.props.dispatch(setAuthedUser(user));
        this.props.history.push("/");
      } else {
        const value = this.state.value;
        console.log(" submitted >" + value);
        this.props.dispatch(setAuthedUser(value));
        this.props.history.push("/");
      }
    };

    handleChange = (e) => {
        this.setState({value:e.target.value});
        console.log(' selected ' + e.target.value);
    }

    render() {
        let { users, userIds } = this.props;
        return (
            <React.Fragment>
            <br />
            <br />
            <h2>Select a User</h2>
            <form onSubmit={this.handleSubmit} >
            <select value={this.state.value} name='users' className='select-sign' onChange={this.handleChange} >
               {  userIds.map(userId => (
                    <option value={users[userId].id} key={userId} >{users[userId].id}</option>
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