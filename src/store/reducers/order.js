import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const purchaseOrderReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.PURCHASE_ORDER_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.FETCH_ORDER_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.PURCHASE_ORDER_SUCCESS:
            return {
                ...state,
                orders: [
                    ...state.orders,
                    {...action.fullOrder, id: action.orderId}
                ],
                loading: false,
                purchased: true
            }
        case actionTypes.FETCH_ORDER_SUCCESS:
            return {
                ...state,
                orders: action.orders,
                loading: false,
            }
        case actionTypes.PURCHASE_ORDER_FAIL:
            return {
                ...state,
                loading: false,
                purchased: false
            }
        case actionTypes.FETCH_ORDER_FAIL:
            return {
                ...state,
                loading: false,
                purchased: false
            }
        default: 
            return state;
    }
}


export default purchaseOrderReducer;