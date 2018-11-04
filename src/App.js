import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Home from './home';

class App extends Component {


  callFromHome(){
    alert("Hi Parent")
 };

  render() {

    var style=  {
      "list-style-type": "none",
      fontSize: 20,
      textAlign: "left",
      float:"left",
      width: "40%"
  }


    var user=
      {
        name:"Sam",
        hobbies:["Sports","Dance"]
      }

      
      
    
    return (
      <div className="container">
         <Header  style={style}/>
        <Home name={"Sam"} age={27} user={user} greet={this.callFromHome}/>
        
      </div>
    );
  }
}

export default App;
