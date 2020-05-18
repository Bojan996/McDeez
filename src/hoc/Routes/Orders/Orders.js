import React, { Component } from 'react';
import './Orders.css';
import { connect } from 'react-redux';
import { fetchingOrders } from '../../../store/actions/order';

import OrderCard from '../../../components/FoodBuilder/OrderSummary/OrderCards/OrderCard';


class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders(this.props.idToken, this.props.userId);
    }
    
    render() {

        let orders = null;
        if(!this.props.loading){
            orders = this.props.orders.map(firstEl => {
                return (
                    <div className='OneTimeOrder'>
                        <h2 style={{width: '100%'}}>Order from: 12.10.2018 17:33</h2>
                        {firstEl.map((secondEl, index) => {
                            return <OrderCard key={index} order={secondEl} builder={secondEl.name}/>
                        })}
                    </div>
                )
            })
        }

        return (
            <div className='OrdersContainer'>
                <h1>Welcome to the oreders page!</h1>
                {orders}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders.orders,
        idToken: state.auth.idToken,
        loading: state.orders.loading,
        userId: state.auth.localId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (idToken, userId) => dispatch(fetchingOrders(idToken, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);