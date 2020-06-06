import React from 'react';

import { drinksAdditionalsSwitch } from '../../../../helpers/switchStatements';
import { foodBuilder } from '../../../../helpers/switchStatements';
import { whichDrawer } from '../../../../helpers/switchStatements';


const orderCard = (props) => {

    let orderImg = null;
    let info = [];

    switch(props.order.type){
        case 'Drinks And Additionals':
            orderImg = drinksAdditionalsSwitch(props.builder, 'Order Cards');
            break;
        case 'Premade Menu':
            orderImg = whichDrawer(props.builder, 'Order Cards');
            break;
        case 'Food Builder':
            orderImg = foodBuilder(props.builder, props.order);
            break;
        default:
            orderImg = null;
    }

    for(let key in props.order){
        if(key !== 'name' && key !== 'price' && key !== 'type' && key !== 'amount'){
            info.push(key);
        }
    }

    let firstWord = props.order.name.split(/(?=[A-Z])/);
    let priceAndAmount = (
        props.order.type === 'Food Builder' ?
        <h2>{Number.parseFloat(props.order.price).toFixed( 2 )}$</h2>
        :
        <h2 style={{display: 'flex', justifyContent: 'space-between'}}><span style={{marginLeft: '10px'}}>{Number.parseFloat( Number(props.order.price) / Number(props.order.amount) ).toFixed( 2 )}$</span> <span>X{props.order.amount}</span></h2>
    )


    let content = (
        props.type === 'small' ?
        <div className='OCCardContainerSmall' onClick={props.clicked}>
            {orderImg}
            <div className='OCOrderContentSmall'>
                <h2>{firstWord[0].charAt(0).toUpperCase() + firstWord[0].slice(1)}</h2>
                {priceAndAmount}
            </div>
        </div>
        : props.type !== 'small' && info.length >= 1 ?
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
                <h2>{firstWord[0].charAt(0).toUpperCase() + firstWord[0].slice(1)}    X{props.order.amount}</h2>
            </div>
        </div>

    )


    return content;

}


export default orderCard;