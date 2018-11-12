import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './component/header.css'
import ReactDOM from 'react-dom';

class Header extends React.Component{




    render(){

        const defaultStyle={
            elevation:4,
            height:"200",
            color: "#333",
            display: "inline-block",
            fontFamily: "monospace",
            width: '100%', 
            height: 56,
            textAlign: "center",
            justifyContent:"center",
            alignSelf: "center",
            fontSize:24,
            textAlignVertical: 'center',
            borderStyle:'groove',
            position: 'relative'  
            
        }


        const childRight = {
            background:'green',
            height: '20%',
            width: '50%',
            position: 'none',
            right: '0',
            top: 0,
            textAlign:'justify',
            letterSpacing: '3px',
            width: '100%', 
            textAlign:'center'
        }

        return(

          <div>
                      
  <ul>
  <li><a href="#contact">Help</a></li>
  <li><a href="#news">Developer</a></li>
  <li><a href="#home">SignUp</a></li>
  
</ul>
                
        </div>
            
        );
    }
}


{/* <img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */}

export default Header;