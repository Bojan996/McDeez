import React from 'react';
import './MenuBuilder.css';

import { makeStyles  } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import MenuItems from './MenuItems/MenuItems';



const useStyles = makeStyles(theme => {
    return {
        root: {
            width: '100%',
            height: '98.96%',
            borderRight: '1px solid lightgray',
            paddingRight: '15px',
            backgroundColor: theme.palette.background.paper
        },
        header: {
            fontWeight: '200',
            padding: '25px 0 15px 0',
            borderBottom: '1px solid lightgray',
            borderRadius: '5px'
        }
    }
})

const menuBuilder = (props) => {

    const classes = useStyles();

    return (
        <div className='MBContainer'>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <Typography variant='h3' className={[classes.header, 'MBIngredientHeader'].join(' ')}>
                        Ingredients
                    </Typography>
                } className={classes.root}>
                <MenuItems builder={props.builder} clicked={props.clicked} prices={props.prices}/>
            </List>
            
        </div>
    )
}


export default menuBuilder;