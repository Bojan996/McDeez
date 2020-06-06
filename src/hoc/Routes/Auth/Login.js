import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../../store/actions/auth';
import './Login.css';
import Spinner from '../../../components/UI/Spinner/Spinner';

class Login extends Component {

    state = {
        authType: 'login',
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
        this.props.login(this.state.authType, this.state.email, this.state.password);
    }


    render(){

        let checkoutRedirect = null;        
        let loader = this.props.loading ? <Spinner/> : null;

        if(this.props.isAuth && this.props.orders.length >= 1){
            checkoutRedirect = <Redirect to='/checkout'/>
        }else if(this.props.isAuth && this.props.orders.length === 0){
            checkoutRedirect = <Redirect to='/'/>
        }

        return (
            <div className='LMainDiv'>
                <form onSubmit={this.submitHandler}>
                    <input type='email' placeholder='email' onChange={(event) => this.emailHandler(event)}/>
                    <input type='password' placeholder='password' onChange={(event) => this.passwordHandler(event)}/>
                    <button>Submit</button>
                </form>
                {loader}
                {checkoutRedirect}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        isAuth: state.auth.isAuth,
        orders: state.orderSummary.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (authType, email, password) => dispatch(auth(authType, email, password))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);