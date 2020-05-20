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


const useStyles = makeStyles(theme => {
    return {
        root: {
            width: '100%',
            height: '80%',
            backgroundColor: theme.palette.background.paper
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
    }
})


const restaurantMenu = (props) => {

    const classes = useStyles();

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
                <List component="div" className={classes.secondList}>
                    <ListItem button  onClick={props.showDrawer}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dubble Cheese Burger"/>
                    </ListItem>
                    <ListItem button  onClick={props.showDrawer}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="BBQ Burger"/>
                    </ListItem>
                    <ListItem button  onClick={props.showDrawer}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Fat Boy Burger"/>
                    </ListItem>
                    <ListItem button onClick={props.showDrawer}>
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
                <List component="div" className={classes.secondList}>
                    <ListItem button  onClick={props.showDrawer}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Capricciosa"/>
                    </ListItem>
                    <ListItem button  onClick={props.showDrawer}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Margherita"/>
                    </ListItem>
                    <ListItem button  onClick={props.showDrawer}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Meat Pizza"/>
                    </ListItem>
                    <ListItem button  onClick={props.showDrawer}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Pepperoni Pizza"/>
                    </ListItem>
                    </List>
                <ListItem>
                    <ListItemIcon>
                        <EcoIcon fontSize='large'/>
                    </ListItemIcon>
                    <ListItemText primary="Primade Salads" />
                </ListItem>
                <List component="div" className={classes.secondList}>
                    <ListItem button  onClick={props.showDrawer}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Cesar Salad"/>
                    </ListItem>
                    <ListItem button  onClick={props.showDrawer}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Salmon and Rice"/>
                    </ListItem>
                    <ListItem button  onClick={props.showDrawer}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tuna Salad"/>
                    </ListItem>
                    <ListItem button  onClick={props.showDrawer}>
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
                    <List component="div" className={classes.secondList}>
                    <ListItem button  onClick={props.showDrawer}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Chocolate Death"/>
                    </ListItem>
                    <ListItem button  onClick={props.showDrawer}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Ice Cream Madness"/>
                    </ListItem>
                    <ListItem button  onClick={props.showDrawer}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Fruity Wafel"/>
                    </ListItem>
                    <ListItem button  onClick={props.showDrawer}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Candy Wafel"/>
                    </ListItem>
                    </List>
                </List>
            </Aux>
    )
}


export default restaurantMenu;