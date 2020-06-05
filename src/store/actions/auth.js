import * as actionTypes from './actionTypes';
import axios from 'axios';


const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

const authSucess = (idToken, localId, email) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken,
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

const checkAuthTimeout = (exparationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, exparationTime * 1000);
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('exparationDate');
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const auth = (authType, email, password) => {
    return dispatch => {
        dispatch(authStart());

        const apiKey = 'AIzaSyB_znOzq7CNXrqBTTQrv0UMfbPfRUQ09Vw';
        const url = authType === 'login' ? 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + apiKey : 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + apiKey;
        const configuration = {
            email,
            password,
            returnSecureToken: true
        };

        axios.post(url, configuration).then(res => {
            setTimeout(e => {
            const exparationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
            localStorage.setItem('token', res.data.idToken);
            localStorage.setItem('exparationDate', exparationDate);
            localStorage.setItem('userId', res.data.localId);
            localStorage.setItem('email', configuration.email);
            dispatch(authSucess(res.data.idToken, res.data.localId, configuration.email));
            dispatch(checkAuthTimeout(res.data.expiresIn));
            }, 1000);
        }).catch(err => {
            dispatch(authFail(err));
            alert('auth failed!');
        })

    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(logout());
        }else {
            const exparationTime = new Date(localStorage.getItem('exparationDate'));
            if(exparationTime < new Date()){
                dispatch(logout());
            }else {
                const userId = localStorage.getItem('userId');
                const email = localStorage.getItem('email');
                dispatch(authSucess(token, userId, email));
                dispatch(checkAuthTimeout((exparationTime.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}