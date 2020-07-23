import React, { useState, useEffect } from 'react';
import './Orders.css';
import { connect } from 'react-redux';
import { fetchingOrders } from '../../../store/actions/order';
import { addOrderSummary } from '../../../store/actions/orderSummary';
import { clearOrderSummary } from '../../../store/actions/orderSummary';

import OrderCard from '../../../components/FoodBuilder/OrderSummary/OrderCards/OrderCard';
import Spinner from '../../../components/UI/Spinner/Spinner';


const orders = (props) => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(props.isAuth){
            props.onFetchOrders(props.idToken, props.userId);
        }else{
            props.history.replace('/login');
        }
    }, []);

    const orderAgainHandler = (index) => {
        setLoading(true);
        props.clearSummary();
        setTimeout(e => {
            setLoading(false);
            props.orders[index].orders.map(e => {
                return props.addOrder(e);
            });
            props.history.push('/checkout');
        }, 1000);
    }

    let orders = null;
    if(props.orders.length > 0){
        orders = props.orders.map((firstEl, firstIndex) => {
            return (
                <div className='OneTimeOrder' key={firstIndex}>
                    <div className='OrdersHeadingSection'>
                        <h2 className='OrdersHeadingSectionEmail'>{firstEl.orderData.email}</h2>
                        <h2 className='OrdersHeadingSectionSuccessful' style={{fontSize: '40px', color: 'rgb(26, 156, 70)'}}>Successful !</h2>
                        <h2 className='OrdersHeadingSectionOrderDate'>{firstEl.orderData.date}</h2>
                    </div>
                    {firstEl.orders.map((secondEl, SecondIndex) => {
                        return (
                            <div className='OrdersOrderCardContainer' key={firstIndex + SecondIndex}>
                                <OrderCard order={secondEl} builder={secondEl.name}/>
                            </div>
                        )
                    })}
                    <div className='OrdersBottomSection'>
                        <h2>Price: {firstEl.price}$</h2>
                        <button className='OrdersSendAgain' onClick={() => orderAgainHandler(firstIndex)}>{loading ? <Spinner style={{fontSize: '4px', color: '#FFCD39', margin: '4px auto', borderColor: 'white', borderLeftColor: '#ffc400', borderWidth: '7px'}}/> : 'Order Again!'}</button>
                    </div>
                </div>
            )
        })
    }else {
        orders = <h1 className='OrdersMainHeader' style={{marginTop: '200px'}}>Sorry, you don't have past orders...</h1>
    }

    let loader = props.loading ? <Spinner style={{backgroundColor: 'white'}}/> : null;

    return (
        <div className='OrdersLayout'>
            <h1 className='OrdersMainHeader'>These are your past orders</h1>
            {orders}
            {loader}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        orders: state.orders.orders,
        loading: state.orders.loading,
        idToken: state.auth.idToken,
        userId: state.auth.localId,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (idToken, userId) => dispatch(fetchingOrders(idToken, userId)),
        addOrder: (order) => dispatch(addOrderSummary(order)),
        clearSummary: () => dispatch(clearOrderSummary())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(orders);