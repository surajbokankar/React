import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Home from './home';
import {BrowserRouter as Router,Switch,Route, Link } from 'react-router-dom';
import User from './component/user';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {email: '',password:''};

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange=this.onPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onEmailChange(event) {
    this.setState({email: event.target.value});
  }

  onPasswordChange(event){
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    var emailVal=this.state.email;
    var passVal=this.state.password;
    if((emailVal!=null&&emailVal.length>0)&&(passVal!=null&&passVal.length>0)){
      console.log("Email="+emailVal+"PassWord:"+passVal);
    }else{
      alert("Please fill details");
    }
    
    event.preventDefault();
  }

render() {

    var style=  {
      "list-style-type": "none",
      fontSize: 20,
      textAlign: "left",
      float:"left",
      width: "40%"
  }    
    

  var button__container ={
    margintop: '200px',
    textalign: 'center'
  }
  var button ={
    backgroundcolor:'green',
    border: 'none',
    color: 'white',
    fontsize: 16,
    height: '40px',
    width: '200px'
  }


    return (

      

      //  <form  onSubmit={this.onLoginClick.bind(this)}>
         
      //    <label>Email</label>
      //    <input  type="text" value={this.state.email}
      //      onChange={this.onEmailChange
      //    }/>

      //    <br/>

      //    <label>Password</label>
      //    <input  type="text" value={this.state.password}
      //      onChange={this.onPasswordChange
      //    }/>

      //    <br/>


      //    <input type="submit" value="Submit"/>


      //    </form>


     

 
      <form >
      {/* <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />

        <input type="text" value={this.state.pass} onChange={this.onPasswordChange} />
        </label> */}


       <label>Email</label>
         <input  type="text" value={this.state.email}
           onChange={this.onEmailChange
         }/>

         <br/>

         <label>Password</label>
         <input  type="text" value={this.state.password}
           onChange={this.onPasswordChange
         }/>

         <br/>

         <div className='button__container'>
         <button className='button' onClick={this.handleSubmit}>Click Me</button>
      </div>
      
    </form>

      
    );
  }
}

export default App;
