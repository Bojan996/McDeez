import * as actionTypes from '../actions/actionTypes';


const initialState = {
    isAuth: false,
    loading: false,
    email: null,
    localId: null,
    idToken: null,
    expires: null,
    err: null
}


const authReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.AUTH_SUCCESS:
            return {
                isAuth: true,
                loading: false,
                email: action.email,
                localId: action.localId,
                idToken: action.idToken,
                expires: action.expires,
                err: null
            };
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                loading: false,
                err: action.err
            };
        default: 
            return state;
    }
}


export default authReducer;