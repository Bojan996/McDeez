import React from 'react';
import McDeezLogo from '../../assets/images/McDeez-logo.png';
import { Link } from 'react-router-dom';


const Logo = props => {
    return (
        <Link to='/'> 
            <div className='DivOfImg'>
                <img src={McDeezLogo} alt='The official McDeez logo'/>
            </div>
        </Link>
    );
}


export default Logo;