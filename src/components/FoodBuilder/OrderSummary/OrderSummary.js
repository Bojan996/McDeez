import React from 'react';
import './OrderSummary.css';
import { connect } from 'react-redux';
import { deleteOrderSummary } from '../../../store/actions/orderSummary';

import OrderCard from './OrderCards/OrderCard';


const orderSummary = (props) => {

    let orderCards = props.orders.map((e, index) => {
        return <OrderCard key={index} order={e} builder={e.name} clicked={() => props.delete(e)} type={props.type}/>
    })

    const clickHandler = () => {
        if(props.isAuth){
            props.historyProp.push('/checkout');
        }else{
            props.historyProp.push('/login');
        }
    }

    let classes = props.show ? 'OSContainer OSContainerOpen' : 'OSContainer OSContainerClossed';

    return (
        <div className={classes}>
            <button className='OSCheckoutButton' onClick={clickHandler} disabled={props.orders.length === 0 ? true : false}>Continue To Checkout!</button>
            <div className='OSCardContainer'>
                {orderCards}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        orders: state.orderSummary.orders
    }
}

const MapDispatchToProps = dispatch => {
    return {
        delete: (order) => dispatch(deleteOrderSummary(order))
    }
}

export default connect(mapStateToProps, MapDispatchToProps)(orderSummary);