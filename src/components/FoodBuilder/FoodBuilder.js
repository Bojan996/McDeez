import React, { Component } from 'react';
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

class FoodBuilder extends Component {

    state = {
            isBoolean: false,
            disabledButton: true,
            menuTypeClicked: null,
            menuItemClicked: null,
            ingredients: [],
            totalPrice: 1,
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
                    ketchup: false,
                    mayo: false,
                    bbqSauce: false,
                    burgerSauce: false,
                    mcdeezSecretSauce: false
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
        };

    resetState = () => {
        this.setState(foodBuilderState);
        this.props.close();
    }

    removingHandler = (type, item, from, theIndex) => {
        const updatedBuilder = {...this.state[this.props.builder]};
        const updatedBuilderType = {...updatedBuilder[type]};
        let updatedBuilderItem = null;
        let ingredients = [...this.state.ingredients];
        let totalPrice = this.state.totalPrice - prices[type];
        if(from === 'plateComponent'){
            this.menuClickHandler(type, item);
            console.log(`deleting: from ${type}, the ${item}, the index ${theIndex}`);
            ingredients.splice(theIndex, 1);
        }else{
            let index = ingredients.indexOf(item);
            ingredients.splice(index, 1);
        }
        if(typeof this.state[this.props.builder][type][item] === 'boolean'){ // CAN NOT RELY ON this.state.isBoolean because it is not updated before this if statement for some strange reason
            updatedBuilderItem = false;
            updatedBuilder[type][item] = updatedBuilderItem;
            this.setState({[this.props.builder]: updatedBuilder, ingredients: ingredients, totalPrice: totalPrice});
        }else {
            updatedBuilderItem = updatedBuilderType[item] - 1;
            updatedBuilder[type][item] = updatedBuilderItem;
            this.setState({[this.props.builder]: updatedBuilder, disabledButton: updatedBuilderItem <=0, ingredients: ingredients, totalPrice: totalPrice});
        }
    }

    addingHandler = () => {
        if(this.state.menuItemClicked === null){
            this.props.enqueueSnackbar('Please choose an item!', {variant: 'error'});
        }else {
            const updatedBuilder = {...this.state[this.props.builder]};
            const updatedBuilderType = {...updatedBuilder[this.state.menuTypeClicked]};
            let updatedBuilderItem = null;
            let ingredients = [...this.state.ingredients];
            let totalPrice = this.state.totalPrice + prices[this.state.menuTypeClicked];
            if(this.state.isBoolean){
                updatedBuilderItem = true;
                updatedBuilder[this.state.menuTypeClicked][this.state.menuItemClicked] = updatedBuilderItem;
                ingredients.push(this.state.menuItemClicked);
                this.setState({[this.props.builder]: updatedBuilder, ingredients: ingredients, totalPrice: totalPrice});
            }else {
                updatedBuilderItem = updatedBuilderType[this.state.menuItemClicked] + 1;
                updatedBuilder[this.state.menuTypeClicked][this.state.menuItemClicked] = updatedBuilderItem;
                ingredients.push(this.state.menuItemClicked);
                this.setState({[this.props.builder]: updatedBuilder, disabledButton: updatedBuilderItem <=0, ingredients: ingredients,  totalPrice: totalPrice});
            }
        }
    }

