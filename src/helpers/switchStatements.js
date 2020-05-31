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

//MenuDrawer

import cheeseBurger from '../assets/images/menuDrawer/cheeseBurger.jpg';
import bbqBurger from '../assets/images/menuDrawer/fatBoyBurger.jpg';
import caesarSalad from '../assets/images/menuDrawer/caesar.jpeg';
import candyWafel from '../assets/images/menuDrawer/candyWafel.jpg';
import capricciosa from '../assets/images/menuDrawer/capricciosa.jpg';
import chocolateDeath from '../assets/images/menuDrawer/chocolateDeath.jpg';
import fatBoyBurger from '../assets/images/menuDrawer/bbqBurger.jpg';
import frutyWafel from '../assets/images/menuDrawer/frutyWafel.jpg';
import iceCreamMadness from '../assets/images/menuDrawer/iceCreamMadness.jpg';
import margherita from '../assets/images/menuDrawer/margherita.jpeg';
import meatPizza from '../assets/images/menuDrawer/meatPizza.jpg';
import oyster from '../assets/images/menuDrawer/oyster.jpg';
import pepperoni from '../assets/images/menuDrawer/pepperoni.jpg';
import salmonRice from '../assets/images/menuDrawer/salmonRice.jpeg';
import tuna from '../assets/images/menuDrawer/tuna.jpg';
import veggieBurger from '../assets/images/menuDrawer/veggieBurger.jpg';

export const drinksAdditionalsSwitch = (type) => {

    let image = null;

    switch(type){
        case 'Cola':
            image = <img src={Cola} alt='a cup of Cola' className='FDDrinks'/>
            return image;
        case 'Sprite':
            image = <img src={Sprite} alt='a cup of Sprite' className='FDDrinks'/>
            return image;
        case 'Fanta':
            image = <img src={Fanta} alt='a cup of Fanta' className='FDDrinks'/>
            return image;
        case 'Pepsi':
            image = <img src={Pepsi} alt='a cup of Pepsi' className='FDDrinks'/>
            return image;
        case 'Water':
            image = <img src={Water} alt='a cup of Water' className='FDDrinks'/>
            return image;
        case 'Juice':
            image = <img src={Juice} alt='a cup of Juice' className='FDDrinks'/>
            return image;
        case 'friesFrench':
            image = <img src={frenchFries} alt='just some frenchFries' className='FDAdditionals'/>
            return image;
        case 'wafelsFries':
            image = <img src={wafelFries} alt='just some wafelFries' className='FDAdditionals'/>
            return image;
        case 'cheeseFried':
            image = <img src={friedCheese} alt='just some friedCheese' className='FDAdditionals'/>
            return image;
        case 'chocolateIceCream':
            image = <img src={chocolateIceCream} alt='just some chocolateIceCream' className='FDAdditionals'/>
            return image;
        case 'strawberryIceCream':
            image = <img src={strawberryIceCream} alt='just some strawberryIceCream' className='FDAdditionals'/>
            return image;
        case 'blueberryIceCream':
            image = <img src={blueberryIceCream} alt='just some blueberryIceCream' className='FDAdditionals'/>
            return image;
        default:
            image = null;
    }
}


export const whichDrawer = (type) => {
    let image = null;

    switch(type){
        case 'Dubble Cheese Burger':
            image = <img src={cheeseBurger} alt='a Dubble Cheese Burger' className='DrawerImage'/>
            return image;
        case 'BBQ Burger':
            image = <img src={bbqBurger} alt='a BBQ Burger' className='DrawerImage'/>
            return image;
        case 'Fat Boy Burger':
            image = <img src={fatBoyBurger} alt='a Fat Boy Burger' className='DrawerImage'/>
            return image;
        case 'Vegie Bruger':
            image = <img src={veggieBurger} alt='a Vegie Bruger' className='DrawerImage'/>
            return image;
        case 'Capricciosa':
            image = <img src={capricciosa} alt='a Capricciosa' className='DrawerImage'/>
            return image;
        case 'Margherita':
            image = <img src={margherita} alt='a Margherita' className='DrawerImage'/>
            return image;
        case 'Meat Pizza':
            image = <img src={meatPizza} alt='just Meat Pizza' className='DrawerImage'/>
            return image;
        case 'Pepperoni Pizza':
            image = <img src={pepperoni} alt='just Pepperoni Pizza' className='DrawerImage'/>
            return image;
        case 'Cesar Salad':
            image = <img src={caesarSalad} alt='just Cesar Salad' className='DrawerImage'/>
            return image;
        case 'Salmon and Rice':
            image = <img src={salmonRice} alt='just Salmon and Rice' className='DrawerImage'/>
            return image;
        case 'Tuna Salad':
            image = <img src={tuna} alt='just Tuna Salad' className='DrawerImage'/>
            return image;
        case 'Oyster Speacial':
            image = <img src={oyster} alt='just Oyster Speacial' className='DrawerImage'/>
            return image;
        case 'Chocolate Death':
            image = <img src={chocolateDeath} alt='just Chocolate Death"' className='DrawerImage'/>
            return image;
        case 'Ice Cream Madness':
            image = <img src={iceCreamMadness} alt='just Ice Cream Madness' className='DrawerImage'/>
            return image;
        case 'Fruity Wafel':
            image = <img src={frutyWafel} alt='just Fruity Wafel' className='DrawerImage'/>
            return image;
        case 'Candy Wafel':
            image = <img src={candyWafel} alt='just Oyster Speacial' className='DrawerImage'/>
            return image;
        default:
            image = null;
    }
}