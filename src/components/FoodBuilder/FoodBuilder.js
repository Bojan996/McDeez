import React, { Component } from 'react';
import './FoodBuilder.css';

import MenuBuilder from './MenuBuilder/MenuBuilder';
import Plate from './Plate/Plate';
import CloseIcon from '@material-ui/icons/Close';


class FoodBuilder extends Component {

    state = {
            isBoolean: false,
            booleanDisabled: false,
            disabledButton: true,
            menuTypeClicked: null,
            menuItemClicked: null,
            ingredients: [],
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
            },
            Additional: {
                
                Fried: {
                    frenchFries: 0,
                    wafelFries: 0,
                    onionRings: 0,
                    friedCheese: 0
                },
                Pie: {
                    applePie: 0,
                    blueberryPie: 0
                },
                Shakes: {
                    vanilaShake: 0,
                    chocolateShake: 0,
                    strawberryShake: 0
                }
            }
        };

    resetState = () => {
        this.setState({
            isBoolean: false,
            booleanDisabled: false,
            disabledButton: true,
            menuTypeClicked: null,
            menuItemClicked: null,
            ingredients: [],
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
            },
            Additional: {
                
                Fried: {
                    frenchFries: 0,
                    wafelFries: 0,
                    onionRings: 0,
                    friedCheese: 0
                },
                Pie: {
                    applePie: 0,
                    blueberryPie: 0
                },
                Shakes: {
                    vanilaShake: 0,
                    chocolateShake: 0,
                    strawberryShake: 0
                }
            }
        });
        this.props.close();
    }

    removingHandler = (type, item, from, theIndex) => {
        console.log(type, item, from, theIndex);
        const updatedBuilder = {...this.state[this.props.builder]};
        const updatedBuilderType = {...updatedBuilder[type]};
        let updatedBuilderItem = null;
        let ingredients = [...this.state.ingredients];
        if(from === 'plateComponent'){
            this.menuClickHandler(type, item);
            console.log(`deleting: from ${type}, the ${item}, the index ${theIndex}`);
            ingredients.splice(theIndex, 1);
        }else{
            let index = ingredients.indexOf(item);
            ingredients.splice(index, 1);
        }
        if(this.state.isBoolean){
            updatedBuilderItem = false;
            updatedBuilder[type][item] = updatedBuilderItem;
            this.setState({[this.props.builder]: updatedBuilder, booleanDisabled: false, ingredients: ingredients});
        }else {
            updatedBuilderItem = updatedBuilderType[item] - 1;
            updatedBuilder[type][item] = updatedBuilderItem;
            this.setState({[this.props.builder]: updatedBuilder, disabledButton: updatedBuilderItem <=0, ingredients: ingredients});
        }
    }

    addingHandler = () => {
        const updatedBuilder = {...this.state[this.props.builder]};
        const updatedBuilderType = {...updatedBuilder[this.state.menuTypeClicked]};
        let updatedBuilderItem = null;
        let ingredients = [...this.state.ingredients];
        if(this.state.isBoolean){
            updatedBuilderItem = true;
            updatedBuilder[this.state.menuTypeClicked][this.state.menuItemClicked] = updatedBuilderItem;
            ingredients.push(this.state.menuItemClicked);
            this.setState({[this.props.builder]: updatedBuilder, booleanDisabled: true, ingredients: ingredients});
        }else {
            updatedBuilderItem = updatedBuilderType[this.state.menuItemClicked] + 1;
            updatedBuilder[this.state.menuTypeClicked][this.state.menuItemClicked] = updatedBuilderItem;
            ingredients.push(this.state.menuItemClicked);
            this.setState({[this.props.builder]: updatedBuilder, disabledButton: updatedBuilderItem <=0, ingredients: ingredients});
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

    menuClickHandler = (type, item) => {
        this.setState({menuTypeClicked: type,  menuItemClicked: item, disabledButton: this.state[this.props.builder][type][item] <= 0, isBoolean: typeof this.state[this.props.builder][type][item] === "boolean"});
    }

    render() {

        if(this.props.builder !== null && this.state.menuItemClicked !== null && this.state.menuTypeClicked !== null){
            console.log(this.state[this.props.builder][this.state.menuTypeClicked][this.state.menuItemClicked]);
            console.log(this.state.ingredients);
        }

        return(
            <div className='FBContainer' style={{
                transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: this.props.show ? '1' : '0'
            }}>
                <CloseIcon fontSize='large' className='FBCloseIcon' onClick={this.resetState}/>
                <div className='FBLayout'>
                    <div className='FBMenu'>
                        <MenuBuilder builder={this.state[this.props.builder]} clicked={this.menuClickHandler}/>
                    </div>
                    <div className='FBContent'>
                        <Plate builder={this.props.builder} ingredients={this.state.ingredients} clicked={this.removingHandler} builderState={this.state[this.props.builder]}/>
                        <div className='FBAmountButtons'>
                            <button className='FBRemoveButton' onClick={() => this.removingHandler(this.state.menuTypeClicked, this.state.menuItemClicked)} disabled={!this.state.isBoolean ? this.state.disabledButton : !this.state[this.props.builder][this.state.menuTypeClicked][this.state.menuItemClicked]}>Remove</button>
                            <button className='FBAddButton' onClick={this.addingHandler} disabled={!this.state.isBoolean ? null : this.state[this.props.builder][this.state.menuTypeClicked][this.state.menuItemClicked]}>Add</button>
                        </div>
                        <button className='FBOrderButton'>ORDER NOW!</button>
                    </div>
                </div>
            </div>
        )

    }

}


export default FoodBuilder;