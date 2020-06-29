import React from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';

import { makeStyles  } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EcoIcon from '@material-ui/icons/Eco';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CakeIcon from '@material-ui/icons/Cake';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';


const useStyles = makeStyles(theme => {
    return {
        root: {
            width: '100%',
            height: '80%',
            backgroundColor: theme.palette.background.paper,
            padding: '0',
            borderRadius: '10px'
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
        },
        BootomHeader: {
            fontWeight: '200',
            marginTop: '30px'
        }
    }
})


const restaurantMenu = (props) => {

    const classes = useStyles();

    const scrollUpHandler = () => {
        const scrollTo = document.querySelector('#scrollTo');
        scrollTo.scrollIntoView({block: 'center', behavior: 'smooth'});
    }

    return (
        <Aux>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <Typography variant='h2' className={classes.header}>
                        Menu
                    </Typography>
                }
                className={classes.root}
                >
                <ListItem>
                    <ListItemIcon>
                        <FastfoodIcon fontSize='large'/>
                    </ListItemIcon>
                    <ListItemText primary="Preamde Burgers" />
                </ListItem>
                <List component="div" className={[classes.secondList, 'RMSecondList'].join(' ')}>
                    <ListItem button  className='RMSecondListItem' onClick={() => props.showDrawer("Dubble Cheese Burger", "Meat, Bacon, Tomato, Cheddar Cheese, Lettuce, Ketchup, Mustard, Burger Sauce", "4.50")}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dubble Cheese Burger"/>
                    </ListItem>
                    <ListItem button  className='RMSecondListItem' onClick={() => props.showDrawer("Barbecue Burger", "Meat, Bacon, Tomato, Onion, Cheddar Cheese, Lettuce, Ketchup, Mustard, Barbeque Sauce", "4.50")}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Barbecue Burger"/>
                    </ListItem>
                    <ListItem button  className='RMSecondListItem' onClick={() => props.showDrawer("Fat Boy Burger", "Meat, Bacon, Rosemary, Cheddar Cheese, Lettuce, Ketchup, Mustard, Barbeque Sauce", "5.50")}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Fat Boy Burger" id='scrollTo'/>
                    </ListItem>
                    <ListItem button className='RMSecondListItem' onClick={() => props.showDrawer("Vegie Bruger", "Tofu, Chickpeas, Mushrooms, Eggplant, Parsley, Paprika, Cheddar Cheese, Zukini, Olive", "5.00")}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Vegie Bruger"/>
                    </ListItem>
                    </List>
                <ListItem>
                    <ListItemIcon>
                        <LocalPizzaIcon fontSize='large'/>
                    </ListItemIcon>
                    <ListItemText primary="Premade Pizza" />
                </ListItem>
                <List component="div" className={[classes.secondList, 'RMSecondList'].join(' ')}>
                    <ListItem button  className='RMSecondListItem' onClick={() => props.showDrawer("Capricosa", "Tomato Sauce, Cheese, Mozzarela, Ham, Mushrooms, Artichoke, Basil, Olive, Salt, Pepper", "7.00")}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Capricosa"/>
                    </ListItem>
                    <ListItem button  className='RMSecondListItem' onClick={() => props.showDrawer("Margarita", "Tomato Sacue, Cheese, Mozzarela, Basil, Parmigiano, Salt, Olive, Pepper", "6.50")}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Margarita"/>
                    </ListItem>
                    <ListItem button  className='RMSecondListItem' onClick={() => props.showDrawer("Meat Pizza", "Tomato Sacue, Cheese, Mozzarela, Parmigiano, Ham, Sausage, Bacon, Mushrooms, Basil, Olive, Salt", "8.00")}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Meat Pizza"/>
                    </ListItem>
                    <ListItem button  className='RMSecondListItem' onClick={() => props.showDrawer("Sausage Pizza", "Tomato Sauce, Sausage, Cheese, Parmigiano, Ham, Mushrooms, Basil, Olive, Salt", "7.50")}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sausage Pizza"/>
                    </ListItem>
                    </List>
                <ListItem>
                    <ListItemIcon>
                        <EcoIcon fontSize='large'/>
                    </ListItemIcon>
                    <ListItemText primary="Primade Salads" />
                </ListItem>
                <List component="div" className={[classes.secondList, 'RMSecondList'].join(' ')}>
                    <ListItem button  className='RMSecondListItem' onClick={() => props.showDrawer("Cesar Salad", "Crouton, Cheese, Mayonnaise, Parmigiano, Lettuce, Garlic, Lemon, Bacon, Salt, Olive", "5.00")}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Cesar Salad"/>
                    </ListItem>
                    <ListItem button  className='RMSecondListItem' onClick={() => props.showDrawer("Salmon And Rice", "Salmon, Rice, Cheese, Mayonnaise, Parmigiano, Lettuce, Onion, Parsley, Peas, Salt, Olive", "10.00")}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Salmon And Rice"/>
                    </ListItem>
                    <ListItem button  className='RMSecondListItem' onClick={() => props.showDrawer("Tuna Salad", "Tuna, Mozzarela, Cheese, Onion, Basil, Mayonnaise, Lettuce, Lemon, Salt, Parsley, Olive Oil", "6.00")}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tuna Salad"/>
                    </ListItem>
                    <ListItem button  className='RMSecondListItem' onClick={() => props.showDrawer("Oyster Speacial", "Oyster, Mushrooms, Cheese, Olive Oil, Parmigiano, Lettuce, Basil, Lemon, Salt, Parsley", "8.50")}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Oyster Speacial"/>
                    </ListItem>
                    </List>
                    <ListItem>
                        <ListItemIcon>
                            <CakeIcon fontSize='large'/>
                        </ListItemIcon>
                        <ListItemText primary="Primade Wafels" />
                    </ListItem>
                    <List component="div" className={[classes.secondList, 'RMSecondList'].join(' ')}>
                    <ListItem button  className='RMSecondListItem' onClick={() => props.showDrawer("Chocolate Death", "White Chocolate, Black Chocolate, Belgium Chocolate, Vanila Ice Cream, Nuts, Chocolate Sauce", "4.00")}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Chocolate Death"/>
                    </ListItem>
                    <ListItem button  className='RMSecondListItem' onClick={() => props.showDrawer("Ice Cream Madness", "Vanila Ice Cream, Chocolate Ice Cream, Strawberry Ice Cream, Chocolate Sauce, Cherry, Sprinkles", "5.00")}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Ice Cream Madness"/>
                    </ListItem>
                    <ListItem button  className='RMSecondListItem' onClick={() => props.showDrawer("Fruity Wafel", "Blackberry, Strawberry, Blueberry, Pineapple, Sugar, Honey", "5.00")}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Fruity Wafel"/>
                    </ListItem>
                    <ListItem button  className='RMSecondListItem' onClick={() => props.showDrawer("Candy Wafel", "Whipped Cream, Three Stacks of Wafels, M&M's, Sprinkles, Honey", "6.00")}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Candy Wafel"/>
                    </ListItem>
                    </List>
                    <div className='RMWeSayDiv'>
                        <Typography variant='h3' className={classes.BootomHeader}>
                            We Say: 
                        </Typography>
                        <h2 style={{padding: '15px', fontWeight: '200', lineHeight:'40px', margin: '10px 0 20px 0'}}>- "Try building <span className='RMWeSaySpan'>your own </span>food, It's so fun!" </h2>
                        <Fab color="primary" aria-label="scroll" className='RMScrollButton' onClick={scrollUpHandler}>
                            <NavigationIcon fontSize='large'/>
                        </Fab>
                    </div>
                </List>
            </Aux>
    )
}


export default restaurantMenu;