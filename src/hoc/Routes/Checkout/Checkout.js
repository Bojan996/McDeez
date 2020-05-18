import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Checkout.css';
import { purchaseOrder } from '../../../store/actions/order';

import OrderCard from '../../../components/FoodBuilder/OrderSummary/OrderCards/OrderCard';


class Checkout extends Component{

    state = {
        userInfo: {
            name: '',
            surname: '',
            email: '',
            adress: '',
            floor: '',
            apartmentNumber: '',
            comment: ''
        },
        totalPrice: null
    }

    componentDidMount() {
        let totalPrice = [];
        this.props.orders.map(e => {
            return totalPrice.push(Number(e.price));
        });
        const totalPriceNum = totalPrice.reduce((a, b) => a + b, 0);
        this.setState({totalPrice: totalPriceNum});
    }

    typingHandler = (event, id) => {
        const newUserInfo = {...this.state.userInfo};
        switch(id){
            case 'name':
                newUserInfo.name = event.target.value;
                this.setState({userInfo: newUserInfo});
                break;
            case 'surname':
                newUserInfo.surname = event.target.value;
                this.setState({userInfo: newUserInfo});
                break;
            case 'email':
                newUserInfo.email = event.target.value;
                this.setState({userInfo: newUserInfo});
                break;
            case 'adress':
                newUserInfo.adress = event.target.value;
                this.setState({userInfo: newUserInfo});
                break;
            case 'floor':
                newUserInfo.floor = event.target.value;
                this.setState({userInfo: newUserInfo});
                break;
            case 'apartmentNumber':
                newUserInfo.apartmentNumber = event.target.value;
                this.setState({userInfo: newUserInfo});
                break;
            case 'comment':
                newUserInfo.comment = event.target.value;
                this.setState({userInfo: newUserInfo});
                break;
            default: 
                this.setState(newUserInfo);
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        const fullOrder = {
            orders: [...this.props.orders],
            orderData: {...this.state.userInfo},
            price: this.state.totalPrice,
            userId: this.props.userId
        }

        this.props.purchaseOrder(fullOrder, this.props.idToken);
        
    }

    render(){

        const orderCards = this.props.orders.map((e, index) => {
            return <OrderCard key={index} order={e} builder={e.name}/>
        });

        return(
            <div className='CCheckoutContent'>
                <h1>Welcome to the checkout!</h1>
                <div className='CLayout'>
                    <div className='COrderCards'>
                        <h2>Your Order Summary:</h2>
                        {orderCards}
                        <h2>Total Price: {this.state.totalPrice}$</h2>
                    </div>
                    <div className='CForm'>
                        <h2>Please fill out the information below</h2>
                        <form onSubmit={this.submitHandler}>
                            <input type="text" placeholder='Name' className='CInputs' onChange={(event) => this.typingHandler(event, 'name')}/>
                            <input type="text" placeholder='Surname' className='CInputs' onChange={(event) => this.typingHandler(event, 'surname')}/>
                            <input type="email" placeholder='Email' className='CInputs' onChange={(event) => this.typingHandler(event, 'email')}/>
                            <input type="text" placeholder='Adress' className='CInputs' onChange={(event) => this.typingHandler(event, 'adress')}/>
                            <input type="text" placeholder='Floor' className='CInputs' onChange={(event) => this.typingHandler(event, 'floor')}/>
                            <input type="text" placeholder='Apartment Number' className='CInputs' onChange={(event) => this.typingHandler(event, 'apartmentNumber')}/>
                            <textarea placeholder='Comment...' rows="5" cols="47" onChange={(event) => this.typingHandler(event, 'comment')}/>
                            <button>Place Your Order!</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orderSummary.orders,
        userId: state.auth.localId,
        idToken: state.auth.idToken
    }
}

const mapDispatchToProps = dispatch => {
    return{
        purchaseOrder: (fullOrder, idToken) => dispatch(purchaseOrder(fullOrder, idToken))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);