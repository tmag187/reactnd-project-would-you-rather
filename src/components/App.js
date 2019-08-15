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
import '../App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialUsers())
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
            {/* <Route exact path='/' component={Signin} /> */}
            <Route exact path='/' component={Questions} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/question/:id' component={QuestionDetails} />
            <Route exact path='/add' component={AddQuestion} />
            <Route exact path='/leaderboard' component={Leaderboard} />
        </Switch>
        </div>
    </div>
    </Router>
  );
}
}


const mapStateToProps = ({users}) => {
  return {
    users
  }
}

export default connect(mapStateToProps)(App);
