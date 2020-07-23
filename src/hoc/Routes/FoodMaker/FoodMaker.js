import React, { useState, useEffect } from 'react';
import './FoodMaker.css';
import { connect } from 'react-redux';
import { addOrderSummary } from '../../../store/actions/orderSummary';
import { withSnackbar } from 'notistack';
import { lazyLoad } from '../../../helpers/intersectionObserver';

import { foodMakerStateDrinks } from '../../../assets/FoodBuilderInitialState/FoodBuilderInitialState';
import { foodMakerStateAdditionals } from '../../../assets/FoodBuilderInitialState/FoodBuilderInitialState';

import RestaurantMenu from '../../../components/RestaurantMenu/RestaurantMenu';
import MenuDrawer from '../../../components/RestaurantMenu/MenuDrawer/MenuDrawer';
import Backdrop from '../../../components/UI/Backdrop/Backdrop';
import FoodBuilder from '../../../components/FoodBuilder/FoodBuilder';
import OrderSummary from '../../../components/FoodBuilder/OrderSummary/OrderSummary';
import Drinks from '../../../components/Drinks&Additionals/Drinks/Drinks';
import Additionals from '../../../components/Drinks&Additionals/Additionals/Additionals';
import Footer from '../../../components/UI/Footer/Footer';
import BackgroundForPhone from '../../../assets/images/backgrounds/FoodMakerBackgroundForPhone.jpg';
import BackgroundForPhoneMin from '../../../assets/images/backgrounds/FoodMakerBackgroundForPhoneMin.jpg';

import OrderSummaryButtonPicture from '../../../assets/images/orderSummaryButton.svg';
import Background from '../../../assets/images/backgrounds/burgerNo2.jpg';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
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
}));

