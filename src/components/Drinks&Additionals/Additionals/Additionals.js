import React from 'react';
import './Additionals.css';
import { drinksAdditionalsSwitch } from '../../../helpers/switchStatements';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const additionals = (props) => {

    let image = drinksAdditionalsSwitch(props.name, 'Food Maker');
    
    return (
        <div className='AAdditionalsContainer'>
            <div className='AImgPrice'>
                {image}
                <h2>{props.price}$</h2>
            </div>
            <div className='AAddRemove'>
                <RemoveIcon color='error' fontSize='large' className='APlusMinus' onClick={() => props.clicked(props.name, 'remove', 'additionals')}/>
                <h2 style={{fontSize: '30px'}}>{props.amount}</h2>
                <AddIcon color='error' fontSize='large' className='APlusMinus' onClick={() => props.clicked(props.name, 'add', 'additionals')}/>
            </div>
        </div>
    )
}


export default additionals;