import React, { useState } from 'react';
import './FoodBuilder.css';
import { withSnackbar } from 'notistack';
import { foodBuilderState } from '../../assets/FoodBuilderInitialState/FoodBuilderInitialState';

import MenuBuilder from './MenuBuilder/MenuBuilder';
import Plate from './Plate/Plate';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { addOrderSummary, somethingFailed } from '../../store/actions/orderSummary';



const prices = {
    Regular: 0.7,
    Sauces: 0.3,
    Dressing: 0.5,
    Vegetables: 0.6,
    Meet: 1.5,
    Fruits: 0.6
}

const foodBuilder = (props) => {

    const [ingredients, setIngredients] = useState([]);
    const [totalPrice, setTotalPrice] = useState(1);
    const [foodBuilder, setFoodBuilder] = useState(
        {
            Burger: {
                Regular: {
                    salad: 0,
                    meet: 0,
                    bacon: 0,
                    cheese: 0,
                    bread: 0,
                    onion: 0,
                    pickle: 0,
                    tomato: 0
                },
                Sauces: {
                    ketchup: 0,
                    mayo: 0,
                    bbqSauce: 0,
                    burgerSauce: 0,
                    mcdeezSecretSauce: 0
                }
            },
            Pizza: {
                Regular: {
                    tomatoSauce: false,
                    mozzarella: false,
                    parmesan: false,
                    ham: false,
                    sausage: false,
                    bacon: false,
                    tuna: false
                },
                Vegetables: {
                    mushroom: false,
                    onion: false,
                    olive: false,
                    tomato: false,
                    corn: false
                },
                Sauces: {
                    ketchup: false,
                    mayo: false,
                    burgerSauce: false,
                    mcdeezSecretSauce: false
                }
            },
            Salad: {
                Vegetables: {
                    lettuce: false,
                    tomato: false,
                    cucumber: false,
                    spinach: false,
                    olive: false,
                    onion: false,
                    corn: false,
                    whiteCheese: false
                },
                Meet: {
                    chickenBreast: false,
                    steak: false, 
                    bacon: false,
                    tuna: false,
                    slamon: false
                },
                Dressing: {
                    honeyDressing: false,
                    burgerDressing: false,
                    pestoDressing: false
                }
            },
            Wafel: {
                Regular: {
                    nutela: false,
                    honey: false,
                    strawberryJam: false,
                    blueberryJam: false,
                    peachJam: false,
                    biscuit: false,
                    oreo: false,
                    kitkat: false,
                    chocolateChips: false,
                    sprinkles: false
                },
                Fruits: {
                    banana: false,
                    apple: false,
                    cherry: false,
                    blueberry: false,
                    strawberry: false,
                    peach: false,
                    pineapple: false
                }
            }
        }
    );

    const resetState = () => {
        setIngredients([]);
        setTotalPrice(1);
        setFoodBuilder(foodBuilderState());
        props.close();
    }

    const updatingState = (updatedBuilder, ingredientsVar, totalPriceVar) => {
        setFoodBuilder({
            ...foodBuilder,
            [props.builder]: updatedBuilder
        });
        setIngredients(ingredientsVar);
        setTotalPrice(totalPriceVar);
    }

    const removingHandler = (type, item, index) => {
        const updatedBuilder = {...foodBuilder[props.builder]};
        const updatedBuilderType = {...updatedBuilder[type]};
        let updatedBuilderItem = null;
        let ingredientsVar = [...ingredients];
        let totalPriceVar = totalPrice - prices[type];
        ingredientsVar.splice(index, 1);
        if(typeof foodBuilder[props.builder][type][item] === 'boolean'){ // CAN NOT RELY ON isBoolean because it is not updated before this if statement for some strange reason
            updatedBuilderItem = false;
            updatedBuilder[type][item] = updatedBuilderItem;
            updatingState(updatedBuilder, ingredientsVar, totalPriceVar);
        }else {
            updatedBuilderItem = updatedBuilderType[item] - 1;
            updatedBuilder[type][item] = updatedBuilderItem;
            updatingState(updatedBuilder, ingredientsVar, totalPriceVar);
        }
    }

    const addingHandler = (type, item) => {
        if(foodBuilder[props.builder][type][item] === true){
            props.enqueueSnackbar(`In the ${props.builder} builder, you can add an ingredient only 1 time`, {variant: 'error'});
        }else{
            const updatedBuilder = {...foodBuilder[props.builder]};
            const updatedBuilderType = {...updatedBuilder[type]};
            let updatedBuilderItem = null;
            let ingredientsVar = [...ingredients];
            let totalPriceVar = totalPrice + prices[type];
            if(typeof foodBuilder[props.builder][type][item] === 'boolean'){
                updatedBuilderItem = true;
                updatedBuilder[type][item] = updatedBuilderItem;
                ingredientsVar.push(item);
                updatingState(updatedBuilder, ingredientsVar, totalPriceVar);
            }else {
                updatedBuilderItem = updatedBuilderType[item] + 1;
                updatedBuilder[type][item] = updatedBuilderItem;
                ingredientsVar.push(item);
                updatingState(updatedBuilder, ingredientsVar, totalPriceVar);
            }
        }
    }

    const orderClickedHanlder = () => {
        let newObject = {};
        let totalPriceVar = Number.parseFloat(totalPrice).toFixed(2);
        if(totalPriceVar <= 1 || ingredients.length === 0){
            props.somethingFailed();
            props.enqueueSnackbar('Please Add Ingredients!', {variant: 'error'});
        }else{
            for(let firstKey in foodBuilder[props.builder]){
                for(let [secondKey,value] of Object.entries(foodBuilder[props.builder][firstKey])){
                    if(value > 0 || value === true){
                        newObject = {
                            ...newObject,
                            name: props.builder,
                            price: totalPriceVar,
                            type: 'Food Builder',
                            [secondKey]: value
                        }
                    }
                }
            }
            props.addOrder(newObject); 
            props.enqueueSnackbar('Added to Order Summary!',  {variant: 'success'} );
            resetState();
        }
    }

    return(
        <div className='FBContainer' style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
            <CloseIcon fontSize='large' className='FBCloseIcon' onClick={resetState}/>
            <div className='FBLayout'>
                <div className='FBMenu'>
                    <MenuBuilder builder={foodBuilder[props.builder]} clicked={addingHandler} prices={prices}/>
                </div>
                <div className='FBContent'>
                    <h1 className='FBHeader'><span className='FBHeaderMakeYourSpan'>Make your </span>{props.builder}</h1>
                    <div className='FBContentFlexer'>
                        <div className='FBInstructionsOrder'>
                            <h1 style={{fontWeight: '200', fontSize: '45px', margin: '15px 0 15px 0'}}>Instructions</h1>
                            <div className='FBRemoveInstruction'>
                                <h2><span>Removing </span><i className="fas fa-arrow-right"  style={{fontSize: '25px', marginTop: '6px'}}></i> </h2>
                                <p>- To remove ingredients,<br/> click on the picture of it</p>
                            </div>
                            <div className='FBAddInstruction'>
                                <h2> <i className="fas fa-arrow-left" style={{fontSize: '25px', marginTop: '6px'}}></i><span>Adding</span></h2>
                                <p>- To add an ingredient,<br/> click on it in the menu</p>
                            </div>
                            <button className='FBOrderBtton' onClick={orderClickedHanlder}>Add to Summary</button>
                        </div>
                        <div className='FBPlatePrice'>
                            <Plate builder={props.builder} ingredients={ingredients} clicked={removingHandler} builderState={foodBuilder[props.builder]}/>
                            <h1 className='FBPlatePriceH1' style={{fontWeight: '200', fontSize: '40px', marginRight: '25px'}}>Price: {Number.parseFloat( totalPrice ).toFixed( 2 )}$</h1>
                            <button className='FBOrderBttonPlateSide' onClick={orderClickedHanlder}>Add to Summary</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

const mapDispatchToProps = dispatch => {
    return {
        addOrder: (order) => dispatch(addOrderSummary(order)),
        somethingFailed: () => dispatch(somethingFailed())
    }
}

export default connect(null, mapDispatchToProps)(withSnackbar(foodBuilder));