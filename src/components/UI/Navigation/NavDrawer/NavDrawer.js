import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../../../Logo/Logo';
import './NavDrawer.css';


class NavDrawer extends Component {

    render() {

        let style = {
            transform: this.props.show ? 'translateX(0)' : 'translateX(-101%)'
        }

        let activeStyle = {
            transform: 'scale(1.1)', 
            borderBottom: '2px solid #E95035',
            margin: '20px 10px',
            width: '50%'
        }

        return (
            <div className='NavDrawerContainer' style={style}>
                <Logo className='NavDrawerLogo'/>
                <div className='NavDrawerContent'>
                    <NavLink to='/' className='NavDrawerLi' exact activeStyle={activeStyle}>Home</NavLink>
                    <NavLink to='/foodmaker' className='NavDrawerLi' exact activeStyle={activeStyle}>Menu</NavLink>
                    <NavLink to='/orders' className='NavDrawerLi' exact activeStyle={activeStyle}>Orders</NavLink>
                    <NavLink to='/locations' className='NavDrawerLi' exact activeStyle={activeStyle}>Locations</NavLink>
                    <NavLink to='/history' className='NavDrawerLi' exact activeStyle={activeStyle}>History</NavLink>
                    <NavLink to='/careers' className='NavDrawerLi' exact activeStyle={activeStyle}>Careers</NavLink>
                    {
                        this.props.isAuth ?
                            <NavLink to='/logout' exact activeStyle={activeStyle} className='NavDrawerIsAuth' style={{paddingRight: '10px'}}><i className="fas fa-sign-out-alt"></i> Logout</NavLink>
                        :
                        <div className='NavDrawerIsNotAuth'>
                            <NavLink to='/login' exact activeStyle={activeStyle} className='NavDrawerLi'><i className="fas fa-sign-in-alt" style={{paddingRight: '10px'}}></i> Login</NavLink>
                            <NavLink to='/register' exact activeStyle={activeStyle} className='NavDrawerLi'><i className="fas fa-user-plus" style={{paddingRight: '10px'}}></i> Sign Up</NavLink>
                        </div>
                    }
                </div>
            </div>
        )

    }
} 


const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps)(NavDrawer);