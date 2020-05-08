import React, { Component } from 'react';
import './Register.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../../store/actions/auth';


class Register extends Component {

    state = {
        authType: 'register',
        email: null, 
        password: null
    }

    emailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    passwordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.register(this.state.authType, this.state.email, this.state.password);
    }


    render(){

        let loader = this.props.loading ? <p>Loading...</p> : null;
        let redirect = this.props.isAuth ? <Redirect to='/'/> : null;

        return (
            <div>
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
        loading: state.auth.loading,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        register: (authType, email, password) => dispatch(auth(authType, email, password))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);