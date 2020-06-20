import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ScrollToTop from './components/UI/ScrollToTop/ScrollToTop';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import authReducer from './store/reducers/auth';
import orderSummaryReducer from './store/reducers/orderSummary';
import orderReducer from './store/reducers/order';
import { SnackbarProvider } from 'notistack';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    orderSummary: orderSummaryReducer,
    orders: orderReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
                <ScrollToTop>
                    <App/>
                </ScrollToTop>
            </SnackbarProvider>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
