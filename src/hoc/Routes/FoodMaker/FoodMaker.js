import React, { Component } from 'react';
import propTypes from 'prop-types';
import './FoodMaker.css';
import { connect } from 'react-redux';
import { addOrderSummary } from '../../../store/actions/orderSummary';
import { foodMakerState } from '../../../assets/FoodBuilderInitialState/FoodBuilderInitialState';
import { withSnackbar } from 'notistack';

import RestaurantMenu from '../../../components/RestaurantMenu/RestaurantMenu';
import MenuDrawer from '../../../components/RestaurantMenu/MenuDrawer/MenuDrawer';
import Backdrop from '../../../components/UI/Backdrop/Backdrop';
import FoodBuilder from '../../../components/FoodBuilder/FoodBuilder';
import OrderSummary from '../../../components/FoodBuilder/OrderSummary/OrderSummary';
import Drinks from '../../../components/Drinks&Additionals/Drinks/Drinks';
import Additionals from '../../../components/Drinks&Additionals/Additionals/Additionals';

import OrderSummaryButton from '../../../assets/images/orderSummaryButton.svg';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import Button from '@material-ui/core/Button';

const useStyles = theme => ({
    root: {
      width: '100%',
      height: '80%',
      backgroundColor: 'transparent',
    },
    listItemText:{
        fontSize:'2.3em',
        fontWeight: '200',
        letterSpacing: '8px',
        textAlign: 'center'
    },
    secondList: {
        borderBottom: '1px solid lightgray',
        paddingLeft: '30px',
        paddingBottom: '15px',
        marginBottom: '20px'
    },
    header: {
        margin: '20px 0',
        width: '100%',
        paddingBottom: '35px',
    },
    price: {
        fontWeight: '200'
    }
  });

class FoodMaker extends Component {

    state = {
        showDrawer: false,
        showBuilder: false,
        whichBuidler: null,
        showOrderSummary: false,
        totalPriceDrinksAdditionals: 0,
        drinksAdditionals: {},
        drinks: {
            Cola: {
                price: '1.25',
                amount: 0
            },
            Pepsi: {
                price: '1.25',
                amount: 0
            },
            Sprite: {
                price: '1.00',
                amount: 0
            },
            Fanta: {
                price: '1.00',
                amount: 0
            },
            Water: {
                price: '1.50',
                amount: 0
            },
            Juice: {
                price: '1.75',
                amount: 0
            }
        },
        additionals: {
            friesFrench: {
                price: '1.25',
                amount: 0
            },
            wafelsFries: {
                price: '1.75',
                amount: 0
            },
            cheeseFried: {
                price: '1.75',
                amount: 0
            },
            chocolateIceCream: {
                price: '2.00',
                amount: 0
            },
            strawberryIceCream: {
                price: '2.00',
                amount: 0
            },
            blueberryIceCream: {
                price: '2.25',
                amount: 0
            }
        }
    }

    addRemoveDrinksAdditionalsHandler = (name, type, from) => {
        let updatedDrinksAdditionals = {...this.state.drinksAdditionals};
        let updatedPrice = this.state.totalPriceDrinksAdditionals;
        const updatedState = {...this.state[from]};
        const updatedAmount = {...updatedState[name]};
        if(type === 'remove' && updatedAmount.amount !== 0){
            updatedAmount.amount -= 1;
            updatedPrice -= Number(updatedAmount.price);
            if(updatedDrinksAdditionals[name] > 1){
                updatedDrinksAdditionals[name] -= 1;
            }else{
                delete updatedDrinksAdditionals[name];
            }
        }else if(type === 'add'){
            updatedAmount.amount += 1;
            updatedPrice += Number(updatedAmount.price);
            if(typeof updatedDrinksAdditionals[name] === 'undefined'){
                updatedDrinksAdditionals[name] = 1;
            }else {
                updatedDrinksAdditionals[name] += 1;
            }
        }
        updatedState[name] = updatedAmount;
        this.setState({[from]: updatedState, totalPriceDrinksAdditionals: updatedPrice, drinksAdditionals: updatedDrinksAdditionals});
    }

    showDrawerHandler = () => {
        this.setState({showDrawer: true});
    }

    showOrderSummaryHandler = () => {
        this.setState({showOrderSummary: !this.state.showOrderSummary});
    }

    showBuilderHandler = (builder) => {
        this.setState({showBuilder: true, whichBuidler: builder});
    }

    CloseHandler = () => {
        this.setState({showBuilder: false, showDrawer: false});
    }

    AddToSummaryHandler = () => {
        if(Object.keys(this.state.drinksAdditionals).length === 0){
            this.props.enqueueSnackbar('Please Add Something!', {variant: 'error'});
        }else {
            Object.keys(this.state.drinksAdditionals).map(e => {
                if(this.state.drinks[e] === undefined){
                    return this.props.addOrder({
                        name: e,
                        price: Number(this.state.additionals[e].price) * Number(this.state.drinksAdditionals[e]),
                        amount: this.state.drinksAdditionals[e]
                    })
                }else{
                    return this.props.addOrder({
                        name: e,
                        price: Number(this.state.drinks[e].price) * Number(this.state.drinksAdditionals[e]),
                        amount: this.state.drinksAdditionals[e]
                    })
                }
            })
            this.setState(foodMakerState);
            this.props.enqueueSnackbar('Added to Order Summary!',  {variant: 'success'} );
        }
    }

