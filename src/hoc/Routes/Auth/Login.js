import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../../store/actions/auth';
import './Login.css';

class Login extends Component {

    state = {
        authType: 'login',
        email: null,
        password: null
    }

    emailHandler = (event) => {
        this.setState({email: event.target.value});
        console.log(this.state.email);
    }

    passwordHandler = (event) => {
        this.setState({password: event.target.value});
        console.log(this.state.password);
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.login(this.state.authType, this.state.email, this.state.password);
    }


    render(){

        let loader = this.props.loading ? <p>Loading...</p> : null;
        let redirect = this.props.isAuth ? <Redirect to='/'/> : null;

        return (
            <div className='MainDiv'>
                <form onSubmit={this.submitHandler}>
                    <input type='email' placeholder='email' onChange={(event) => this.emailHandler(event)}/>
                    <input type='password' placeholder='password' onChange={(event) => this.passwordHandler(event)}/>
                    <button>Submit</button>
                </form>
                {loader}
                {redirect}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        isAuth: state.isAuth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (authType, email, password) => dispatch(auth(authType, email, password))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);