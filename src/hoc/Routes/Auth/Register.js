import React, { useState } from 'react';
import './Register.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../../store/actions/auth';
import Spinner from '../../../components/UI/Spinner/Spinner';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles( theme => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
      }
}));


const register = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const classes = useStyles();

    const submitHandler = (event) => {
        event.preventDefault();
        props.register('register', email, password);
        if(props.isAuth){
            if(props.orders.length >= 1){
                props.history.replace('/checkout');
            }else{
                props.history.replace('/');
            }
        }
    }

    let checkoutRedirect = null;
    if(props.isAuth && props.orders.length >= 1){
        checkoutRedirect = <Redirect to='/checkout'/>
    }else if(props.isAuth && props.orders.length === 0){
        checkoutRedirect = <Redirect to='/'/>
    }

    return (
        <div className='RegisterMainDiv'>
            <h1 className='RegisterMainHeader'><i className="fas fa-user-plus" style={{marginRight: '50px'}}></i>Sign Up</h1>
            <form onSubmit={submitHandler} className='RegisterForm'>
            <div className='RegisterFormUserPassDiv'>
                <TextField className='RegisterTextFieldsUserPass' id="outlined-basic" required={true} label="Email" variant="outlined" onChange={(event) => setEmail(event.target.value)}/>
                <TextField className='RegisterTextFieldsUserPass' id="outlined-basic" required={true} label="Password" type='password' variant="outlined" onChange={(event) => setPassword(event.target.value)}/> 
            </div>  
            <TextField className='RegisterTextFieldsAdresses' id="outlined-basic" required={true} label="Address" variant="outlined"/>
            <TextField className='RegisterTextFieldsAdresses' id="outlined-basic" required={true} label="Address Details" helperText="Floor and Apartment Number" variant="outlined"/>
            <div className='RegisterFormCountryDiv'>
            <FormControl variant="outlined" className={classes.formControl}>
                <Select native>
                    <option>Serbia</option>
                    <option>USA</option>
                    <option>Germany</option>
                    <option>Spain</option>
                    <option>Italy</option>
                    <option>China</option>
                    <option>Russia</option>
                    <option>Japan</option>
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <Select native>
                    <option>Belgrade</option>
                    <option>Washington</option>
                    <option>Munich</option>
                    <option>Madrid</option>
                    <option>Rome</option>
                    <option>Beijing</option>
                    <option>Moscow</option>
                    <option>Tokyo</option>
                </Select>
            </FormControl>
                <TextField className='RegisterTextFieldZip' id="outlined-basic" required={true} label="Zip" variant="outlined"/>
            </div>
            <button className='RegisterSubmitButton'>{props.loading ? <Spinner style={{fontSize: '2px', color: '#FFCD39', margin: '0 auto', borderColor: 'white', borderLeftColor: 'rgb(0, 140, 255)', borderWidth: '4px'}}/> : 'Submit'}</button>
            </form>
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
        register: (authType, email, password) => dispatch(auth(authType, email, password))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(register);