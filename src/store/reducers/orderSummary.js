import * as actionTypes from '../actions/actionTypes';


const initialState = {
    orders: [],
    success: false,
    fail: false
};


const orderSummaryReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SOMETHING_FAILED: 
            return {
                ...state,
                fail: true,
                success: false
            }
        case actionTypes.ADD_ORDER_SUMMARY:
            const newOrder = [...state.orders].concat(action.order);
            return {
                ...state,
                orders: newOrder,
                success: true,
                fail: false
            };
        case actionTypes.DELETE_ORDER_SUMMARY:
            const newOrderState = [...state.orders].filter(e => e !== action.order)
            return {
                ...state,
                orders: newOrderState,
                success: true,
                fail: false
            };
        case actionTypes.CLEAR_ORDER_SUMMARY:
            return {
                orders: [],
                success: false,
                fail: false
            };
        default: 
            return state;
    }
}


export default orderSummaryReducer;