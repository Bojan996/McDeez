import React, { Component } from 'react';
import './Orders.css';
import { connect } from 'react-redux';
import { fetchingOrders } from '../../../store/actions/order';

import OrderCard from '../../../components/FoodBuilder/OrderSummary/OrderCards/OrderCard';
import Spinner from '../../../components/UI/Spinner/Spinner';


class Orders extends Component {

    componentDidMount() {
        if(this.props.isAuth){
            this.props.onFetchOrders(this.props.idToken, this.props.userId);
        }else{
            this.props.history.replace('/login');
        }
    }
    
    render() {

        console.log(this.props.order);

        let orders = null;
        if(this.props.orders.length > 0){
            orders = this.props.orders.map((firstEl, firstIndex) => {
                return (
                    <div className='OneTimeOrder' key={firstIndex}>
                        <div className='OrdersHeadingSection'>
                            <h2>{firstEl.orderData.email}</h2>
                            <h2 style={{fontSize: '40px', color: 'rgb(26, 156, 70)'}}>Successful !</h2>
                            <h2>{firstEl.orderData.date}</h2>
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
                            <button className='OrdersSendAgain'>Order Again!</button>
                        </div>
                    </div>
                )
            })
        }else {
            orders = <h1 className='OrdersMainHeader' style={{marginTop: '200px'}}>Sorry, you don't have past orders...</h1>
        }

        let loader = this.props.loading ? <Spinner style={{backgroundColor: 'white'}}/> : null;

        return (
            <div className='OrdersLayout'>
                <h1 className='OrdersMainHeader'>These are your past orders</h1>
                {orders}
                {loader}
            </div>
        )
    }
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
        onFetchOrders: (idToken, userId) => dispatch(fetchingOrders(idToken, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);