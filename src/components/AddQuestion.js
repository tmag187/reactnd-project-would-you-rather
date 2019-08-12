import React, { Component } from 'react'
import InfoBar from './InfoBar';

 class AddQuestion extends Component {

    handleSubmit = () => {
    
    }

    render() {
        return (
            <React.Fragment>
                {/* <InfoBar /> */}
                <h2>Add a Question</h2>
                 <form onSubmit={this.handleSubmit} >
                 <h3>Answer 1</h3>      
                <input className='add-question-input' />
                <h3>Answer 2</h3> 
                <input className='add-question-input' />
                <br />
                <button className='submitButton'>Submit</button>
                </form>
            </React.Fragment>
        )
    }
}

export default AddQuestion;