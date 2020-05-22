import React from 'react';
import './Additionals.css';

import blueberryIceCream from '../../../assets/images/Additionals/blueberryIceCream.png';
import frenchFries from '../../../assets/images/Additionals/frenchFries.png';
import wafelFries from '../../../assets/images/Additionals/wafelFries.png';
// import onionRings from '../../../assets/images/Additionals/onionRings.png';
import friedCheese from '../../../assets/images/Additionals/friedCheese.png';
// import vanilaShake from '../../../assets/images/Additionals/vanilaShake.png';
// import chocolateShake from '../../../assets/images/Additionals/chocolateShake.png';
// import strawberryShake from '../../../assets/images/Additionals/strawberryShake.png';
// import blueberryShake from '../../../assets/images/Additionals/blueberryShake.png';
// import caramelaShake from '../../../assets/images/Additionals/caramelaShake.png';
import chocolateIceCream from '../../../assets/images/Additionals/chocolateIceCream.png';
import strawberryIceCream from '../../../assets/images/Additionals/strawberryIceCream.png';
// import caramelaIceCream from '../../../assets/images/Additionals/caramelaIceCream.png';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const additionals = (props) => {

    let image = null;

    switch(props.name){
        case 'frenchFries':
            image = <img src={frenchFries} alt='just some frenchFries' className='Aimage'/>
            break;
        case 'wafelFries':
            image = <img src={wafelFries} alt='just some wafelFries' className='Aimage'/>
            break;
        case 'friedCheese':
            image = <img src={friedCheese} alt='just some friedCheese' className='Aimage'/>
            break;
        case 'chocolateIceCream':
            image = <img src={chocolateIceCream} alt='just some chocolateIceCream' className='Aimage'/>
            break;
        case 'strawberryIceCream':
            image = <img src={strawberryIceCream} alt='just some strawberryIceCream' className='Aimage'/>
            break;
        case 'blueberryIceCream':
            image = <img src={blueberryIceCream} alt='just some blueberryIceCream' className='Aimage'/>
            break;
        default:
            image = null;
    }
    

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