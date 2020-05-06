import React, { Component } from 'react';
import propTypes from 'prop-types';
import './FoodMaker.css';
import RestaurantMenu from '../../../components/RestaurantMenu/RestaurantMenu';
import MenuDrawer from '../../../components/RestaurantMenu/MenuDrawer/MenuDrawer';
import Backdrop from '../../../components/UI/Backdrop/Backdrop';
import FoodBuilder from '../../../components/FoodBuilder/FoodBuilder';

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
        margin: '25px 0',
        width: '100%',
        borderBottom: '1px solid lightgray',
        borderRadius: '5px',
        paddingBottom: '15px'
    }
  });

class FoodMaker extends Component {

    state = {
        showDrawer: false,
        showBuilder: false,
        whichBuidler: null
    }

    showDrawerHandler = () => {
        this.setState({showDrawer: true});
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
                <h1>Welcome to the food maker</h1>
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