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
        };

    resetState = () => {
        this.setState(foodBuilderState);
        this.props.close();
    }

    removingHandler = (type, item, index) => {
        const updatedBuilder = {...this.state[this.props.builder]};
        const updatedBuilderType = {...updatedBuilder[type]};
        let updatedBuilderItem = null;
        let ingredients = [...this.state.ingredients];
        let totalPrice = this.state.totalPrice - prices[type];
        ingredients.splice(index, 1);
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

    addingHandler = (type, item) => {
        if(this.state[this.props.builder][type][item] === true){
            this.props.enqueueSnackbar(`In the ${this.props.builder} builder, you can add an ingredient only 1 time`, {variant: 'error'});
        }else{
            const updatedBuilder = {...this.state[this.props.builder]};
            const updatedBuilderType = {...updatedBuilder[type]};
            let updatedBuilderItem = null;
            let ingredients = [...this.state.ingredients];
            let totalPrice = this.state.totalPrice + prices[type];
            if(typeof this.state[this.props.builder][type][item] === 'boolean'){
                updatedBuilderItem = true;
                updatedBuilder[type][item] = updatedBuilderItem;
                ingredients.push(item);
                this.setState({[this.props.builder]: updatedBuilder, ingredients: ingredients, totalPrice: totalPrice});
            }else {
                updatedBuilderItem = updatedBuilderType[item] + 1;
                updatedBuilder[type][item] = updatedBuilderItem;
                ingredients.push(item);
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

    render() {

        return(
            <div className='FBContainer' style={{
                transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: this.props.show ? '1' : '0'
            }}>
                <CloseIcon fontSize='large' className='FBCloseIcon' onClick={this.resetState}/>
                <div className='FBLayout'>
                    <div className='FBMenu'>
                        <MenuBuilder builder={this.state[this.props.builder]} clicked={this.addingHandler} prices={prices}/>
                    </div>
                    <div className='FBContent'>
                        <h1 className='FBHeader'>Make your {this.props.builder}</h1>
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
                                <button className='FBOrderBtton' onClick={this.orderClickedHanlder}>Add to Summary</button>
                            </div>
                            <div className='FBPlatePrice'>
                                <Plate builder={this.props.builder} ingredients={this.state.ingredients} clicked={this.removingHandler} builderState={this.state[this.props.builder]}/>
                                <h1 style={{fontWeight: '200', fontSize: '40px', marginRight: '25px'}}>Price: {Number.parseFloat( this.state.totalPrice ).toFixed( 2 )}$</h1>
                            </div>
                        </div>
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