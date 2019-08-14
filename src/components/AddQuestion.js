import React, { Component } from 'react'

import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questionsActions';
import { Link, Redirect } from 'react-router-dom';

 class AddQuestion extends Component {

    state = {
        optionOneText:'',
        optionTwoText:'',
        toHome:false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { authedUser } = this.props;
        let { optionOneText, optionTwoText } = this.state;
        console.log('submit' + optionTwoText);
        console.log('user:' + authedUser);
        let unformattedQuestion = { optionOneText, optionTwoText, authedUser};
        this.props.dispatch(handleAddQuestion(unformattedQuestion));
      //  this.props.history.push('/');
        this.setState({toHome:'true'});
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    render() {
        if (this.state.toHome) {
            return <Redirect to='/' />
        }
        return (
            
            <React.Fragment>
                <h2>Add a Question</h2>
                 <form onSubmit={this.handleSubmit} >
                 <h3>Answer 1</h3>      
                <input className='add-question-input' name='optionOneText' onChange={this.handleChange} />
                <h3>Answer 2</h3> 
                <input className='add-question-input' name='optionTwoText' onChange={this.handleChange} />
                <br />
                <button className='btn submit-button' value='Submit' type='submit'>Submit</button>
                </form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({authedUser, questions}) => {
    return {
      authedUser,
      questions
    }
  }

export default connect(mapStateToProps)(AddQuestion);