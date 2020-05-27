import React from 'react';

import Cola from '../assets/images/Drinks/cocacola.png';
import Sprite from '../assets/images/Drinks/sprite.jpg';
import Fanta from '../assets/images/Drinks/fanta.png';
import Pepsi from '../assets/images/Drinks/pepsi.png';
import Water from '../assets/images/Drinks/water.png';
import Juice from '../assets/images/Drinks/juice.jpg';

import blueberryIceCream from '../assets/images/Additionals/blueberryIceCream.png';
import frenchFries from '../assets/images/Additionals/frenchFries.png';
import wafelFries from '../assets/images/Additionals/wafelFries.png';
import friedCheese from '../assets/images/Additionals/friedCheese.png';
import chocolateIceCream from '../assets/images/Additionals/chocolateIceCream.png';
import strawberryIceCream from '../assets/images/Additionals/strawberryIceCream.png';

export const drinksAdditionalsSwitch = (type) => {

    let image = null;

    switch(type){
        case 'Cola':
            image = <img src={Cola} alt='a cup of Cola' className='Dimage'/>
            return image;
        case 'Sprite':
            image = <img src={Sprite} alt='a cup of Sprite' className='Dimage'/>
            return image;
        case 'Fanta':
            image = <img src={Fanta} alt='a cup of Fanta' className='Dimage'/>
            return image;
        case 'Pepsi':
            image = <img src={Pepsi} alt='a cup of Pepsi' className='Dimage'/>
            return image;
        case 'Water':
            image = <img src={Water} alt='a cup of Water' className='Dimage'/>
            return image;
        case 'Juice':
            image = <img src={Juice} alt='a cup of Juice' className='Dimage'/>
            return image;
        case 'friesFrench':
            image = <img src={frenchFries} alt='just some frenchFries' className='Aimage'/>
            return image;
        case 'wafelsFries':
            image = <img src={wafelFries} alt='just some wafelFries' className='Aimage'/>
            return image;
        case 'cheeseFried':
            image = <img src={friedCheese} alt='just some friedCheese' className='Aimage'/>
            return image;
        case 'chocolateIceCream':
            image = <img src={chocolateIceCream} alt='just some chocolateIceCream' className='Aimage'/>
            return image;
        case 'strawberryIceCream':
            image = <img src={strawberryIceCream} alt='just some strawberryIceCream' className='Aimage'/>
            return image;
        case 'blueberryIceCream':
            image = <img src={blueberryIceCream} alt='just some blueberryIceCream' className='Aimage'/>
            return image;
        default:
            image = null;
    }
}