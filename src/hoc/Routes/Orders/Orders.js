import React, { Component } from 'react';
import './Orders.css';
import { connect } from 'react-redux';
import { fetchingOrders } from '../../../store/actions/order';

import OrderCard from '../../../components/FoodBuilder/OrderSummary/OrderCards/OrderCard';
import Spinner from '../../../components/UI/Spinner/Spinner';


class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders(this.props.idToken, this.props.userId);
    }
    
    render() {

        let orders = null;
        if(!this.props.loading){
            orders = this.props.orders.map((firstEl, firstIndex) => {
                return (
                    <div className='OneTimeOrder' key={firstIndex}>
                        <h2 style={{width: '100%'}}>Order from: 12.10.2018 17:33</h2>
                        {firstEl.map((secondEl, SecondIndex) => {
                            return <OrderCard key={firstIndex + SecondIndex} order={secondEl} builder={secondEl.name}/>
                        })}
                    </div>
                )
            })
        }

        let loader = this.props.loading ? <Spinner style={{backgroundColor: 'white'}}/> : null;

        return (
            <div className='OrdersContainer'>
                <h1>Welcome to the oreders page!</h1>
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