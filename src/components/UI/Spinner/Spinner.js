import React from 'react';
import './Spinner.css';

const spinner = (props) => {
    return (
        <div className='loader' style={props.style}>
        </div>
    )
}

export default spinner;