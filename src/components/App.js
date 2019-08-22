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

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialUsers())
  }
  render() {
  //let { authedUser } = this.props;
  console.log(' rerender app with prop ' + this.props.authedUser);
  if (this.props.authedUser!==undefined && this.props.authedUser!==null) {
  console.log(' keys ' + Object.keys(this.props.authedUser).length);
  }
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
