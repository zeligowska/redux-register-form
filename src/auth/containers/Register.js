import React, {Component} from 'react'

class Register extends Component {

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="email" name="email" placeholder="email" onChange={this.handleChange}></input>
                </div>
                <div>
                    <input type="password" name="password" placeholder="password" onChange={this.handleChange}></input>
                </div>
                <div>
                    <input type="text" name="firstName" placeholder="firstName" onChange={this.handleChange}></input>
                </div>
                <div>
                    <input type="text" name="lastName" placeholder="lastName" onChange={this.handleChange}></input>
                </div>
                <div>
                    <input type="submit" value="Register"></input>
                </div>
            </form>
        )
    }
}

export default Register;