import React from 'react';
import './Plate.css';
import BurgerBuilder from './IngredientBuilder/BurgerBuilder';
import PizzaBuilder from './IngredientBuilder/PizzaBuilder';

import BurgerTopBread from '../../../assets/images/ingredients/Burger/BurgerTopBread.svg';
import BurgerBottomBread from '../../../assets/images/ingredients/Burger/BurgerBottomBread.svg';
import PizzaCrust from '../../../assets/images/ingredients/Pizza/PizzaCrust.svg';


const plate = (props) => {

    let plate = null;
    let ingredients = [];

    if(props.builder !== null){
        for(let firstKey in props.ingredients){
            for(let [key, value] of Object.entries(props.ingredients[firstKey])){
                if(value !== 0 && value !== false){
                    [...Array(value)].map(e => {
                        return ingredients.push(key);
                    })
                }else if(value === true){
                    ingredients.push(key);
                }
            }
        }
    }

    switch(props.builder){
        case 'Burger': 
                plate = (
                    <div className='PPlateBurger'>
                        <img src={BurgerTopBread} alt='Burger top bread'/>
                            {
                                ingredients.length === 0 ?
                                <h1>Please Add Ingredients</h1>:
                                ingredients.map((e, index) => {return <BurgerBuilder ingredients={e} key={index}/>})
                            }
                        <img src={BurgerBottomBread} alt='Burger bottom bread'/>
                    </div>
                )
            break;

        case 'Pizza': 
                plate = (
                    <div className='PPlatePizza'>
                        <img src={PizzaCrust} alt='just a pizza crust'/>
                        {
                            ingredients.length === 0 ?
                            <h1 style={{position: 'absolute', top: '38%', left: '8%'}}>Please Add Ingredients</h1>:
                            ingredients.map((e, index) => {return <PizzaBuilder ingredients={e} key={index}/>})
                        }
                    </div>  
                )
            break;

        default: 
            plate = null;
            
    }
    
    return (
        <div className='PContainer'>
            <h1 className='Ph1'>Make your {props.builder}</h1>
            <div className='POverflowDiv'>
                <div className='PPlateFlexer'>
                    {plate}
                </div>
            </div>
        </div>
    )
}


export default plate;