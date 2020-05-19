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
            padding: '10px'
        }

        return (
            <div className='NavContainer'>
                <div className='LogoDiv'>
                    <Logo class='ForNav'/>
                </div>
                <div className='NavItemDiv'>
                    <ul className='NavUnorderedList'>
                        <NavLink to='/' className='NavLi'>Home</NavLink>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => this.clickHandler(event)} style={buttonStyle}>About</Button>
                            <Menu id="simple-menu" anchorEl={this.state.dropDownOpen} keepMounted open={Boolean(this.state.dropDownOpen)} onClose={this.closseHandler}>
                                <MenuItem onClick={this.closseHandler}><Link to='/'>What We Do?</Link></MenuItem>
                                <MenuItem onClick={this.closseHandler}><Link to='/'>History</Link></MenuItem>
                                <MenuItem onClick={this.closseHandler}><Link to='/'>Careers</Link></MenuItem>
                            </Menu>
                        <NavLink to='/orders' className='NavLi'>Orders</NavLink>
                        <NavLink to='/foodmaker' className='NavLi'>Make your Dish!</NavLink>
                            {
                                this.props.isAuth ?
                                <NavLink to='/logout' className='NavLi'>Logout</NavLink>
                                :
                                <div>
                                    <NavLink to='/login' className='NavLi'>Login</NavLink>
                                    <NavLink to='/register' className='NavLi'>SignUp</NavLink>
                                </div>
                            }
                    </ul>
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