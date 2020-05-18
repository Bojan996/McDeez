import React from 'react';

import Salad from '../../../../assets/images/ingredients/Burger/saladBurger.svg';
import Meet from '../../../../assets/images/ingredients/Burger/meetBurger.svg';
import Cheese from '../../../../assets/images/ingredients/Burger/cheeseBurger.svg';
import Onion from '../../../../assets/images/ingredients/Burger/onionBurger.svg';
import Ketchup from '../../../../assets/images/ingredients/Burger/ketchupBurger.svg';
import McdeezSecretSauce from '../../../../assets/images/ingredients/Burger/mcdeezSecretSauceBurger.svg';
import Pickle from '../../../../assets/images/ingredients/Burger/pickleBurger.svg';
import Tomato from '../../../../assets/images/ingredients/Burger/tomatoBurger.svg';
import Bacon from '../../../../assets/images/ingredients/Burger/baconBurger.svg';
import BbqSauce from '../../../../assets/images/ingredients/Burger/bbqSauceBurger.svg';
import BurgerSauce from '../../../../assets/images/ingredients/Burger/burgerSauceBurger.svg';
import Mayo from '../../../../assets/images/ingredients/Burger/mayoBurger.svg';
import Bread from '../../../../assets/images/ingredients/Burger/breadBurger.svg';



const BurgerBuilder = (props) => {

    switch(props.ingredient){
        case 'salad':
            return <img src={Salad} alt='burger ingredients' onClick={props.clicked}/>
        case 'meet':
            return <img src={Meet} alt='burger ingredients' onClick={props.clicked}/>
        case 'bacon':
            return <img src={Bacon} alt='burger ingredients' onClick={props.clicked}/>
        case 'cheese':
            return <img src={Cheese} alt='burger ingredients' onClick={props.clicked}/>
        case 'onion':
            return <img src={Onion} alt='burger ingredients' onClick={props.clicked}/>
        case 'pickle':
            return <img src={Pickle} alt='burger ingredients' onClick={props.clicked}/>
        case 'tomato':
            return <img src={Tomato} alt='burger ingredients' onClick={props.clicked}/>
        case 'ketchup':
            return <img src={Ketchup} alt='burger ingredients' onClick={props.clicked}/>
        case 'mayo':
            return <img src={Mayo} alt='burger ingredients' onClick={props.clicked}/>
        case 'bbqSauce':
            return <img src={BbqSauce} alt='burger ingredients' onClick={props.clicked}/>
        case 'burgerSauce':
            return <img src={BurgerSauce} alt='burger ingredients' onClick={props.clicked}/>
        case 'mcdeezSecretSauce':
            return <img src={McdeezSecretSauce} alt='burger ingredients' onClick={props.clicked}/>
        case 'bread':
            return <img src={Bread} alt='burger ingredients' onClick={props.clicked}/>
        default: 
            return null;
    }

}

export default BurgerBuilder;
