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
import beijingRestaurant from '../assets/images/Restaurants/beijingRestaurant.webp';
import moscowRestaurant from '../assets/images/Restaurants/moscowRestaurant.jpg';
import munichRestaurant from '../assets/images/Restaurants/munichRestaurant.jpg';


export const restaurantImages = (name) => {

    switch(name){

        case 'Belgrade':
            return <img src={belgradeRestaurant} alt='Belgrade' className='SLRestaurantImage'/>
        case 'Washington':
            return <img src={washingtonRestaurant} alt='Washington' className='SLRestaurantImage'/>
        case 'Munich':
            return <img src={munichRestaurant} alt='Munich' className='SLRestaurantImage'/>
        case 'Madrid':
            return <img src={madridRestaurant} alt='Madrid' className='SLRestaurantImage'/>
        case 'Rome':
            return <img src={romeRestaurant} alt='Rome' className='SLRestaurantImage'/>
        case 'Beijing':
            return <img src={beijingRestaurant} alt='Beijing' className='SLRestaurantImage'/>
        case 'Moscow':
            return <img src={moscowRestaurant} alt='Moscow' className='SLRestaurantImage'/>
        case 'Tokyo':
            return <img src={tokyoRestaurant} alt='Tokyo' className='SLRestaurantImage'/>
        default:
            return null;

    }

}


export const restaurantLocations = (name) => {

    switch(name){

        case 'Belgrade':
            return <iframe title='just a map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.39056878075!2d20.45867831549847!3d44.81360727909873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aae086eb971%3A0x4e105d18dffd9fb7!2sTerazije%2023%2C%20Beograd%2011000!5e0!3m2!1sen!2srs!4v1592348098596!5m2!1sen!2srs" frameBorder="0" style={{border: '0', width: '100%', height: '450px'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        case 'Washington':
            return <iframe title='just a map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.894658904825!2d-76.99751218469116!3d38.88065187957333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b9ccd033b731%3A0xef05cb46a8dca253!2s717%208th%20St%20SE%2C%20Washington%2C%20DC%2020003%2C%20USA!5e0!3m2!1sen!2srs!4v1592408916462!5m2!1sen!2srs" frameBorder="0" style={{border: '0', width: '100%', height: '450px'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        case 'Munich':
            return <iframe title='just a map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.637740773145!2d11.575581815613742!3d48.13650907922321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e758af7499067%3A0x6d9627eeb17d8aff!2sTal%201%2C%2080331%20M%C3%BCnchen%2C%20Germany!5e0!3m2!1sen!2srs!4v1592409086109!5m2!1sen!2srs" frameBorder="0" style={{border: '0', width: '100%', height: '450px'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        case 'Madrid':
            return <iframe title='just a map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.682668016529!2d-3.7037877846442706!3d40.4158801793653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422880f3369961%3A0xc8665784f573c48b!2sCalle%20de%20la%20Victoria%2C%209%2C%2028012%20Madrid%2C%20Spain!5e0!3m2!1sen!2srs!4v1592409158520!5m2!1sen!2srs" frameBorder="0" style={{border: '0', width: '100%', height: '450px'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        case 'Rome':
            return <iframe title='just a map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.1604609297447!2d12.491811015402233!3d41.889406079221246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b79f5b53d9%3A0x438e5f570144dc68!2sPiazza%20del%20Colosseo%2C%205%2C%2000184%20Roma%20RM%2C%20Italy!5e0!3m2!1sen!2srs!4v1592409257994!5m2!1sen!2srs" frameBorder="0" style={{border: '0', width: '100%', height: '450px'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        case 'Beijing':
            return <iframe title='just a map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.0779071741126!2d116.39001031533965!3d39.894887979429214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f0529ef08172af%3A0xca35b3975ccb50f6!2s57%20Dashilan%20W%20St%2C%20Xicheng%20Qu%2C%20Beijing%20Shi%2C%20China%2C%20100811!5e0!3m2!1sen!2srs!4v1592409377006!5m2!1sen!2srs" frameBorder="0" style={{border: '0', width: '100%', height: '450px'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        case 'Moscow':
            return <iframe title='just a map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.0890087695116!2d37.612031415900994!3d55.756955980554565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5aafc97525%3A0xc9f443d8226d5972!2zTW9raG92YXlhIFN0LCAxNS8xINGB0YLRgNC-0LXQvdC40LUgMSwgTW9za3ZhLCBSdXNzaWEsIDEyNTAwOQ!5e0!3m2!1sen!2srs!4v1592409436039!5m2!1sen!2srs" frameBorder="0" style={{border: '0', width: '100%', height: '450px'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        case 'Tokyo':
            return <iframe title='just a map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7932861812264!2d139.7431031152154!3d35.65746428019987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbda67c62d3%3A0x694d55522db5312a!2s4-ch%C5%8Dme-4-13%20Shibak%C5%8Den%2C%20Minato%20City%2C%20T%C5%8Dky%C5%8D-to%20105-0011%2C%20Japan!5e0!3m2!1sen!2srs!4v1592409566895!5m2!1sen!2srs" frameBorder="0" style={{border: '0', width: '100%', height: '450px'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
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
        'FDDrinksImage'
        :
        'OCDrinksAdditionalsImages'
    )

    let classesAdditionals = (
        place === 'Food Maker' ?
        'FDAdditionalsImage'
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
