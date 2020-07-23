import React from 'react';
import './Backdrop.css'


const backdrop = (props) => {

    return (
        props.showDrawer || props.showBuilder ? <div className='Backdrop' onClick={props.showDrawer ? props.close : null}></div> : null
    )
}


export default backdrop;