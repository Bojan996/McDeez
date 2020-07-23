import React from 'react';
import './Plate.css';
import BurgerBuilder from './IngredientBuilder/BurgerBuilder';
import PizzaBuilder from './IngredientBuilder/PizzaBuilder';
import SaladBuilder from './IngredientBuilder/SaladBuilder';
import WafelBuilder from './IngredientBuilder/WafelBuilder';

import BurgerTopBread from '../../../assets/images/ingredients/Burger/BurgerTopBread.svg';
import BurgerBottomBread from '../../../assets/images/ingredients/Burger/BurgerBottomBread.svg';
import PizzaCrust from '../../../assets/images/ingredients/Pizza/PizzaCrust.svg';
import SaladBowl from '../../../assets/images/ingredients/Salad/bowlSalad.svg';
import WafelCrust from '../../../assets/images/ingredients/Wafel/wafelCrust.svg';



const plate = (props) => {

    let plate = null;

    const checkingMenuTypeClickedHandler = (e) => {
        for(let firstKey in props.builderState){
            for(let secondKey in props.builderState[firstKey]){
                if(secondKey === e){
                    return firstKey
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
                                props.ingredients.length === 0 ?
                                <h1 className='PlatePleaseAddIngredients' >Please Add Ingredients</h1>:
                                props.ingredients.map((e, index) => {return <BurgerBuilder ingredient={e} key={index} clicked={() => props.clicked(checkingMenuTypeClickedHandler(e), e, index)}/>})
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
                                props.ingredients.length === 0 ?
                                <h1 className='PlatePleaseAddIngredients' style={{position: 'absolute', top: '38%', left: '8%'}}>Please Add Ingredients</h1>:
                                props.ingredients.map((e, index) => {return <PizzaBuilder ingredient={e} key={index} style={index + 1} clicked={() => props.clicked(checkingMenuTypeClickedHandler(e), e, index)}/>})
                            }
                    </div>  
                )
            break;
        
        case 'Salad': 
            plate = (
                <div className='PPlateSalad'>
                    <img src={SaladBowl} alt='just a salad bowl'/>
                        {
                            props.ingredients.length === 0 ?
                            <h1 className='PlatePleaseAddIngredients' style={{position: 'absolute', top: '38%', left: '8%'}}>Please Add Ingredients</h1>:
                            props.ingredients.map((e, index) => {return <SaladBuilder ingredient={e} key={index} style={index + 1} clicked={() => props.clicked(checkingMenuTypeClickedHandler(e), e, index)}/>})
                        }
                </div>  
            )
        break;

        case 'Wafel': 
            plate = (
                <div className='PPlateWafel'>
                    <img src={WafelCrust} alt='just a wafel bowl'/>
                        {
                            props.ingredients.length === 0 ?
                            <h1 className='PlatePleaseAddIngredients' style={{position: 'absolute', top: '38%', left: '6%'}}>Please Add Ingredients</h1>:
                            props.ingredients.map((e, index) => {return <WafelBuilder ingredient={e} key={index} style={index + 1} clicked={() => props.clicked(checkingMenuTypeClickedHandler(e), e, index)}/>})
                        }
                </div>  
            )
        break;

        default: 
            plate = null;
            
    }
    
    return (
            <div className='POverflowDiv'>
                <div className='PPlateFlexer'>
                    {plate}
                </div>
            </div>
    )
}


export default plate;