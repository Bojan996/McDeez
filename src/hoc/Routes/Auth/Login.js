import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../../store/actions/auth';
import { withStyles } from '@material-ui/core/styles';
import './Login.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import TextField from '@material-ui/core/TextField';


const useStyles = theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    }
});


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
            <div className='LoginMainDiv'>
                <h1 style={{fontSize: '70px', fontWeight: '200', marginBottom: '80px'}}><i className="fas fa-user" style={{marginRight: '50px'}}></i>Login</h1>
                <form onSubmit={this.submitHandler} className='LoginForm'>
                    <TextField className='LoginTextFields' id="outlined-basic" required={true} label="Email" variant="outlined" onChange={(event) => this.emailHandler(event)}/>
                    <TextField className='LoginTextFields' id="outlined-basic" type='password' required={true} label="Password" variant="outlined" onChange={(event) => this.passwordHandler(event)}/>
                    <button className='LoginSubmitButton'>Submit</button>
                </form>
                <p><span>Don't have an account?</span> <span className='LoginRegisterSpan' onClick={() => this.props.history.push('/register')}>Sign Up <i className="fas fa-user-plus" style={{marginLeft: '10px'}}></i></span></p>
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


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles, { withTheme: true })(Login));