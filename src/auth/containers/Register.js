import React, {Component} from 'react'
import {connect} from 'react-redux'

import {registerUser} from '../actions'

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
        this.props.registerUser(this.state);
        event.preventDefault();
    }

    renderIndicator = () => {
        if(this.props.isLoading) {
            return <div>Loading...</div>;
        }
        return null;
    }

    renderError = () => {
        if(this.props.hasErrors) {
            return <div><span style={{color: 'red'}}>Error</span></div>
        }
        return null;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderIndicator()}
                {this.renderError()}
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

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading,
    hasErrors: state.auth.hasErrors
})

const mapDispatchToProps = dispatch => ({
    registerUser: (formData) => dispatch(registerUser(formData))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);