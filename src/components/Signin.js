import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUserActions';
import { withRouter } from 'react-router-dom';

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
      let { questions } = this.props;
      if (this.state.value === "") {
        let { userIds } = this.props;
        let user = userIds[0];
        this.setState({ value: user });
        console.log(" user set @>" + user);
        this.props.dispatch(setAuthedUser(user));
        
      } else {
        const value = this.state.value;
        console.log(" submitted >" + value);
        this.props.dispatch(setAuthedUser(value));
        
      }
      let path = (localStorage.lastpage);
      let prevPage;
      if (this.props.location.state!==undefined) {
        prevPage = this.props.location.state.from.pathname;
        if (prevPage.match(/\/question\/\w+/)) 
      {
           if (questions!==undefined) {
              let questionId = (prevPage.split('/'))[2];
              if (questions.hasOwnProperty(questionId)) {
                path = prevPage;
              } else {
                path =  '/error';
              }           
           }
           else {
             path = '/';
           }
           this.props.history.push(path);
      } else {
          this.props.history.push(prevPage);
      }
      } else {
        path = '/';
        this.props.history.push(path);
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
            <div className='user-selection-label'>Select a User</div>
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

const mapStateToProps = ({users, questions}) => {
    return {
      userIds:Object.keys(users),
      users,
      questions
    }
  }
  
  export default withRouter(connect(mapStateToProps)(Signin));