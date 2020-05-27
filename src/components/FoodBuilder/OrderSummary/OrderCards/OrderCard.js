import React from 'react';
import { drinksAdditionalsSwitch } from '../../../../helpers/switchStatements';

import BurgerBuilder from '../../Plate/IngredientBuilder/BurgerBuilder';
import PizzaBuilder from '../../Plate/IngredientBuilder/PizzaBuilder';
import SaladBuilder from '../../Plate/IngredientBuilder/SaladBuilder';
import WafelBuilder from '../../Plate/IngredientBuilder/WafelBuilder';

import BurgerTopBread from '../../../../assets/images/ingredients/Burger/BurgerTopBread.svg';
import BurgerBottomBread from '../../../../assets/images/ingredients/Burger/BurgerBottomBread.svg';
import PizzaCrust from '../../../../assets/images/ingredients/Pizza/PizzaCrust.svg';
import SaladBowl from '../../../../assets/images/ingredients/Salad/bowlSalad.svg';
import WafelCrust from '../../../../assets/images/ingredients/Wafel/wafelCrust.svg';


const orderCard = (props) => {

    let orderImg = null;
    let info = [];

    for(let key in props.order){
        if(key !== 'name' && key !== 'price')
        info.push(key);
    }

    switch(props.builder){
        case 'Burger': 
            orderImg = (
                    <div className='OCBurger'>
                        <img src={BurgerTopBread} alt='Burger top bread'/>
                            {
                                Object.keys(props.order).map(firstEl => {
                                    return [...Array(props.order[firstEl])].map((SecondEl, index) => {
                                        return <BurgerBuilder ingredient={firstEl} key={index}/>
                                    })
                                })
                            }
                        <img src={BurgerBottomBread} alt='Burger bottom bread'/>
                    </div>
                )
            break;

        case 'Pizza': 
            orderImg = (
                    <div className='OCPizza'>
                        <img src={PizzaCrust} alt='just a pizza crust'/>
                            {
                                 Object.keys(props.order).map((e, index) => <PizzaBuilder ingredient={e} key={index} style={index + 1}/>)
                            }
                    </div>  
                )
            break;
        
        case 'Salad': 
            orderImg = (
                <div className='OCSalad'>
                    <img src={SaladBowl} alt='just a salad bowl'/>
                        {
                            Object.keys(props.order).map((e, index) => <SaladBuilder ingredient={e} key={index} style={index + 1}/>)
                        }
                </div>  
            )
        break;

        case 'Wafel': 
            orderImg = (
                <div className='OCWafel'>
                    <img src={WafelCrust} alt='just a wafel bowl'/>
                        {
                             Object.keys(props.order).map((e, index) => <WafelBuilder ingredient={e} key={index} style={index + 1}/>)
                        }
                </div>  
            )
        break;

        default: 
            orderImg = null;
            
    }

    if(orderImg === null){
        orderImg = (
            <div className='OCDrinksAdditionalsImages'>
                {drinksAdditionalsSwitch(props.builder)}
            </div>
        )
    }

    let firstWord = props.order.name.split(/(?=[A-Z])/);

    let content = (
        props.type === 'small' ?
        <div className='OCCardContainerSmall' onClick={props.clicked}>
            {orderImg}
            <div className='OCOrderContentSmall'>
                <h2>{firstWord[0].charAt(0).toUpperCase() + firstWord[0].slice(1)}</h2>
                <h2>{Number.parseFloat( props.order.price ).toFixed( 2 )}$</h2>
            </div>
        </div>
        : props.type !== 'small' && info.length > 1 ?
        <div className='OCCardContainerLarge' onClick={props.clicked}>
            {orderImg}
            <div className='OCOrderContentLarge'>
                <h2>{firstWord[0].charAt(0).toUpperCase() + firstWord[0].slice(1)} <strong style={{letterSpacing: '4px'}}>{Number.parseFloat( props.order.price ).toFixed( 2 )}$</strong></h2>
                <div className='OCIngredientDiv'>
                    {info.map((e,index) => {
                        return <span key={index}>{e.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}{typeof props.order[e] !== 'boolean' ? `(${props.order[e]})` : null}, </span>
                    })}
                </div>
            </div>
        </div>
        :
        <div className='OCCardContainerMedioum' onClick={props.clicked}>
            {orderImg}
            <div className='OCOrderContentMedioum'>
                <h1><strong style={{letterSpacing: '4px'}}>{Number.parseFloat( props.order.price ).toFixed( 2 )}$</strong></h1>
                <h2>{firstWord[0].charAt(0).toUpperCase() + firstWord[0].slice(1)} X {props.order[info[0]]}</h2>
            </div>
        </div>

    )



    return content;
}


export default orderCard;