import React, { Component } from 'react';
import './Register.css';
import { connect } from 'react-redux';
import { auth } from '../../../store/actions/auth';
import Spinner from '../../../components/UI/Spinner/Spinner';


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
        if(this.props.isAuth){
            if(this.props.orders.length >= 1){
                this.props.history.replace('/checkout');
            }else{
                this.props.history.replace('/');
            }
        }
    }


    render(){

        let loader = this.props.loading ? <Spinner style={{backgroundColor: 'white'}}/> : null;

        return (
            <div className='RMainDiv'>
                <form onSubmit={this.submitHandler}>
                    <input type='email' placeholder='email' onChange={(event) => this.emailHandler(event)}/>
                    <input type='password' placeholder='password' onChange={(event) => this.passwordHandler(event)}/>
                    <button>Submit</button>
                </form>
                {loader}
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
        register: (authType, email, password) => dispatch(auth(authType, email, password))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);