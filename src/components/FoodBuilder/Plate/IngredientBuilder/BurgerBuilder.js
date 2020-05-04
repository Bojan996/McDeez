import React from 'react';
import './IngredientBuilder.css';

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



const BurgerBuilder = (props) => {

    switch(props.ingredients){
        case 'salad':
            return <img src={Salad} alt='burger ingredients' className='IBBurgerImg'/>
        case 'meet':
            return <img src={Meet} alt='burger ingredients' className='IBBurgerImg'/>
        case 'bacon':
            return <img src={Bacon} alt='burger ingredients' className='IBBurgerImg'/>
        case 'cheese':
            return <img src={Cheese} alt='burger ingredients' className='IBBurgerImg'/>
        case 'onion':
            return <img src={Onion} alt='burger ingredients' className='IBBurgerImg'/>
        case 'pickle':
            return <img src={Pickle} alt='burger ingredients' className='IBBurgerImg'/>
        case 'tomato':
            return <img src={Tomato} alt='burger ingredients' className='IBBurgerImg'/>
        case 'ketchup':
            return <img src={Ketchup} alt='burger ingredients' className='IBBurgerImg'/>
        case 'mayo':
            return <img src={Mayo} alt='burger ingredients' className='IBBurgerImg'/>
        case 'bbqSauce':
            return <img src={BbqSauce} alt='burger ingredients' className='IBBurgerImg'/>
        case 'burgerSauce':
            return <img src={BurgerSauce} alt='burger ingredients' className='IBBurgerImg'/>
        case 'mcdeezSecretSauce':
            return <img src={McdeezSecretSauce} alt='burger ingredients' className='IBBurgerImg'/>
        default: 
            return null;
    }

}

export default BurgerBuilder;
