import React, { Component } from 'react'

import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questionsActions';
import { Redirect, withRouter } from 'react-router-dom';

 class AddQuestion extends Component {

    state = {
        optionOneText:'',
        optionTwoText:'',
        toHome:false
    }

    handleSubmit = (e) => {        
        e.preventDefault();
        const { authedUser } = this.props;
        const { optionOneText, optionTwoText } = this.state;
        if ((optionOneText === "" || optionTwoText === "")) {
          alert(
            " Both answers must be entered to submit the question."
          );
        } else {

          let unformattedQuestion = {
            optionOneText: optionOneText,
            optionTwoText: optionTwoText,
            author: authedUser
          };
          this.props.dispatch(handleAddQuestion(unformattedQuestion));
          this.setState({ toHome: "true" });
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    componentDidMount() {
      localStorage.setItem('lastpage', 'add');
    }

    render() {
        if (this.state.toHome) {
            return <Redirect to='/' />
        }
        return (
            
            <React.Fragment>
                <div className='add-question-header'>Add a Question</div>
                <div className='add-question-header2'>Would You Rather...</div>
                 <form onSubmit={this.handleSubmit} >
                 <div className='add-question-label'>Answer 1</div>      
                <textarea className='add-question-input' value={this.state.optionOneText} name='optionOneText' onChange={this.handleChange} />
                <div className='add-question-label'>Answer 2</div> 
                <textarea className='add-question-input' name='optionTwoText' value={this.state.optionTwoText} onChange={this.handleChange} />
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

export default withRouter(connect(mapStateToProps)(AddQuestion));