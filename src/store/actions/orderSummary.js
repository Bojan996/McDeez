import * as actionTypes from './actionTypes';

export const addOrderSummary = (order) => {
    return {
        type: actionTypes.ADD_ORDER_SUMMARY,
        order
    }
}

export const deleteOrderSummary = (order) => {
    return {
        type: actionTypes.DELETE_ORDER_SUMMARY,
        order
    }
}

export const clearOrderSummary = () => {
    return {
        type: actionTypes.CLEAR_ORDER_SUMMARY
    }
}

export const somethingFailed = () => {
    return {
        type: actionTypes.SOMETHING_FAILED
    }
}