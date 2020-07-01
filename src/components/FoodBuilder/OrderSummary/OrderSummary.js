import React from 'react';
import './OrderSummary.css';
import { connect } from 'react-redux';
import { deleteOrderSummary } from '../../../store/actions/orderSummary';
import CSSTransition from 'react-transition-group/CSSTransition';

import OrderCard from './OrderCards/OrderCard';


const animationTiming = {
    enter: 400,
    exit: 400
}


const orderSummary = (props) => {

    let totalPrice = [];

    let orderCards = props.orders.map((e, index) => {
        totalPrice.push(Number(e.price));
        return <OrderCard key={index} order={e} builder={e.name} clicked={() => props.delete(e)} type={props.type}/>
    });

    const totalPriceNum = totalPrice.reduce((a, b) => a + b, 0);

    const clickHandler = () => {
        if(props.isAuth){
            props.historyProp.push('/checkout');
        }else{
            props.historyProp.push('/login');
        }
    }

    return (
        <CSSTransition
            mountOnEnter
            unmountOnExit
            in={props.show}
            timeout={animationTiming}
            classNames='OSContainerTransition'>
            <div className='OSContainer' id='OSContainerScroll'>
                <h2 style={{margin: '10px', fontWeight: '200', color: 'black', fontSize: '30px'}}>Total Price: {Number.parseFloat( totalPriceNum ).toFixed( 2 )}$</h2>
                <div className='OSCardContainer'>
                    {orderCards}
                </div>
                <button className='OSCheckoutButton' onClick={clickHandler} disabled={props.orders.length === 0 ? true : false}>Continue To Checkout!</button>
            </div>
        </CSSTransition>
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