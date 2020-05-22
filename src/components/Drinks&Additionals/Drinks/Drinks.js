import React from 'react';
import './Drinks.css';

import Cola from '../../../assets/images/Drinks/cocacola.png';
import Sprite from '../../../assets/images/Drinks/sprite.jpg';
import Fanta from '../../../assets/images/Drinks/fanta.png';
import Pepsi from '../../../assets/images/Drinks/pepsi.png';
import Water from '../../../assets/images/Drinks/water.png';
import Juice from '../../../assets/images/Drinks/juice.jpg';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const drinks = (props) => {

    let image = null;

    switch(props.name){
        case 'Cola':
            image = <img src={Cola} alt='a cup of Cola' className='Dimage'/>
            break;
        case 'Sprite':
            image = <img src={Sprite} alt='a cup of Sprite' className='Dimage'/>
            break;
        case 'Fanta':
            image = <img src={Fanta} alt='a cup of Fanta' className='Dimage'/>
            break;
        case 'Pepsi':
            image = <img src={Pepsi} alt='a cup of Pepsi' className='Dimage'/>
            break;
        case 'Water':
            image = <img src={Water} alt='a cup of Water' className='Dimage'/>
            break;
        case 'Juice':
            image = <img src={Juice} alt='a cup of Juice' className='Dimage'/>
            break;
        default:
            image = null;
    }

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