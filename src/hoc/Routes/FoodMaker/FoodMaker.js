import React, { Component } from 'react';
import propTypes from 'prop-types';
import './FoodMaker.css';
import RestaurantMenu from '../../../components/RestaurantMenu/RestaurantMenu';
import MenuDrawer from '../../../components/RestaurantMenu/MenuDrawer/MenuDrawer';
import Backdrop from '../../../components/UI/Backdrop/Backdrop';
import FoodBuilder from '../../../components/FoodBuilder/FoodBuilder';
import OrderSummary from '../../../components/FoodBuilder/OrderSummary/OrderSummary';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import Drinks from '../../../components/Drinks&Additionals/Drinks/Drinks';

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
        }
    }

    addRemoveDrinksHandler = (name, type) => {
        const updatedDrinks = {...this.state.drinks};
        const updatedAmount = {...updatedDrinks[name]};
        if(type === 'remove' && updatedAmount.amount !== 0){
            updatedAmount.amount -= 1;
        }else if(type === 'add'){
            updatedAmount.amount += 1;
        }
        updatedDrinks[name] = updatedAmount;
        this.setState({drinks: updatedDrinks});
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
                                {Object.keys(this.state.drinks).map(e => <Drinks type={e} key={e} clicked={this.addRemoveDrinksHandler} amount={this.state.drinks[e].amount} price={this.state.drinks[e].price} name={e}/>)}
                            </div>
                            <div style={{width: '0.5px', height: '400px', backgroundColor: 'lightgray'}}></div>
                            <div className='FDAdditionals'>
                                <Typography variant='h2' className={classes.header}> Additionals </Typography>
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