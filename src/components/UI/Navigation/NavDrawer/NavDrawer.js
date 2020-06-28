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
            margin: '10px 0 10px 20px',
            width: '50%'
        }

        return (
            <div className='NavDrawerContainer' style={style}>
                <Logo className='NavDrawerLogo'/>
                <div className='NavDrawerContent'>
                    <div className='NavDrawerContentPages'>
                        <NavLink to='/' className='NavDrawerLi' exact activeStyle={activeStyle} onClick={this.props.close}>Home</NavLink>
                        <NavLink to='/foodmaker' className='NavDrawerLi' exact activeStyle={activeStyle} onClick={this.props.close}>Menu</NavLink>
                        <NavLink to='/orders' className='NavDrawerLi' exact activeStyle={activeStyle} onClick={this.props.close}>Orders</NavLink>
                        <NavLink to='/locations' className='NavDrawerLi' exact activeStyle={activeStyle} onClick={this.props.close}>Locations</NavLink>
                        <NavLink to='/history' className='NavDrawerLi' exact activeStyle={activeStyle} onClick={this.props.close}>History</NavLink>
                        <NavLink to='/careers' className='NavDrawerLi' exact activeStyle={activeStyle} onClick={this.props.close}>Careers</NavLink>
                    </div>
                    <div className='NavDrawerContentAuth'>
                        {
                            this.props.isAuth ?
                                <NavLink to='/logout' exact activeStyle={activeStyle} className='NavDrawerIsAuth' style={{paddingRight: '10px'}} onClick={this.props.close}><i className="fas fa-sign-out-alt"></i> Logout</NavLink>
                            :
                            <div className='NavDrawerIsNotAuth'>
                                <NavLink to='/login' exact activeStyle={activeStyle} className='NavDrawerLi'><i className="fas fa-sign-in-alt" style={{paddingRight: '10px'}} onClick={this.props.close}></i> Login</NavLink>
                                <NavLink to='/register' exact activeStyle={activeStyle} className='NavDrawerLi'><i className="fas fa-user-plus" style={{paddingRight: '10px'}} onClick={this.props.close}></i> Sign Up</NavLink>
                            </div>
                        }
                    </div>
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