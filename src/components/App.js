import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { handleInitialUsers } from '../actions/sharedActions';
import { connect } from 'react-redux';
import  Signin  from './Signin';
import  Questions from './Questions';
import  AddQuestion from './AddQuestion';
import  QuestionDetails from './QuestionDetails';
import '../App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialUsers())
  }
  render() {
  return (
    <div className="App">
            <header className='App-header'>
                Would you Rather...
            </header>
      <Router>
        <Switch>
            {/* <Route exact path='/' component={Signin} /> */}
            <Route exact path='/' component={Questions} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/question/:id' component={QuestionDetails} />
            <Route exact path='/add' component={AddQuestion} />
        </Switch>
      </Router>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  return {
    users:state.users
  }
}



export default connect(mapStateToProps)(App);
