import React, { Component } from 'react';
import './Register.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../../store/actions/auth';
import Spinner from '../../../components/UI/Spinner/Spinner';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';


const useStyles = theme => ({
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
});


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

        const { classes } = this.props;

        let checkoutRedirect = null;      
        let loader = this.props.loading ? <Spinner style={{backgroundColor: 'white'}}/> : null;

        if(this.props.isAuth && this.props.orders.length >= 1){
            checkoutRedirect = <Redirect to='/checkout'/>
        }else if(this.props.isAuth && this.props.orders.length === 0){
            checkoutRedirect = <Redirect to='/'/>
        }

        return (
            <div className='RegisterMainDiv'>
                <h1 style={{fontSize: '70px', fontWeight: '200', marginBottom: '80px'}}><i className="fas fa-user-plus" style={{marginRight: '50px'}}></i>Sign Up</h1>
                <form onSubmit={this.submitHandler} className='RegisterForm'>
                <div className='RegisterFormUserPassDiv'>
                    <TextField className='RegisterTextFieldsUserPass' id="outlined-basic" required={true} label="Email" variant="outlined" onChange={(event) => this.emailHandler(event)}/>
                    <TextField className='RegisterTextFieldsUserPass' id="outlined-basic" required={true} label="Password" type='password' variant="outlined" onChange={(event) => this.passwordHandler(event)}/> 
                </div>  
                <TextField className='RegisterTextFieldsAdresses' id="outlined-basic" required={true} label="Address" variant="outlined"/>
                <TextField className='RegisterTextFieldsAdresses' id="outlined-basic" required={true} label="Address Details" helperText="Apartment, studio, or floor" variant="outlined"/>
                <div className='RegisterFormCountryDiv'>
                <FormControl variant="outlined" className={classes.formControl}>
                    <Select native>
                        <option>Serbia</option>
                        <option>United States of America</option>
                        <option>Germany</option>
                        <option>Spain</option>
                        <option>Italy</option>
                        <option>China</option>
                        <option>Russia</option>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <Select native>
                        <option>Belgrade</option>
                        <option>Washington DC</option>
                        <option>Munchen</option>
                        <option>Madrid</option>
                        <option>Rome</option>
                        <option>Beijing</option>
                        <option>Moscow</option>
                    </Select>
                </FormControl>
                    <TextField className='RegisterTextFieldZip' id="outlined-basic" required={true} label="Zip" variant="outlined"/>
                </div>
                <button className='RegisterSubmitButton'>Submit</button>
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
        register: (authType, email, password) => dispatch(auth(authType, email, password))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles, { withTheme: true })(Register));