import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Checkout.css';

import { withSnackbar } from 'notistack';
import { purchaseOrder } from '../../../store/actions/order';
import { checkValidity } from '../../../helpers/checkValidity';
import Spinner from '../../../components/UI/Spinner/Spinner';

import diliveryScooter from '../../../assets/images/diliveryScooter.png';
import TextField from '@material-ui/core/TextField';
import OrderCard from '../../../components/FoodBuilder/OrderSummary/OrderCards/OrderCard';


const checkout = (props) => {

    const [userInfo, setUserInfo] = useState({
        name: {
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        surname: {
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        email: {
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        adress: {
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        floor: {
            value: '',
            validation: {
                required: true,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        apartmentNumber: {
            value: '',
            validation: {
                required: true,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        comment: {
            value: '',
            validation: {},
            valid: true
        }
    });
    const [totalPrice, setToalPrice] = useState(null);
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        let totalPrice = [];
        props.orders.map(e => {
            return totalPrice.push(Number(e.price));
        });
        const totalPriceNum = totalPrice.reduce((a, b) => a + b, 0);
        setToalPrice(Number.parseFloat( totalPriceNum ).toFixed( 2 ));
    }, []);

    const typingHandler = (event, identifier) => {
        const updatedUserInfo = {...userInfo};
        const updatedElement = {...updatedUserInfo[identifier]};

        updatedElement.value = event.target.value;
        updatedElement.valid = checkValidity(updatedElement.value, updatedElement.validation);
        updatedElement.touched = true;
        updatedUserInfo[identifier] = updatedElement;

        let formIsValid = true;
        for(let identifier in updatedUserInfo){
            formIsValid = updatedUserInfo[identifier].valid && formIsValid;
        }
        setUserInfo(updatedUserInfo);
        setFormIsValid(formIsValid);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const date = new Date();
        const month = date.getUTCMonth() + 1;
        const day = date.getUTCDate();
        const year = date.getUTCFullYear();
        const currentDate = year + "/" + month + "/" + day;
        
        const fullOrder = {
            orders: [...props.orders],
            orderData: {
                adress: userInfo.adress.value,
                apartmentNumber: userInfo.apartmentNumber.value,
                comment: userInfo.comment.value,
                email: userInfo.email.value,
                floor: userInfo.floor.value,
                name: userInfo.name.value,
                surname: userInfo.surname.value,
                date: currentDate
            },
            price: totalPrice,
            userId: props.userId
        }

        props.purchaseOrder(fullOrder, props.idToken);     
    }

    let homeRedirect = null;
    if(props.purchasedOrder){
        setTimeout(e => {
            window.location.reload();
        }, 2400);
    }

    let spinner = props.loading ? <Spinner style={{fontSize: '4px', color: '#FFCD39', margin: '4px auto', borderColor: 'white', borderLeftColor: '#ffc400', borderWidth: '7px'}}/> : 'Order!';

    const orderCards = props.orders.map((e, index) => {
        return <OrderCard key={index} order={e} builder={e.name}/>
    });

    return(
        <div className='CCheckoutContent'>
            <div className='CSuccessfulOrder' style={{
                zIndex: props.purchasedOrder ? '60' : '0',
                opacity: props.purchasedOrder ? '1' : '0',
                transform: props.purchasedOrder ? 'scale(1)' : 'scale(0.4)'
            }}>
                <img className={props.purchasedOrder ? 'DiliveryScooterImg' : null} src={diliveryScooter} alt='dilivery scooter' style={{width: '300px'}}/>
                <h1 style={{fontWeight: '200', fontSize: '50px', lineHeight: '80px'}}>Thank you for your order, <br/> It is on its way!</h1>
            </div>
            {homeRedirect}
            <div className='CLayout'>
                <div className='COrderCards'>
                    <h1 className='COrderCardsMainHeading'><span className='COrderCardsMainHeadingYourOrder'>Your Order:</span><span>{props.orders.length} Items</span></h1>
                    {orderCards}
                    <h2 style={{margin: '25px auto 39px aut', fontWeight: '200', fontSize: '40px'}}>Total Price: {totalPrice}$</h2>
                </div>
                <div className='CForm'>
                    <h1 style={{margin: '40px auto 70px auto', fontWeight: '200', fontSize: '50px'}}>Please fill out the form</h1>
                    <form onSubmit={submitHandler}>
                        <TextField id="outlined-basic" required={true} error={!userInfo.name.valid && userInfo.name.validation && userInfo.name.touched} label="Name" variant="outlined" className='CInputs' onChange={(event) => typingHandler(event, 'name')}/>
                        <TextField id="outlined-basic" required={true} error={!userInfo.surname.valid && userInfo.surname.validation && userInfo.surname.touched} label="Surname" variant="outlined" className='CInputs' onChange={(event) => typingHandler(event, 'surname')}/>
                        <TextField id="outlined-basic" required={true} error={!userInfo.email.valid && userInfo.email.validation && userInfo.email.touched} label="Email" variant="outlined" className='CInputs' onChange={(event) => typingHandler(event, 'email')}/>
                        <TextField id="outlined-basic" required={true} error={!userInfo.adress.valid && userInfo.adress.validation && userInfo.adress.touched} label="Adress" variant="outlined" className='CInputs' onChange={(event) => typingHandler(event, 'adress')}/>
                        <TextField id="outlined-basic" required={true} error={!userInfo.floor.valid && userInfo.floor.validation && userInfo.floor.touched} label="Floor" variant="outlined" className='CInputs' onChange={(event) => typingHandler(event, 'floor')}/>
                        <TextField id="outlined-basic" required={true} error={!userInfo.apartmentNumber.valid && userInfo.apartmentNumber.validation && userInfo.apartmentNumber.touched} label="Apartment" variant="outlined" className='CInputs' onChange={(event) => typingHandler(event, 'apartmentNumber')}/>
                        <TextField id="outlined-basic" label="Comment..." variant="outlined" className='CInputsComments' onChange={(event) => typingHandler(event, 'comment')}/>
                        <button className='CSendOrderButton' disabled={!formIsValid}>{spinner}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.orders.loading,
        purchasedOrder: state.orders.purchased,
        orders: state.orderSummary.orders,
        userId: state.auth.localId,
        idToken: state.auth.idToken,
        userEmail: state.auth.email
    }
}

const mapDispatchToProps = dispatch => {
    return{
        purchaseOrder: (fullOrder, idToken) => dispatch(purchaseOrder(fullOrder, idToken))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(checkout));