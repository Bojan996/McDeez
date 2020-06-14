import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Checkout.css';
import { withSnackbar } from 'notistack';
import { purchaseOrder } from '../../../store/actions/order';
import { withStyles } from '@material-ui/core/styles';
import { checkValidity } from '../../../helpers/checkValidity';
import Spinner from '../../../components/UI/Spinner/Spinner';
import diliveryScooter from '../../../assets/images/diliveryScooter.png';
import TextField from '@material-ui/core/TextField';
import OrderCard from '../../../components/FoodBuilder/OrderSummary/OrderCards/OrderCard';

const useStyles = theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    }
});

class Checkout extends Component{

    state = {
        userInfo: {
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
        },
        totalPrice: null,
        formIsValid: false
    }

    componentDidMount() {
        let totalPrice = [];
        this.props.orders.map(e => {
            return totalPrice.push(Number(e.price));
        });
        const totalPriceNum = totalPrice.reduce((a, b) => a + b, 0);
        this.setState({totalPrice: Number.parseFloat( totalPriceNum ).toFixed( 2 )});
    }

    typingHandler = (event, identifier) => {
        const updatedUserInfo = {...this.state.userInfo};
        const updatedElement = {...updatedUserInfo[identifier]};

        updatedElement.value = event.target.value;
        updatedElement.valid = checkValidity(updatedElement.value, updatedElement.validation);
        updatedElement.touched = true;
        updatedUserInfo[identifier] = updatedElement;

        let formIsValid = true;
        for(let identifier in updatedUserInfo){
            formIsValid = updatedUserInfo[identifier].valid && formIsValid;
        }
        this.setState({userInfo: updatedUserInfo, formIsValid: formIsValid});
    }

    submitHandler = (event) => {
        event.preventDefault();
        const date = new Date();
        const month = date.getUTCMonth() + 1;
        const day = date.getUTCDate();
        const year = date.getUTCFullYear();
        const currentDate = year + "/" + month + "/" + day;
        
        const fullOrder = {
            orders: [...this.props.orders],
            orderData: {
                adress: this.state.userInfo.adress.value,
                apartmentNumber: this.state.userInfo.apartmentNumber.value,
                comment: this.state.userInfo.comment.value,
                email: this.state.userInfo.email.value,
                floor: this.state.userInfo.floor.value,
                name: this.state.userInfo.name.value,
                surname: this.state.userInfo.surname.value,
                date: currentDate
            },
            price: this.state.totalPrice,
            userId: this.props.userId
        }

        this.props.purchaseOrder(fullOrder, this.props.idToken);
        
    }

    render(){

        let homeRedirect = null;
        if(this.props.purchasedOrder){
            setTimeout(e => {
                window.location.reload();
            }, 2400);
        }

        let spinner = this.props.loading ? <Spinner style={{fontSize: '4px', color: '#FFCD39', margin: '4px auto', borderColor: 'white', borderLeftColor: '#ffc400', borderWidth: '7px'}}/> : 'Order!';

        const orderCards = this.props.orders.map((e, index) => {
            return <OrderCard key={index} order={e} builder={e.name}/>
        });

        return(
            <div className='CCheckoutContent'>
                <div className='CSuccessfulOrder' style={{
                    zIndex: this.props.purchasedOrder ? '60' : '0',
                    opacity: this.props.purchasedOrder ? '1' : '0',
                    transform: this.props.purchasedOrder ? 'scale(1)' : 'scale(0.4)'
                }}>
                    <img className={this.props.purchasedOrder ? 'DiliveryScooterImg' : null} src={diliveryScooter} alt='dilivery scooter' style={{width: '300px'}}/>
                    <h1 style={{fontWeight: '200', fontSize: '50px', lineHeight: '80px'}}>Thank you for your order, <br/> It is on its way!</h1>
                </div>
                {homeRedirect}
                <div className='CLayout'>
                    <div className='COrderCards'>
                        <h1 style={{margin: '40px auto 70px auto', fontWeight: '200', fontSize: '50px'}}>Your Order Summary:</h1>
                        {orderCards}
                        <h2 style={{margin: '25px auto 39px aut', fontWeight: '200', fontSize: '40px'}}>Total Price: {Number.parseFloat( this.state.totalPrice ).toFixed( 2 )}$</h2>
                    </div>
                    <div className='CForm'>
                        <h1 style={{margin: '40px auto 70px auto', fontWeight: '200', fontSize: '50px'}}>Please fill out the form</h1>
                        <form onSubmit={this.submitHandler}>
                            <TextField id="outlined-basic" required={true} error={!this.state.userInfo.name.valid && this.state.userInfo.name.validation && this.state.userInfo.name.touched} label="Name" variant="outlined" className='CInputs' onChange={(event) => this.typingHandler(event, 'name')}/>
                            <TextField id="outlined-basic" required={true} error={!this.state.userInfo.surname.valid && this.state.userInfo.surname.validation && this.state.userInfo.surname.touched} label="Surname" variant="outlined" className='CInputs' onChange={(event) => this.typingHandler(event, 'surname')}/>
                            <TextField id="outlined-basic" required={true} error={!this.state.userInfo.email.valid && this.state.userInfo.email.validation && this.state.userInfo.email.touched} label="Email" variant="outlined" className='CInputs' onChange={(event) => this.typingHandler(event, 'email')}/>
                            <TextField id="outlined-basic" required={true} error={!this.state.userInfo.adress.valid && this.state.userInfo.adress.validation && this.state.userInfo.adress.touched} label="Adress" variant="outlined" className='CInputs' onChange={(event) => this.typingHandler(event, 'adress')}/>
                            <TextField id="outlined-basic" required={true} error={!this.state.userInfo.floor.valid && this.state.userInfo.floor.validation && this.state.userInfo.floor.touched} label="Floor" variant="outlined" className='CInputs' onChange={(event) => this.typingHandler(event, 'floor')}/>
                            <TextField id="outlined-basic" required={true} error={!this.state.userInfo.apartmentNumber.valid && this.state.userInfo.apartmentNumber.validation && this.state.userInfo.apartmentNumber.touched} label="Apartment" variant="outlined" className='CInputs' onChange={(event) => this.typingHandler(event, 'apartmentNumber')}/>
                            <TextField id="outlined-basic" label="Comment..." variant="outlined" className='CInputsComments' onChange={(event) => this.typingHandler(event, 'comment')}/>
                            <button className='CSendOrderButton' disabled={!this.state.formIsValid}>{spinner}</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.orders.loading,
        purchasedOrder: state.orders.purchased,
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



export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles, { withTheme: true })(withSnackbar(Checkout)));