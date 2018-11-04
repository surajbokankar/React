import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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

            <header class="container">
                       
                <div  float="right"  textAlign='right'>
                <a>SignIn</a>
                <a>Developer</a>
                <a>Help</a>
                
        </div>
            </header>
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