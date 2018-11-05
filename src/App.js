import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Home from './home';
import {BrowserRouter as Router,Switch,Route, Link } from 'react-router-dom';
import User from './component/user';

class App extends Component {
render() {

    var style=  {
      "list-style-type": "none",
      fontSize: 20,
      textAlign: "left",
      float:"left",
      width: "40%"
  }    
    
    return (

      <Router>
      <div>
       
       <h2>Welcomt to React Router Tutorial</h2>
       <div>
       
        <ul role="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/user">User</Link></li>
        </ul>
      </div>
         <Switch>
           <Route exact path="/"
           component={Home}
           />

           <Route exact path="/user" 
           component={User}
           />
           </Switch>

      </div>

      </Router>
      
    );
  }
}

export default App;
