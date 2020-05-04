import React from 'react';
import './MenuItems.css';
import Aux from '../../../../hoc/Auxilary/Auxilary';
import Icons from '../../../../assets/icons/icons';

import { makeStyles  } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';





const useStyle = makeStyles(() => {
    return {
        secondList: {
            borderBottom: '1px solid lightgray',
            padding: '0 0 0 30px'
        }
    }
})


const menuItems = (props) => {

    const classes = useStyle();
    let array = null;
    

    if(typeof props.builder === 'object'){
        array = Object.keys(props.builder).map(e => {
            return (
                <Aux key={e}>
                    <ListItem>
                        <ListItemIcon>
                            <Icons icon={e}/>
                        </ListItemIcon>
                        <ListItemText primary={e} />
                    </ListItem>
                    {
                        Object.keys(props.builder[e]).map((el, index) => {
                            return (
                                    <List component="div" className={classes.secondList} key={el + index}>
                                        <ListItem button onClick={() => props.clicked(e, el)}>
                                            <ListItemIcon>
                                                <ArrowRightIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={el.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}/>
                                        </ListItem>
                                    </List>
                                )
                        })
                    }
                </Aux>
            )
        })      
    }

    return (
        <div className='MIContainer'>
            {array}
        </div> 
    )
}


export default menuItems;