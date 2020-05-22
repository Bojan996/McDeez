import React, { Component } from 'react';
import propTypes from 'prop-types';
import './FoodMaker.css';
import RestaurantMenu from '../../../components/RestaurantMenu/RestaurantMenu';
import MenuDrawer from '../../../components/RestaurantMenu/MenuDrawer/MenuDrawer';
import Backdrop from '../../../components/UI/Backdrop/Backdrop';
import FoodBuilder from '../../../components/FoodBuilder/FoodBuilder';
import OrderSummary from '../../../components/FoodBuilder/OrderSummary/OrderSummary';
import Drinks from '../../../components/Drinks&Additionals/Drinks/Drinks';
import Additionals from '../../../components/Drinks&Additionals/Additionals/Additionals';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';

const useStyles = theme => ({
    root: {
      width: '100%',
      height: '80%',
      backgroundColor: theme.palette.background.paper,
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
        paddingBottom: '35px'
    }
  });

class FoodMaker extends Component {

    state = {
        showDrawer: false,
        showBuilder: false,
        whichBuidler: null,
        showOrderSummary: false,
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
            frenchFries: {
                price: '1.25',
                amount: 0
            },
            wafelFries: {
                price: '1.75',
                amount: 0
            },
            friedCheese: {
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
        const updatedState = {...this.state[from]};
        const updatedAmount = {...updatedState[name]};
        if(type === 'remove' && updatedAmount.amount !== 0){
            updatedAmount.amount -= 1;
        }else if(type === 'add'){
            updatedAmount.amount += 1;
        }
        updatedState[name] = updatedAmount;
        this.setState({[from]: updatedState});
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

    render(){

        const { classes } = this.props;

        return(
            <div className='FDContainer'>
                <div className='FloatingButton' onClick={this.showOrderSummaryHandler}></div>
                <OrderSummary historyProp={this.props.history} show={this.state.showOrderSummary}/>
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
                    </div>
                </div>
            </div>
        )
    }
}

FoodMaker.propTypes = {
    classes: propTypes.object.isRequired
};


export default withStyles(useStyles, { withTheme: true })(FoodMaker);