import React from 'react';

import Bacon from '../../../../assets/images/ingredients/Pizza/baconPizza.svg';
import Corn from '../../../../assets/images/ingredients/Pizza/cornPizza.svg';
import Ham from '../../../../assets/images/ingredients/Pizza/hamPizza.svg';
import Mozzarella from '../../../../assets/images/ingredients/Pizza/mozzarellaPizza.svg';
import Mushroom from '../../../../assets/images/ingredients/Pizza/mushroomPizza.svg';
import Olive from '../../../../assets/images/ingredients/Pizza/olivePizza.svg';
import Onion from '../../../../assets/images/ingredients/Pizza/onionPizza.svg';
import Parmesan from '../../../../assets/images/ingredients/Pizza/parmesanPizza.svg';
import Sausage from '../../../../assets/images/ingredients/Pizza/sausagePizza.svg';
import TomatoSauce from '../../../../assets/images/ingredients/Pizza/tomatoSaucePizza.svg';
import Tomato from '../../../../assets/images/ingredients/Pizza/tomatoPizza.svg';
import Tuna from '../../../../assets/images/ingredients/Pizza/tunaPizza.svg';
import Ketchup from '../../../../assets/images/ingredients/Pizza/ketchupPizza.svg';
import Mayo from '../../../../assets/images/ingredients/Pizza/mayoPizza.svg';
import BurgerSauce from '../../../../assets/images/ingredients/Pizza/burgerSaucePizza.svg';
import McdeezSecretSauce from '../../../../assets/images/ingredients/Pizza/mcdeezSecretSaucePizza.svg';




const PizzaBuilder = (props) => {

    switch(props.ingredient){
        case 'tomatoSauce':
            return <img src={TomatoSauce} alt='burger ingredients' style={{zIndex: '0'}} onClick={props.clicked}/>
        case 'mozzarella':
            return <img src={Mozzarella} alt='burger ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'parmesan':
            return <img src={Parmesan} alt='burger ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'ham':
            return <img src={Ham} alt='burger ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'sausage':
            return <img src={Sausage} alt='burger ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'bacon':
            return <img src={Bacon} alt='burger ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'tuna':
            return <img src={Tuna} alt='burger ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'mushroom':
            return <img src={Mushroom} alt='burger ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'onion':
            return <img src={Onion} alt='burger ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'olive':
            return <img src={Olive} alt='burger ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'tomato':
            return <img src={Tomato} alt='burger ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'corn':
            return <img src={Corn} alt='burger ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'ketchup':
            return <img src={Ketchup} alt='burger ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'mayo':
            return <img src={Mayo} alt='burger ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'burgerSauce':
            return <img src={BurgerSauce} alt='burger ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'mcdeezSecretSauce':
            return <img src={McdeezSecretSauce} alt='burger ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        default: 
            return null;
    }

}

export default PizzaBuilder;