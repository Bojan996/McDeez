import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../../store/actions/auth';
import './Login.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import TextField from '@material-ui/core/TextField';


const login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        props.login('login', email, password);
    }

    let checkoutRedirect = null;
    if(props.isAuth && props.orders.length >= 1){
        checkoutRedirect = <Redirect to='/checkout'/>
    }else if(props.isAuth && props.orders.length === 0){
        checkoutRedirect = <Redirect to='/'/>
    }

    return (
        <div className='LoginMainDiv'>
            <h1 className='LoginMainHeader'><i className="fas fa-user" style={{marginRight: '50px'}}></i>Login</h1>
            <form onSubmit={submitHandler} className='LoginForm'>
                <TextField className='LoginTextFields' id="outlined-basic" required={true} label="Email" variant="outlined" onChange={(event) => setEmail(event.target.value)}/>
                <TextField className='LoginTextFields' id="outlined-basic" type='password' required={true} label="Password" variant="outlined" onChange={(event) => setPassword(event.target.value)}/>
                <button className='LoginSubmitButton'>{props.loading ? <Spinner style={{fontSize: '2px', color: '#FFCD39', margin: '0 auto', borderColor: 'white', borderLeftColor: 'rgb(233, 80, 53)', borderWidth: '4px'}}/> : 'Submit'}</button>
            </form>
            <p><span>Don't have an account?</span> <span className='LoginRegisterSpan' onClick={() => props.history.push('/register')}>Sign Up <i className="fas fa-user-plus" style={{marginLeft: '10px'}}></i></span></p>
            {checkoutRedirect}
        </div>
    )
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


export default connect(mapStateToProps, mapDispatchToProps)(login);