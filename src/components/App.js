import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { handleInitialUsers } from '../actions/sharedActions';

import { connect } from 'react-redux';
import InfoBar from './InfoBar';
import  Signin  from './Signin';
import  Questions from './Questions';
import  AddQuestion from './AddQuestion';
import  QuestionDetails from './QuestionDetails';
import Leaderboard from './Leaderboard';
import { ProtectedRoute } from './ProtectedRoute';
import NotFound from './pages/NotFound';
import '../App.css';
//import { setAuthedUser } from '../actions/authedUserActions';

class App extends Component {
  componentDidMount() {
    if (localStorage.user==="null" || localStorage.user===undefined || Object.keys(this.props.users).length===0) {
    this.props.dispatch(handleInitialUsers());
    }
  }
  render() {

  return (
    <Router>
    <div className="App">
            <header className='App-header'>
                Would you Rather...
            </header>     
      <InfoBar />
      <div>
        <Switch>
            <Route exact path='/signin' component={Signin} />           
            <ProtectedRoute exact path='/' component={Questions} authedUser={this.props.authedUser} />     
            <ProtectedRoute exact path='/question/:id' component={QuestionDetails} authedUser={this.props.authedUser} />
            <ProtectedRoute exact path='/add' component={AddQuestion} authedUser={this.props.authedUser} />
            <ProtectedRoute exact path='/leaderboard' component={Leaderboard} authedUser={this.props.authedUser} />
            <Route exact path='/error' component={NotFound} />
            <ProtectedRoute path='*' component={Signin} authedUser={null} />          
            <Route component={NotFound} />
        </Switch>
        </div>
    </div>
    </Router>
  );
}
}


const mapStateToProps = ({users, authedUser}) => {
  return {
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(App);
