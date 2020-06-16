import React from 'react';

//Drinks And Additionals

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

//Food Builder

import BurgerBuilder from '../components/FoodBuilder/Plate/IngredientBuilder/BurgerBuilder';
import PizzaBuilder from '../components/FoodBuilder/Plate/IngredientBuilder/PizzaBuilder';
import SaladBuilder from '../components/FoodBuilder/Plate/IngredientBuilder/SaladBuilder';
import WafelBuilder from '../components/FoodBuilder/Plate/IngredientBuilder/WafelBuilder';
import BurgerTopBread from '../assets/images/ingredients/Burger/BurgerTopBread.svg';
import BurgerBottomBread from '../assets/images/ingredients/Burger/BurgerBottomBread.svg';
import PizzaCrust from '../assets/images/ingredients/Pizza/PizzaCrust.svg';
import SaladBowl from '../assets/images/ingredients/Salad/bowlSalad.svg';
import WafelCrust from '../assets/images/ingredients/Wafel/wafelCrust.svg';

import belgradeRestaurant from '../assets/images/Restaurants/belgradeRestaurant.jpg';
import washingtonRestaurant from '../assets/images/Restaurants/washingtonRestaurant.jpg';
import tokyoRestaurant from '../assets/images/Restaurants/tokyoRestaurant.jpg';
import madridRestaurant from '../assets/images/Restaurants/madridRestaurant.jpg';
import romeRestaurant from '../assets/images/Restaurants/romeRestaurant.jpg';
import beijingRestaurant from '../assets/images/Restaurants/beijingRestaurant.jpg';
import moscowRestaurant from '../assets/images/Restaurants/moscowRestaurant.jpg';
import munichRestaurant from '../assets/images/Restaurants/munichRestaurant.jpg';


export const restaurantImages = (name) => {

    switch(name){

        case 'Belgrade':
            return <img src={belgradeRestaurant} alt='Belgrade' className='SingleLocationRestaurantImage'/>
        case 'Washington':
            return <img src={washingtonRestaurant} alt='Washington' className='SingleLocationRestaurantImage'/>
        case 'Munich':
            return <img src={munichRestaurant} alt='Munich' className='SingleLocationRestaurantImage'/>
        case 'Madrid':
            return <img src={madridRestaurant} alt='Madrid' className='SingleLocationRestaurantImage'/>
        case 'Rome':
            return <img src={romeRestaurant} alt='Rome' className='SingleLocationRestaurantImage'/>
        case 'Beijing':
            return <img src={beijingRestaurant} alt='Beijing' className='SingleLocationRestaurantImage'/>
        case 'Moscow':
            return <img src={moscowRestaurant} alt='Moscow' className='SingleLocationRestaurantImage'/>
        case 'Tokyo':
            return <img src={tokyoRestaurant} alt='Tokyo' className='SingleLocationRestaurantImage'/>
        default:
            return null;

    }

}


export const foodBuilder = (type, order) => {

    switch(type){
        case 'Burger': 
            return (
                    <div className='OCBurger'>
                        <img src={BurgerTopBread} alt='Burger top bread'/>
                            {
                                Object.keys(order).map(firstEl => {
                                    return [...Array(order[firstEl])].map((SecondEl, index) => {
                                        return <BurgerBuilder ingredient={firstEl} key={index}/>
                                    })
                                })
                            }
                        <img src={BurgerBottomBread} alt='Burger bottom bread'/>
                    </div>
                )

        case 'Pizza': 
            return (
                    <div className='OCPizza'>
                        <img src={PizzaCrust} alt='just a pizza crust'/>
                            {
                                 Object.keys(order).map((e, index) => <PizzaBuilder ingredient={e} key={index} style={index + 1}/>)
                            }
                    </div>  
                )
        
        case 'Salad': 
            return (
                    <div className='OCSalad'>
                        <img src={SaladBowl} alt='just a salad bowl'/>
                            {
                                Object.keys(order).map((e, index) => <SaladBuilder ingredient={e} key={index} style={index + 1}/>)
                            }
                    </div>  
                )

        case 'Wafel': 
            return (
                    <div className='OCWafel'>
                        <img src={WafelCrust} alt='just a wafel bowl'/>
                            {
                                Object.keys(order).map((e, index) => <WafelBuilder ingredient={e} key={index} style={index + 1}/>)
                            }
                    </div>  
                )

        default: 
            return null;
            
    }

}



