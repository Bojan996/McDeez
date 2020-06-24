import React, { Component } from 'react';
import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import { connect } from 'react-redux';
import NavHamburger from './NavigationHamburger/NavigationHamburger';
import NavDrawer from './NavDrawer/NavDrawer';


class NavBar extends Component {

    state = {
        dropDownOpen: null,
        navDrawer: false
    }

    NavDrawerHandler = () => {
        this.setState({navDrawer: !this.state.navDrawer});
    }

    clickHandler = (event) => {
        let selected = event.currentTarget;
        this.setState({dropDownOpen: selected});
    }

    closseHandler = () => {
        this.setState({dropDownOpen: null});
    }

    render() {

        return (
            <div className='NavContainer'>
                <NavDrawer show={this.state.navDrawer}/>
                <div className='LogoDiv'>
                    <NavHamburger className='NavBarMenuIcon' show={this.NavDrawerHandler}/>
                    <Logo className='NavBarLogo'/>
                </div>
                <div className='NavItemDiv'>
                    <div className='NavLeftDiv'>
                        <NavLink to='/' className='NavLi' exact activeStyle={{transform: 'scale(1.1)', borderBottom: '2px solid #FFDF82'}}>Home</NavLink>
                        <div className='NavDropDownDiv'>
                            <h2 style={{fontWeight: '400'}}>About <i style={{paddingLeft: '10px'}} className="fas fa-sort-down"></i></h2>
                            <div className='NavDropDownContent'>
                                <Link to='/locations' className='DropDownLinks'>Locations</Link>
                                <Link to='/history' className='DropDownLinks'>History</Link>
                                <Link to='/careers' className='DropDownLinks'>Careers</Link>
                            </div>
                        </div>
                        <NavLink to='/orders' exact activeStyle={{transform: 'scale(1.1)', borderBottom: '2px solid #FFDF82'}} className='NavLi'>Orders</NavLink>
                        <NavLink to='/foodmaker' exact activeStyle={{transform: 'scale(1.1)', borderBottom: '2px solid #FFDF82'}} className='NavLi'>Menu</NavLink>
                    </div>
                        {
                            this.props.isAuth ?
                            <div className='NavRightDiv'>
                            <NavLink to='/logout' exact activeStyle={{transform: 'scale(1.1)', borderBottom: '2px solid #FFDF82'}} className='NavLi' style={{paddingRight: '10px'}}><i className="fas fa-sign-out-alt"></i> Logout</NavLink>
                            </div>
                            :
                            <div className='NavRightDiv'>
                                <NavLink to='/login' exact activeStyle={{transform: 'scale(1.1)', borderBottom: '2px solid #FFDF82'}} className='NavLi'><i className="fas fa-sign-in-alt" style={{paddingRight: '10px'}}></i> Login</NavLink>
                                <NavLink to='/register' exact activeStyle={{transform: 'scale(1.1)', borderBottom: '2px solid #FFDF82'}} className='NavLi'><i className="fas fa-user-plus" style={{paddingRight: '10px'}}></i> Sign Up</NavLink>
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

export default connect(mapStateToProps)(NavBar);