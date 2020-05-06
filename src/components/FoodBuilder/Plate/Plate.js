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

    // 2 OTHER WAYS, BUT EASIER AND CLEANER IN PARENT COMPONENT, THE ADD AND REMOVE HANDLER BY NOT DEPENDING ON THE STATE UNFORTUNATELY, IN ORDER TO MAKE ANIMATIONS ON ADDING POSSIBLE AND BE AWARE OF THE ORDER THAT SOMEONE IS ADDING
    // let ingredients = [];
    // for(let firstKey in props.ingredients){
    //     for(let [key, value] of Object.entries(props.ingredients[firstKey])){
    //         if(value !== 0 && value !== false){
    //             [...Array(value)].map(e => {
    //                 return ingredients.push(key);
    //             })
    //         }else if(value === true){
    //             ingredients.push(key);
    //         }
    //     }
    // }

    // let ingredients = Object.keys(props.ingredients).map( firstEl => {
    //     return Object.keys(props.ingredients[firstEl]).map( (secondEl, index) => {
    //         if(typeof props.ingredients[firstEl][secondEl] === 'number'){
    //             return [...Array(props.ingredients[firstEl][secondEl])].map( (bla, index) => {
    //                 return <BurgerBuilder ingredients={secondEl} key={index}/>
    //             })
    //         }else if(props.ingredients[firstEl][secondEl] === true){
    //             return <BurgerBuilder ingredients={secondEl} key={index}/>
    //         }
    //     })
    // });

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
                                <h1>Please Add Ingredients</h1>:
                                props.ingredients.map((e, index) => {return <BurgerBuilder ingredient={e} key={index} clicked={() => props.clicked(checkingMenuTypeClickedHandler(e), e, 'plateComponent', index)}/>})
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
                                <h1 style={{position: 'absolute', top: '38%', left: '8%'}}>Please Add Ingredients</h1>:
                                props.ingredients.map((e, index) => {return <PizzaBuilder ingredient={e} key={index} style={index + 1} clicked={() => props.clicked(checkingMenuTypeClickedHandler(e), e, 'plateComponent', index)}/>})
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
                            <h1 style={{position: 'absolute', top: '38%', left: '8%'}}>Please Add Ingredients</h1>:
                            props.ingredients.map((e, index) => {return <SaladBuilder ingredient={e} key={index} style={index + 1} clicked={() => props.clicked(checkingMenuTypeClickedHandler(e), e, 'plateComponent', index)}/>})
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
                            <h1 style={{position: 'absolute', top: '38%', left: '6%'}}>Please Add Ingredients</h1>:
                            props.ingredients.map((e, index) => {return <WafelBuilder ingredient={e} key={index} style={index + 1} clicked={() => props.clicked(checkingMenuTypeClickedHandler(e), e, 'plateComponent', index)}/>})
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