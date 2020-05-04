import * as actionTypes from './actionTypes';
import axios from 'axios';


const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

const authSucess = (idToken, expires, localId, email) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken,
        expires,
        localId,
        email
    }
}

const authFail = (err) => {
    return {
        type: actionTypes.AUTH_FAIL,
        err
    }
}

export const auth = (authType, email, password) => {
    return dispatch => {
        dispatch(authStart());

        const apiKey = 'AIzaSyCem0xijXsoanZxUk9eucmJLm7z__ZN008';
        const url = authType === 'login' ? 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + apiKey : 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + apiKey;
        const configuration = {
            email,
            password,
            returnSecureToken: true
        };

        axios.post(url, configuration).then(res => {
            dispatch(authSucess(res.data.idToken, res.data.expiresIn, res.data.localId, configuration.email));
        }).catch(err => {
            dispatch(authFail(err));
            alert('auth failed!');
        })

    }
}