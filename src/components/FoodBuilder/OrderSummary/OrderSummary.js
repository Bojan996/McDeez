import React from 'react';
import './OrderSummary.css';
import { connect } from 'react-redux';

import OrderCard from './OrderCards/OrderCard';


const orderSummary = (props) => {

    let orderCards = props.orders.map((e, index) => {
        return <OrderCard key={index} order={e} builder={e.name}/>
    })

    return (
        <div className='OSContainer'>
            <h1>This is the order Summary!</h1>
            <div className='OSCardContainer'>
                {orderCards}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        orders: state.orderSummary.orders
    }
}

export default connect(mapStateToProps)(orderSummary);