export const drinksAdditionalsSwitch = (type, place) => {

    let classesDrinks = (
        place === 'Food Maker' ?
        'FDDrinks'
        :
        'OCDrinksAdditionalsImages'
    )

    let classesAdditionals = (
        place === 'Food Maker' ?
        'FDAdditionals'
        :
        'OCDrinksAdditionalsImages'
    )

    switch(type){
        case 'Cola':
            return <img src={Cola} alt='a cup of Cola' className={classesDrinks}/>
        case 'Sprite':
            return <img src={Sprite} alt='a cup of Sprite' className={classesDrinks}/>
        case 'Fanta':
            return <img src={Fanta} alt='a cup of Fanta' className={classesDrinks}/>
        case 'Pepsi':
            return <img src={Pepsi} alt='a cup of Pepsi' className={classesDrinks}/>
        case 'Water':
            return <img src={Water} alt='a cup of Water' className={classesDrinks}/>
        case 'Juice':
            return <img src={Juice} alt='a cup of Juice' className={classesDrinks}/>
        case 'friesFrench':
            return <img src={frenchFries} alt='just some frenchFries' className={classesAdditionals}/>
        case 'wafelsFries':
            return <img src={wafelFries} alt='just some wafelFries' className={classesAdditionals}/>
        case 'cheeseFried':
            return <img src={friedCheese} alt='just some friedCheese' className={classesAdditionals}/>
        case 'chocolateIceCream':
            return <img src={chocolateIceCream} alt='just some chocolateIceCream' className={classesAdditionals}/>
        case 'strawberryIceCream':
            return <img src={strawberryIceCream} alt='just some strawberryIceCream' className={classesAdditionals}/>
        case 'blueberryIceCream':
            return <img src={blueberryIceCream} alt='just some blueberryIceCream' className={classesAdditionals}/>
        default:
            return null;
    }
}


export const whichDrawer = (type, place) => {

    let classes = (
        place === 'Menu Drawer' ?
        'DrawerImage'
        :
        'OCPremadeMenuImages'
    )

    switch(type){

        case 'Dubble Cheese Burger':
            return <img src={cheeseBurger} alt='a Dubble Cheese Burger' className={classes}/>
        case 'Barbecue Burger':
            return <img src={bbqBurger} alt='a Barbecue Burger' className={classes}/>
        case 'Fat Boy Burger':
            return <img src={fatBoyBurger} alt='a Fat Boy Burger' className={classes}/>
        case 'Vegie Bruger':
            return <img src={veggieBurger} alt='a Vegie Bruger' className={classes}/>
        case 'Capricosa':
            return <img src={capricciosa} alt='a Capricosa' className={classes}/>
        case 'Margarita':
            return <img src={margherita} alt='a Margarita' className={classes}/>
        case 'Meat Pizza':
            return <img src={meatPizza} alt='just Meat Pizza' className={classes}/>
        case 'Sausage Pizza':
            return <img src={pepperoni} alt='just Sausage Pizza' className={classes}/>
        case 'Cesar Salad':
            return <img src={caesarSalad} alt='just Cesar Salad' className={classes}/>
        case 'Salmon And Rice':
            return <img src={salmonRice} alt='just Salmon And Rice' className={classes}/>
        case 'Tuna Salad':
            return <img src={tuna} alt='just Tuna Salad' className={classes}/>
        case 'Oyster Speacial':
            return <img src={oyster} alt='just Oyster Speacial' className={classes}/>
        case 'Chocolate Death':
            return <img src={chocolateDeath} alt='just Chocolate Death"' className={classes}/>
        case 'Ice Cream Madness':
            return <img src={iceCreamMadness} alt='just Ice Cream Madness' className={classes}/>
        case 'Fruity Wafel':
            return <img src={frutyWafel} alt='just Fruity Wafel' className={classes}/>
        case 'Candy Wafel':
            return <img src={candyWafel} alt='just Oyster Speacial' className={classes}/>

        default:
            return null;

    }
}