    render(){

        const { classes } = this.props;

        let orderSummaryButton = null;
        if(this.props.orderSummary.length > 0){
            orderSummaryButton = (
                <div className='FDFloatingButton' onClick={this.showOrderSummaryHandler}>
                    <div className='divInFloatingButton'>{this.props.orderSummary.length}</div>
                    <img src={OrderSummaryButton} alt='OrderSummaryButton'/>
                </div>
            )
        }

        return(
            <div className='FDContainer'>
                <div className='FDCuponDivContainer'>
                    <div className='FDHeaderCupon'>
                        <h1> Want to try and win a Cupon? </h1>
                        <h2> - Don't Worry, It's Free! </h2>
                    </div>
                    <button className='FDCupponButton'> <CardGiftcardIcon fontSize='large' className='FDCuponIcon'/> Get the Cupon</button>
                </div>
                {orderSummaryButton}
                <OrderSummary historyProp={this.props.history} show={this.state.showOrderSummary} type='small'/>
                <MenuDrawer show={this.state.showDrawer}/>
                <Backdrop showDrawer={this.state.showDrawer} showBuilder={this.state.showBuilder} close={this.CloseHandler}/>
                <FoodBuilder show={this.state.showBuilder} close={this.CloseHandler} builder={this.state.whichBuidler}/>

                <div className='FDLayout'>
                    <div className='FDMenu'>
                        <RestaurantMenu showDrawer={this.showDrawerHandler}/>
                    </div> 
                    <div className='FDMakeDiv'>
                        <List
                            component="nav" 
                            aria-labelledby="nested-list-subheader"
                            subheader={<Typography variant='h2' className={classes.header}> Why not be creative! </Typography>} 
                            className={classes.root}>
                            <div className='FDFlexerDiv'>
                                <ListItem button className='FDListItem' onClick={() => this.showBuilderHandler('Burger')}>
                                    <ListItemIcon>
                                        <AddIcon color='error' fontSize='large' className='FDPlusIcon'/>
                                    </ListItemIcon>
                                    <ListItemText primary="Make your Burger" classes={{primary: classes.listItemText}}/>
                                </ListItem>
                                <ListItem button className='FDListItem' onClick={() => this.showBuilderHandler('Pizza')}>
                                    <ListItemIcon>
                                        <AddIcon color='error' fontSize='large' className='FDPlusIcon'/>
                                    </ListItemIcon>
                                    <ListItemText primary="Make your Pizza" classes={{primary: classes.listItemText}}/>
                                </ListItem>
                                <ListItem button className='FDListItem' onClick={() => this.showBuilderHandler('Salad')}>
                                    <ListItemIcon>
                                        <AddIcon color='error' fontSize='large' className='FDPlusIcon'/>
                                    </ListItemIcon>
                                    <ListItemText primary="Make your Salad" classes={{primary: classes.listItemText}}/>
                                </ListItem>
                                <ListItem button className='FDListItem' onClick={() => this.showBuilderHandler('Wafel')}>
                                    <ListItemIcon>
                                        <AddIcon color='error' fontSize='large' className='FDPlusIcon'/>
                                    </ListItemIcon>
                                    <ListItemText primary="Make your Wafel" classes={{primary: classes.listItemText}}/>
                                </ListItem>
                            </div>
                        </List>
                        <div className='FDDrinksAndAdditionals'>
                            <div className='FDDrinks'>
                                <Typography variant='h2' className={classes.header}> Drinks </Typography>
                                {Object.keys(this.state.drinks).map(e => <Drinks key={e} name={e} clicked={this.addRemoveDrinksAdditionalsHandler} amount={this.state.drinks[e].amount} price={this.state.drinks[e].price}/>)}
                            </div>
                            <div style={{width: '0.5px', height: '800px', backgroundColor: 'lightgray'}}></div>
                            <div className='FDAdditionals'>
                                <Typography variant='h2' className={classes.header}> Additionals </Typography>
                                {Object.keys(this.state.additionals).map(e => <Additionals key={e} name={e} clicked={this.addRemoveDrinksAdditionalsHandler} amount={this.state.additionals[e].amount} price={this.state.additionals[e].price}/>)}
                            </div>
                        </div>
                        <div className='FDPrice'>
                            <Typography variant='h3' className={classes.price}>Drinks & Adds:</Typography>
                            <Typography variant='h3' className={classes.price} style={{paddingRight: '80px'}}>{Number.parseFloat( this.state.totalPriceDrinksAdditionals ).toFixed( 2 )}$</Typography>
                            <Button variant="outlined" size="large" color="primary" className='FDDrinksAdditionalsButton' onClick={this.AddToSummaryHandler}> Add To Summary </Button>
                        </div>
                        <div className='FDDrinksAdditionalsSummary'>
                            <h1>You Added: </h1>
                            <div style={{boxSizing: 'border-box', padding: '0 20px 20px 20px'}}>
                                {Object.keys(this.state.drinksAdditionals).map((e, index) => {
                                        return (
                                            
                                            <div className='AddedSpans' key={index}> 
                                                {e.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}({this.state.drinksAdditionals[e]}), 
                                            </div>

                                        )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orderSummary: state.orderSummary.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addOrder: (order) => dispatch(addOrderSummary(order))
    }
}

FoodMaker.propTypes = {
    classes: propTypes.object.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(withSnackbar(FoodMaker)));