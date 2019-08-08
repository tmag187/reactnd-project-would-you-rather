import React, { Component } from 'react';
import { handleInitialUsers } from '../actions/sharedActions';
import { _getUsers } from '../utils/_DATA';
import { connect } from 'react-redux';
import  Signin  from './Signin';
import '../App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialUsers())
  }
  render() {
    console.log(' users ::' + this.props.users);
  return (
    <div className="App">
            <header className='App-header'>
                Would you Rather...
            </header>
      <Signin />
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
