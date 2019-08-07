import React, { Component } from 'react'

 class Signin extends Component {
    render() {
        return (
            <React.Fragment>
            <h3 className='App-header'>
                Would you rather...
            </h3>
            <form>
            <select name='users'>
                <option value='User1'>User1</option>
            </select>
            <input type='submit' />
            </form>
            </React.Fragment>
        )
    }
}

export default Signin;