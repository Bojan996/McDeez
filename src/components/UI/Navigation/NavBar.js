import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import './NavBar.css';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';


class NavBar extends Component {

    state = {
        dropDownOpen: null
    }

    clickHandler = (event) => {
        let selected = event.currentTarget;
        this.setState({dropDownOpen: selected});
    }

    closseHandler = () => {
        this.setState({dropDownOpen: null});
    }

    render() {

        const buttonStyle = {
            textDecoration: 'none',
            padding: '10px 20px 0 20px',
            height: '100%',
            fontSize: '20px',
            fontWeight: '200',
            color: 'black'
        }

        return (
            <div className='NavContainer'>
                <div className='LogoDiv'>
                    <Logo/>
                </div>
                <div className='NavItemDiv'>
                    <div className='NavLeftDiv'>
                        <NavLink to='/' className='NavLi' exact activeStyle={{backgroundColor: 'rgb(236, 236, 236)', borderBottom: '2px solid rgb(0, 183, 255)'}}>Home</NavLink>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => this.clickHandler(event)} style={buttonStyle}>About</Button>
                            <Menu id="simple-menu" anchorEl={this.state.dropDownOpen} keepMounted open={Boolean(this.state.dropDownOpen)} onClose={this.closseHandler}>
                                <MenuItem onClick={this.closseHandler}><Link to='/'>What We Do?</Link></MenuItem>
                                <MenuItem onClick={this.closseHandler}><Link to='/'>History</Link></MenuItem>
                                <MenuItem onClick={this.closseHandler}><Link to='/'>Careers</Link></MenuItem>
                            </Menu>
                        <NavLink to='/orders' exact activeStyle={{backgroundColor: 'rgb(236, 236, 236)', borderBottom: '2px solid rgb(0, 183, 255)'}} className='NavLi'>Orders</NavLink>
                        <NavLink to='/foodmaker' exact activeStyle={{backgroundColor: 'rgb(236, 236, 236)', borderBottom: '2px solid rgb(0, 183, 255)'}} className='NavLi'>Make your Dish!</NavLink>
                    </div>
                        {
                            this.props.isAuth ?
                            <div className='NavRightDiv'>
                            <NavLink to='/logout' exact activeStyle={{backgroundColor: 'rgb(236, 236, 236)', borderBottom: '2px solid rgb(0, 183, 255)'}} className='NavLi'>Logout</NavLink>
                            </div>
                            :
                            <div className='NavRightDiv'>
                                <NavLink to='/login' exact activeStyle={{backgroundColor: 'rgb(236, 236, 236)', borderBottom: '2px solid rgb(0, 183, 255)'}} className='NavLi'>Login</NavLink>
                                <NavLink to='/register' exact activeStyle={{backgroundColor: 'rgb(236, 236, 236)', borderBottom: '2px solid rgb(0, 183, 255)'}} className='NavLi'>SignUp</NavLink>
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