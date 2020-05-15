import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Checkout.css';

import TextField from '@material-ui/core/TextField';
import OrderCard from '../../../components/FoodBuilder/OrderSummary/OrderCards/OrderCard';


class Checkout extends Component{


    render(){

        const orderCards = this.props.orders.map((e, index) => {
            return <OrderCard key={index} order={e} builder={e.name}/>
        })

        const typingHandler = (event) => {
            console.log(event.target.value);
        }

        return(
            <div className='CCheckoutContent'>
                <h1>Welcome to the checkout!</h1>
                <div className='CLayout'>
                    <div className='COrderCards'>
                        <h2>Your Order Summary:</h2>
                        {orderCards}
                    </div>
                    <div className='CForm'>
                        <h2>Please fill out the information below</h2>
                        <from>
                            <TextField required id="outlined-basic" label="Name" variant="outlined" className='CTextField' onChange={(event) => typingHandler(event)}/>
                            <TextField id="outlined-basic" label="Surname" variant="outlined" className='CTextField'/>
                        </from>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders:  state.orderSummary.orders
    }
}

export default connect(mapStateToProps)(Checkout);