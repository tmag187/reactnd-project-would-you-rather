import React, { Component } from 'react';
import { handleInitialUsers } from '../actions/sharedActions';
import { connect } from 'react-redux';
import  Signin  from './Signin';
import '../App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialUsers())
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Signin />
    </div>
  );
}
}

function mapStateToProps(state) {
  return {
    users:state.users
  }
}

export default connect(mapStateToProps)(App);
