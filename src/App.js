import React, { useEffect } from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import 'intersection-observer';

import NavBar from './components/UI/Navigation/NavBar';
import Home from './hoc/Routes/Home/Home';
import FoodMaker from './hoc/Routes/FoodMaker/FoodMaker';
import Checkout from './hoc/Routes/Checkout/Checkout';
import Orders from './hoc/Routes/Orders/Orders';
import Login from './hoc/Routes/Auth/Login';
import Register from './hoc/Routes/Auth/Register';
import Logout from './hoc/Routes/Auth/Logout';
import Location from './hoc/Routes/Location/Location';
import SingleLocation from './components/SingleLocation/SingleLocation';
import History from './hoc/Routes/History/History';
import Careers from './hoc/Routes/Careers/Careers';

import { connect } from 'react-redux';
import { authCheckState } from './store/actions/auth';

const app = (props) => {

  useEffect(() => {
    props.shouldAuth(); 
  }, []);

  let routes = (
    <Switch>
        <Route path='/foodmaker' component={FoodMaker}/>
        <Route path='/orders' component={Orders}/>
        <Route path='/locations' exact component={Location}/>
        <Route path='/locations/:id' component={SingleLocation}/>
        <Route path='/history' component={History}/>
        <Route path='/careers' component={Careers}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/' exact component={Home}/>
        <Redirect to='/'/>
      </Switch>
  )

  if(props.isAuth){
    routes = (
      <Switch>
          <Route path='/foodmaker' component={FoodMaker}/>
          <Route path='/checkout' component={Checkout}/>
          <Route path='/locations' exact component={Location}/>
          <Route path='/locations/:id' component={SingleLocation}/>
          <Route path='/history' component={History}/>
          <Route path='/careers' component={Careers}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/orders' component={Orders}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/' exact component={Home}/>
          <Redirect to='/'/>
        </Switch>
    )
  }


  window.onscroll = () => {
    if(window.screen.width > 915){
      if(props.orders.length === 0 || document.querySelector('.FDFloatingButton') === null){
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          document.querySelector('.NavContainer').style.padding = '0';
          document.querySelector('.LogoDiv').style.height = '41px';
        } else {
          document.querySelector('.NavContainer').style.padding = '15px 0';
          document.querySelector('.LogoDiv').style.height = '53px';
        }
      }else{
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          document.querySelector('.NavContainer').style.padding = '0';
          document.querySelector('.LogoDiv').style.height = '41px';
          document.querySelector('.FDFloatingButton').style.top = '57px';
          document.querySelector('.divInFloatingButton').style.top = '53px';
          if(document.querySelector('#OSContainerScroll') !== null){
            document.querySelector('#OSContainerScroll').style.top = '131px';
          }
        } else {
          document.querySelector('.NavContainer').style.padding = '15px 0';
          document.querySelector('.LogoDiv').style.height = '53px';
          document.querySelector('.FDFloatingButton').style.top = '90px';
          document.querySelector('.divInFloatingButton').style.top = '84px';
          if(document.querySelector('#OSContainerScroll') !== null){
            document.querySelector('#OSContainerScroll').style.top = '166px';
          }
        }
      }
    }
  }

  return (
    <div className="App">
        <NavBar/>
      {routes}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    orders: state.orderSummary.orders
  }
}

const mapDispatchToProps = dispatch => {
  return {
    shouldAuth: () => dispatch(authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(app);
