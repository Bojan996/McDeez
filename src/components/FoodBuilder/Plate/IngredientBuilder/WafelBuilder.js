import React from 'react';

import Nutela from '../../../../assets/images/ingredients/Wafel/nutelaWafel.svg';
import Honey from '../../../../assets/images/ingredients/Wafel/honeyWafel.svg';
import StrawberryJam from '../../../../assets/images/ingredients/Wafel/strawberryJamWafel.svg';
import BlueberryJam from '../../../../assets/images/ingredients/Wafel/blueberryJamWafel.svg';
import Blueberry from '../../../../assets/images/ingredients/Wafel/blueberryWafel.svg';
import PeachJam from '../../../../assets/images/ingredients/Wafel/peachJamWafel.svg';
import Strawberry from '../../../../assets/images/ingredients/Wafel/strawberryWafel.svg';
import Apple from '../../../../assets/images/ingredients/Wafel/appleWafel.svg';
import Banana from '../../../../assets/images/ingredients/Wafel/bananaWafel.svg';
import Biscuit from '../../../../assets/images/ingredients/Wafel/biscuitWafel.svg';
import Cherry from '../../../../assets/images/ingredients/Wafel/cherryWafel.svg';
import ChocolateChips from '../../../../assets/images/ingredients/Wafel/chocolateChipsWafel.svg';
import Kitkat from '../../../../assets/images/ingredients/Wafel/kitkatWafel.svg';
import Oreo from '../../../../assets/images/ingredients/Wafel/oreoWafel.svg';
import Peach from '../../../../assets/images/ingredients/Wafel/peachWafel.svg';
import Pineapple from '../../../../assets/images/ingredients/Wafel/pineappleWafel.svg';
import Sprinkles from '../../../../assets/images/ingredients/Wafel/sprinklesWafel.svg';





const SaladBuilder = (props) => {

    switch(props.ingredient){
        case 'nutela':
            return <img src={Nutela} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'honey':
            return <img src={Honey} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'strawberryJam':
            return <img src={StrawberryJam} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'blueberryJam':
            return <img src={BlueberryJam} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'peachJam':
            return <img src={PeachJam} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'strawberry':
            return <img src={Strawberry} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'biscuit':
            return <img src={Biscuit} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'apple':
            return <img src={Apple} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'cherry':
            return <img src={Cherry} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'banana':
            return <img src={Banana} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'chocolateChips':
            return <img src={ChocolateChips} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'kitkat':
            return <img src={Kitkat} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'oreo':
            return <img src={Oreo} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'peach':
            return <img src={Peach} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'pineapple':
            return <img src={Pineapple} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'sprinkles':
            return <img src={Sprinkles} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'blueberry':
            return <img src={Blueberry} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        default: 
            return null;
    }

}

export default SaladBuilder;