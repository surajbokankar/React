import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Home from './home';
import {BrowserRouter as Router,Switch,Route, Link } from 'react-router-dom';
import User from './component/user';

class App extends Component {


  constructor(props){
    super(props);
    this.state={
     email:props.email,
     password:props.password,
    onLoginClick:this.onLoginClick.bind(this)
        };

        


  }


  onEmailChange(event){
    this.setState({
      email:event.target.email
    });
  }

  onPasswordChange(event){
    this.setState({
      password:event.target.password
    });
  }

  onLoginClick(event){
    
    event.preventDefault();
    
    console.log("Values="+event.target.email+"Password="+event.target.password);
    
  }

render() {

    var style=  {
      "list-style-type": "none",
      fontSize: 20,
      textAlign: "left",
      float:"left",
      width: "40%"
  }    
    
    return (

      <div  className="container">

       <form  onSubmit={this.onLoginClick}>
         
         <label>Email</label>
         <input  value={this.props.email}
           onChange={this.onEmailChange.bind(this)
         }/>

         <br/>

         <label>Password</label>
         <input  value={this.props.password}
           onChange={this.onPasswordChange.bind(this)
         }/>

         <br/>


         <button
         type="submit"
         >Submit</button>


         </form>
 
        </div>
      
    );
  }
}

export default App;
