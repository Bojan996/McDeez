import React from 'react';
import './Additionals.css';
import { drinksAdditionalsSwitch } from '../../../helpers/switchStatements';

// import onionRings from '../../../assets/images/Additionals/onionRings.png';
// import vanilaShake from '../../../assets/images/Additionals/vanilaShake.png';
// import chocolateShake from '../../../assets/images/Additionals/chocolateShake.png';
// import strawberryShake from '../../../assets/images/Additionals/strawberryShake.png';
// import blueberryShake from '../../../assets/images/Additionals/blueberryShake.png';
// import caramelaShake from '../../../assets/images/Additionals/caramelaShake.png';
// import caramelaIceCream from '../../../assets/images/Additionals/caramelaIceCream.png';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const additionals = (props) => {

    let image = drinksAdditionalsSwitch(props.name);
    
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