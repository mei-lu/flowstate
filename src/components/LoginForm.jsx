import React from 'react';

class LoginForm extends React.Component {
    render() {
        return <div className='login-container'>
            <form>
                <label for='username'>Username:</label>
                <input type='text'></input><br/>
                <label for='password'>Password:</label>
                <input type='text'></input>
            </form>
        </div>
    }
}
