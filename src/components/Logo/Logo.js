import React from 'react';
import McDeezLogo from '../../assets/images/McDeez-logo.png';
import './Logo.css';
import { Link } from 'react-router-dom';


const Logo = props => {
    return (
        <Link to='/'> 
            <img src={McDeezLogo} alt='The official McDeez logo' className={props.class}/>
        </Link>
    );
}


export default Logo;