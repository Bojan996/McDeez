import * as actionTypes from './actionTypes';
import axios from 'axios';

const purchaseOrderStart = () => {
    return {
        type: actionTypes.PURCHASE_ORDER_START
    };
};

const purchaseOrderSuccess = ( id, fullOrder ) => {
    return {
        type: actionTypes.PURCHASE_ORDER_SUCCESS,
        orderId: id,
        fullOrder: fullOrder
    };
};

const purchaseOrderFail = ( error ) => {
    return {
        type: actionTypes.PURCHASE_ORDER_FAIL,
        error: error
    };
}

export const purchaseOrder = ( fullOrder, idToken ) => {
    return dispatch => {
        dispatch( purchaseOrderStart() );
        axios.post( 'https://mcdeez-b6b14.firebaseio.com//orders.json?auth=' + idToken, fullOrder )
            .then( response => {
                dispatch( purchaseOrderSuccess( response.data.name, fullOrder ) );
            } )
            .catch( error => {
                dispatch( purchaseOrderFail( error ) );
            } );
    };
};

const fetchOrderStart = () => {
    return {
        type: actionTypes.FETCH_ORDER_START
    }
}

const fetchOrderSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDER_SUCCESS,
        orders: orders
    }
}

const fetchOrderFail = (err) => {
    return {
        type: actionTypes.FETCH_ORDER_FAIL,
        err: err
    }
}

export const fetchingOrders = (idToken, userId) => {
    return dispatch => {
        dispatch(fetchOrderStart());
        const queryParams = '?auth=' + idToken + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('https://mcdeez-b6b14.firebaseio.com//orders.json' + queryParams)
        .then(res => {
            const fetchedOrders = [];
            for(let key in res.data){
                fetchedOrders.push(res.data[key])
            }
            dispatch(fetchOrderSuccess(fetchedOrders));
        })
        .catch(err => {
            alert('something went wrong, try to go to the homepage and get in orders page again, sorry...');
            dispatch(fetchOrderFail(err))
        });
    }
}