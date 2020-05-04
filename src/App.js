import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/UI/Navigation/NavBar';
import Home from './hoc/Routes/Home/Home';
import FoodMaker from './hoc/Routes/FoodMaker/FoodMaker';
import Login from './hoc/Routes/Auth/Login';
import Register from './hoc/Routes/Auth/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='NavBarDiv'>
          <NavBar/>
        </div>
        <Switch>
          <Route path='/foodmaker' component={FoodMaker}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/' exact component={Home}/>
          <Redirect to='/'/>
        </Switch>
      </div>
    );
  }
}

export default App;
