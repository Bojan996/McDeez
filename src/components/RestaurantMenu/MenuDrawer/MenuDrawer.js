import React from 'react';
import './MenuDrawer.css';
import { whichDrawer } from '../../../helpers/switchStatements';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import nutritionFacts from '../../../assets/images/menuDrawer/nutritionFactsCooler.png';

const menuDrawer = (props) => {
    let image = whichDrawer(props.type, 'Menu Drawer');
    return (
        <div className='MDContainer' style={{
            transform: props.show && window.screen.width > 550 ? 'translateX(0)' : props.show && window.screen.width <= 550 ? 'translateX(-10vw)' : 'translateX(75vw)',
            opacity: props.show ? '1' : '0'
        }}>
            <div className='MDPictureSide'>
                <Typography variant='h2' className='MDHeader'> <span>{props.type}</span><span className='MDPictureSidePriceSpan'>{props.price}$</span></Typography>
                {image}
                <h2 className='MDIngredients'>Ingredients: </h2>
                <p>{props.ingredients}</p>
                <Button variant="outlined" size="large" color="primary" className='FDDrinksAdditionalsButton' onClick={props.clicked}> Add To Summary </Button>
            </div>
            <img src={nutritionFacts} className='MDNutritionImg' alt='the nutrition value'/>
        </div>
    )
}



export default menuDrawer;