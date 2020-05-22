import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/UI/Navigation/NavBar';
import Home from './hoc/Routes/Home/Home';
import FoodMaker from './hoc/Routes/FoodMaker/FoodMaker';
import Checkout from './hoc/Routes/Checkout/Checkout';
import Orders from './hoc/Routes/Orders/Orders';
import Login from './hoc/Routes/Auth/Login';
import Register from './hoc/Routes/Auth/Register';
import Logout from './hoc/Routes/Auth/Logout';
import { connect } from 'react-redux';
import { authCheckState } from './store/actions/auth';

class App extends Component {

  componentDidMount(){
    this.props.shouldAuth();
  }

  render() {

    let routes = (
      <Switch>
          <Route path='/foodmaker' component={FoodMaker}/>
          <Route path='/checkout' component={Checkout}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/' exact component={Home}/>
          <Redirect to='/'/>
        </Switch>
    )

    if(this.props.isAuth){
      routes = (
        <Switch>
            <Route path='/foodmaker' component={FoodMaker}/>
            <Route path='/checkout' component={Checkout}/>
            <Route path='/orders' component={Orders}/>
            <Route path='/logout' component={Logout}/>
            <Route path='/' exact component={Home}/>
            <Redirect to='/'/>
          </Switch>
      )
    }

    return (
      <div className="App">
        <div className='NavBarDiv'>
          <NavBar/>
        </div>
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    shouldAuth: () => dispatch(authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