    // ANOTHER WAY FOR ADDING AND POTENTIALY REMOVING, WHICH SOME PEOPLE FIND CLEANER
    // addingHandler = () => {
    //     let updatedBuilder = {};
    //     let ingredients = [...this.state.ingredients];
    //     if(this.state.isBoolean){
    //         updatedBuilder = {
    //             ...this.state[this.props.builder],
    //             [this.state.menuTypeClicked]: {
    //                 ...this.state[this.props.builder][this.state.menuTypeClicked],
    //                 [this.state.menuItemClicked]: true
    //             }
    //         }
    //         ingredients.push(this.state.menuItemClicked);
    //         this.setState({[this.props.builder]: updatedBuilder, booleanDisabled: true, ingredients: ingredients});
    //     }else {
    //         updatedBuilder = {
    //             ...this.state[this.props.builder],
    //             [this.state.menuTypeClicked]: {
    //                 ...this.state[this.props.builder][this.state.menuTypeClicked],
    //                 [this.state.menuItemClicked]: this.state[this.props.builder][this.state.menuTypeClicked][this.state.menuItemClicked] + 1
    //             }
    //         }
    //         ingredients.push(this.state.menuItemClicked);
    //         this.setState({[this.props.builder]: updatedBuilder, disabledButton: updatedBuilder[this.state.menuTypeClicked][this.state.menuItemClicked] <=0, ingredients: ingredients});
    //     }
    // }

    orderClickedHanlder = () => {
        let newObject = {};
        let totalPrice = Number.parseFloat(this.state.totalPrice).toFixed(2);
        if(this.state.totalPrice <= 1 || this.state.ingredients.length === 0){
            this.props.somethingFailed();
            this.props.enqueueSnackbar('Please Add Ingredients!', {variant: 'error'});
        }else{
            for(let firstKey in this.state[this.props.builder]){
                for(let [secondKey,value] of Object.entries(this.state[this.props.builder][firstKey])){
                    if(value > 0 || value === true){
                        newObject = {
                            ...newObject,
                            name: this.props.builder,
                            price: totalPrice,
                            type: 'Food Builder',
                            [secondKey]: value
                        }
                    }
                }
            }
            this.props.addOrder(newObject); 
            this.props.enqueueSnackbar('Added to Order Summary!',  {variant: 'success'} );
            this.resetState();
        }
    }

    menuClickHandler = (type, item) => {
        this.setState({menuTypeClicked: type,  menuItemClicked: item, disabledButton: this.state[this.props.builder][type][item] <= 0, isBoolean: typeof this.state[this.props.builder][type][item] === "boolean"});
    }

    render() {
        console.log(this.state.ingredients)
        return(
            <div className='FBContainer' style={{
                transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: this.props.show ? '1' : '0'
            }}>
                <CloseIcon fontSize='large' className='FBCloseIcon' onClick={this.resetState}/>
                <div className='FBLayout'>
                    <div className='FBMenu'>
                        <MenuBuilder builder={this.state[this.props.builder]} clicked={this.menuClickHandler} prices={prices}/>
                    </div>
                    <div className='FBContent'>
                        <h1 className='FBHeader'>Make your {this.props.builder}</h1>
                        <div className='FBPlateButtonsContainer'>
                            <div className='FBAmountButtons'>
                                <button className='FBAddButton' onClick={this.addingHandler} disabled={!this.state.isBoolean ? null : this.state[this.props.builder][this.state.menuTypeClicked][this.state.menuItemClicked]}>Add Ingredient</button>
                                <button className='FBRemoveButton' onClick={() => this.removingHandler(this.state.menuTypeClicked, this.state.menuItemClicked)} disabled={!this.state.isBoolean ? this.state.disabledButton : !this.state[this.props.builder][this.state.menuTypeClicked][this.state.menuItemClicked]}>Remove Ingredient</button>
                                <button className='FBOrderBtton' onClick={this.orderClickedHanlder}>Add to Summary</button>
                            </div>
                            <Plate builder={this.props.builder} ingredients={this.state.ingredients} clicked={this.removingHandler} builderState={this.state[this.props.builder]}/>
                        </div>
                        <h1 style={{fontWeight: '200', fontSize: '40px', marginTop: '5px'}}>Price: {Number.parseFloat( this.state.totalPrice ).toFixed( 2 )}$</h1>
                    </div>
                </div>
            </div>
        )

    }

}

const mapDispatchToProps = dispatch => {
    return {
        addOrder: (order) => dispatch(addOrderSummary(order)),
        somethingFailed: () => dispatch(somethingFailed())
    }
}

export default connect(null, mapDispatchToProps)(withSnackbar(FoodBuilder));