import React from 'react';
import './Drinks.css';
import { drinksAdditionalsSwitch } from '../../../helpers/switchStatements';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const drinks = (props) => {

    let image = drinksAdditionalsSwitch(props.name, 'Food Maker');

    return (
        <div className='DDrinksContainer'>
            <div className='DImgPrice'>
                {image}
                <h2>{props.price}$</h2>
            </div>
            <div className='DAddRemove'>
                <RemoveIcon color='error' fontSize='large' className='DPlusMinus' onClick={() => props.clicked(props.name, 'remove', 'drinks')}/>
                <h2 style={{fontSize: '30px'}}>{props.amount}</h2>
                <AddIcon color='error' fontSize='large' className='DPlusMinus' onClick={() => props.clicked(props.name, 'add', 'drinks')}/>
            </div>
        </div>
    )
}


export default drinks;