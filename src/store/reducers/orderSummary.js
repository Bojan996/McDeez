import * as actionTypes from '../actions/actionTypes';


const initialState = {
    order: []
};


const orderSummaryReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_ORDER_SUMMARY:
            let newOrder = [...state.order];
            newOrder.push(action.order);
            return {
                order: newOrder
            };
        case actionTypes.DELETE_ORDER_SUMMARY:
            return {
                ...state
            };
        default: 
            return state;
    }
}


export default orderSummaryReducer;