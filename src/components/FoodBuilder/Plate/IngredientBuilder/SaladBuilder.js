import React from 'react';

import BaconSalad from '../../../../assets/images/ingredients/Salad/baconSalad.svg';
import BurgerDressingSalad from '../../../../assets/images/ingredients/Salad/burgerDressingSalad.svg';
import ChickenBreastSalad from '../../../../assets/images/ingredients/Salad/chickenBreastSalad.svg';
import CornSalad from '../../../../assets/images/ingredients/Salad/cornSalad.svg';
import CucumberSalad from '../../../../assets/images/ingredients/Salad/cucumberSalad.svg';
import HoneyDressingSalad from '../../../../assets/images/ingredients/Salad/honeyDressingSalad.svg';
import LettuceSalad from '../../../../assets/images/ingredients/Salad/lettuceSalad.svg';
import OliveSalad from '../../../../assets/images/ingredients/Salad/oliveSalad.svg';
import OnionSalad from '../../../../assets/images/ingredients/Salad/onionSalad.svg';
import PestoDressingSalad from '../../../../assets/images/ingredients/Salad/pestoDressingSalad.svg';
import SalmonSalad from '../../../../assets/images/ingredients/Salad/salmonSalad.svg';
import SpinachSalad from '../../../../assets/images/ingredients/Salad/spinachSalad.svg';
import SteakSalad from '../../../../assets/images/ingredients/Salad/steakSalad.svg';
import TomatoSalad from '../../../../assets/images/ingredients/Salad/tomatoSalad.svg';
import TunaSalad from '../../../../assets/images/ingredients/Salad/tunaSalad.svg';
import WhiteCheeseSalad from '../../../../assets/images/ingredients/Salad/whiteCheeseSalad.svg';





const SaladBuilder = (props) => {

    switch(props.ingredient){
        case 'tomato':
            return <img src={TomatoSalad} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'lettuce':
            return <img src={LettuceSalad} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'cucumber':
            return <img src={CucumberSalad} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'spinach':
            return <img src={SpinachSalad} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'olive':
            return <img src={OliveSalad} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'onion':
            return <img src={OnionSalad} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'corn':
            return <img src={CornSalad} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'whiteCheese':
            return <img src={WhiteCheeseSalad} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'chickenBreast':
            return <img src={ChickenBreastSalad} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'steak':
            return <img src={SteakSalad} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'bacon':
            return <img src={BaconSalad} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'tuna':
            return <img src={TunaSalad} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'slamon':
            return <img src={SalmonSalad} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'honeyDressing':
            return <img src={HoneyDressingSalad} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'burgerDressing':
            return <img src={BurgerDressingSalad} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        case 'pestoDressing':
            return <img src={PestoDressingSalad} alt='salad ingredients' style={{zIndex: props.style}} onClick={props.clicked}/>
        default: 
            return null;
    }

}

export default SaladBuilder;