const foodMaker = (props) => {

    const [showDrawer, setShowDrawer] = useState(false);
    const [drawerClicked, setDrawerClicked] = useState('');
    const [drawerIngredients, setDrawerIngredients] = useState('');
    const [drawerPrice, setDrawerPrice] = useState('');
    const [showBuilder, setShowBuilder] = useState(false);
    const [whichBuidler, setWhichBuidler] = useState(null);
    const [showOrderSummary, setShowOrderSummary] = useState(false);
    const [totalPriceDrinksAdditionals, setTotalPriceDrinksAdditionals] = useState(0);
    const [drinksAdditionals, setDrinksAdditionals] = useState({});
    const [drinks, setDrinks] = useState({
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
    });
    const [additionals, setAdditionals] = useState({
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
    });

    useEffect(() => {
        const targets = [...document.querySelectorAll('.lazyLoadFoodMaker')];
        targets.forEach(e => lazyLoad(e, 'FoodMakerFade'));
    }, []);

    const addRemoveDrinksAdditionalsHandler = (name, type, from) => {
        let updatedDrinksAdditionals = {...drinksAdditionals};
        let updatedPrice = totalPriceDrinksAdditionals;
        const updatedState = from === 'drinks' ? {...drinks} : {...additionals};
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
        from === 'drinks' ? setDrinks(updatedState) : setAdditionals(updatedState);
        setTotalPriceDrinksAdditionals(updatedPrice);
        setDrinksAdditionals(updatedDrinksAdditionals);
    }

    const showDrawerHandler = (type, ingredients, price) => {
        setDrawerClicked(type);
        setDrawerIngredients(ingredients);
        setDrawerPrice(price);
        setShowDrawer(true);
    }

    const showOrderSummaryHandler = () => {
        setShowOrderSummary(!showOrderSummary);
    }

    const showBuilderHandler = (builder) => {
        setShowBuilder(true);
        setWhichBuidler(builder);
    }

    const closeDrawerHandler = () => {
        setShowBuilder(false);
        setShowDrawer(false);
        setDrawerClicked('');
        setDrawerIngredients('');
        setDrawerPrice('');
    }

    const addToSummaryHandler = () => {
        if(Object.keys(drinksAdditionals).length === 0){
            props.enqueueSnackbar('Please Add Something!', {variant: 'error'});
        }else {
            Object.keys(drinksAdditionals).map(e => {
                if(drinks[e] === undefined){
                    return props.addOrder({
                        name: e,
                        type: 'Drinks And Additionals',
                        price: Number(additionals[e].price) * Number(drinksAdditionals[e]),
                        amount: drinksAdditionals[e]
                    })
                }else{
                    return props.addOrder({
                        name: e,
                        type: 'Drinks And Additionals',
                        price: Number(drinks[e].price) * Number(drinksAdditionals[e]),
                        amount: drinksAdditionals[e]
                    })
                }
            });           
            setTotalPriceDrinksAdditionals(0);
            setDrinksAdditionals({});
            setDrinks(foodMakerStateDrinks());
            setAdditionals(foodMakerStateAdditionals());
            props.enqueueSnackbar('Added to Order Summary!',  {variant: 'success'} );           
        }
    }

    const addToSummaryPremadeMenuHandler = () => {
        if((drawerClicked || drawerIngredients || drawerPrice) === null){
            props.enqueueSnackbar('Please Add Something!', {variant: 'error'});
        }else {
            props.addOrder({
                name: drawerClicked,
                price: Number(drawerPrice),
                amount: 1,
                type: 'Premade Menu'
            });
            closeDrawerHandler();
            props.enqueueSnackbar('Added to Order Summary!',  {variant: 'success'} );
        }
    }

    const classes = useStyles();

    let orderSummaryButton = null;
    let openSummaryBackdrop = null;
    if(props.orderSummary.length > 0){
        orderSummaryButton = (
            <div className='FDFloatingButton' onClick={showOrderSummaryHandler}>
                <div className='divInFloatingButton'>{props.orderSummary.length}</div>
                <img src={OrderSummaryButtonPicture} alt='OrderSummaryButton'/>
            </div>
        );
    }
    if(showOrderSummary){
        openSummaryBackdrop = (
            <div onClick={showOrderSummaryHandler} style={{position: 'fixed', zIndex: '80', width: '100%', top: '0', bottom: '0', backgroundColor: 'transparent'}}></div>
        );
    }

    return(
        <div className='FDContainer'>
            <img className='FDHeadingImgPhone' src={BackgroundForPhone} alt='It is a burger'/>
            <img className='FDHeadingImgPhoneMin' src={BackgroundForPhoneMin} alt='It is a burger'/>
            <img className='FDHeadingImg' src={Background} alt='heading of the site'/>
            <div className='FDHeaderContainer'>
                <h1> McDeez offers speacial service </h1>
                <h2> Make your own food! </h2>
            </div>
            {orderSummaryButton}
            {openSummaryBackdrop}
            <OrderSummary historyProp={props.history} show={showOrderSummary} type='small'/>
            <MenuDrawer type={drawerClicked} ingredients={drawerIngredients} price={drawerPrice} show={showDrawer} clicked={addToSummaryPremadeMenuHandler}/>
            <Backdrop showDrawer={showDrawer} showBuilder={showBuilder} close={closeDrawerHandler}/>
            <FoodBuilder show={showBuilder} close={closeDrawerHandler} builder={whichBuidler}/>

            <div className='FDLayout'>
                <div className='FDMenu lazyLoadFoodMaker'>
                    <RestaurantMenu showDrawer={showDrawerHandler}/>
                </div> 
                <div className='FDMakeDiv lazyLoadFoodMaker'>
                    <List
                        component="nav" 
                        aria-labelledby="nested-list-subheader"
                        subheader={<Typography variant='h2' className={classes.header}> Why not be creative! </Typography>} 
                        className={classes.root}>
                        <div className='FDFlexerDiv'>
                            <ListItem button className='FDListItem' onClick={() => showBuilderHandler('Burger')}>
                                <ListItemIcon>
                                    <AddIcon color='error' fontSize='large' className='FDPlusIcon'/>
                                </ListItemIcon>
                                <ListItemText primary="Make your Burger" classes={{primary: classes.listItemText}}/>
                            </ListItem>
                            <ListItem button className='FDListItem' onClick={() => showBuilderHandler('Pizza')}>
                                <ListItemIcon>
                                    <AddIcon color='error' fontSize='large' className='FDPlusIcon'/>
                                </ListItemIcon>
                                <ListItemText primary="Make your Pizza" classes={{primary: classes.listItemText}}/>
                            </ListItem>
                            <ListItem button className='FDListItem' onClick={() => showBuilderHandler('Salad')}>
                                <ListItemIcon>
                                    <AddIcon color='error' fontSize='large' className='FDPlusIcon'/>
                                </ListItemIcon>
                                <ListItemText primary="Make your Salad" classes={{primary: classes.listItemText}}/>
                            </ListItem>
                            <ListItem button className='FDListItem' onClick={() => showBuilderHandler('Wafel')}>
                                <ListItemIcon>
                                    <AddIcon color='error' fontSize='large' className='FDPlusIcon'/>
                                </ListItemIcon>
                                <ListItemText primary="Make your Wafel" classes={{primary: classes.listItemText}}/>
                            </ListItem>
                        </div>
                    </List>
                    <div className='FDDrinksAndAdditionals lazyLoadFoodMaker'>
                        <div className='FDDrinks'>
                            <Typography variant='h2' className={classes.header}> Drinks </Typography>
                            {Object.keys(drinks).map(e => <Drinks key={e} name={e} clicked={addRemoveDrinksAdditionalsHandler} amount={drinks[e].amount} price={drinks[e].price}/>)}
                        </div>
                        <div className='FDDrinksAndAdditionalsBorderDiv' style={{width: '0.5px', height: '800px', backgroundColor: 'lightgray'}}></div>
                        <div className='FDAdditionals'>
                            <Typography variant='h2' className={classes.header}> Additionals </Typography>
                            {Object.keys(additionals).map(e => <Additionals key={e} name={e} clicked={addRemoveDrinksAdditionalsHandler} amount={additionals[e].amount} price={additionals[e].price}/>)}
                        </div>
                    </div>
                    <div className='FDPrice'>
                        <Typography variant='h3' className={classes.price}>Drinks & Adds:</Typography>
                        <Typography variant='h3' className={classes.price} style={{paddingRight: '80px'}}>{Number.parseFloat( totalPriceDrinksAdditionals ).toFixed( 2 )}$</Typography>
                        <Button variant="outlined" size="large" color="primary" className='FDDrinksAdditionalsButton' onClick={addToSummaryHandler}> Add To Summary </Button>
                    </div>
                    <div className='FDDrinksAdditionalsSummary'>
                        <h1>You Added: </h1>
                        <div style={{boxSizing: 'border-box', padding: '0 20px 20px 20px'}}>
                            {Object.keys(drinksAdditionals).map((e, index) => {
                                    return (
                                        
                                        <div className='AddedSpans' key={index}> 
                                            {e.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}({drinksAdditionals[e]}), 
                                        </div>

                                    )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer history={props.history}/>
        </div>
    )
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


export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(foodMaker));