import React, { Component } from 'react';
import axios from 'axios';
import header from '../header';
import ReactDom from 'react-dom';
import './login.css';


class Login extends React.Component{
    

 
    
  state={
    response:null,
    errorResponse:null
};

 



     

  constructor(props) {
    super(props);
    this.state = {email: '',password:'', isSignUp:false, isForGot:false, isLogin:true};

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange=this.onPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    

    this.onForgotPasswordClick = this.onForgotPasswordClick.bind(this);
    this.onSignUpTextClick=this.onSignUpTextClick.bind(this);
    this.onLoginTextClick=this.onLoginTextClick.bind(this);
    this.onSingUpSubmit=this.onSingUpSubmit.bind(this);
    this.onForgotSubmit=this.onForgotSubmit.bind(this);


  }

  onEmailChange(event) {
    this.setState({email: event.target.value});
  }

  onPasswordChange(event){
    this.setState({password: event.target.value});
  }

  onForgotPasswordClick(event){
    this.setState({isLogin:false,isSignUp:false,isForGot:true});
    this.setState({errorResponse:null,response:null});
    }

  onSignUpTextClick(event){
        this.setState({isLogin:false,isSignUp:true,isForGot:false});
        this.setState({errorResponse:null,response:null});
  }

  onLoginTextClick(event){
        this.setState({isLogin:true,isSignUp:false,isForGot:false});
        this.setState({errorResponse:null,response:null});
      }


 onSingUpSubmit(event){
      event.preventDefault();
      var emailVal=this.state.email;
      if(emailVal!=null&&emailVal.length>0){
        const  url="http://192.168.8.105:4000/signup";
        const bodyFormData = new FormData();
        bodyFormData.append('email',emailVal);
        var headers= {
          'Content-Type': 'application/json',
          'api_env': 'qa' 
      }

      axios.post(url,bodyFormData,{"headers":headers}).
      then((res)=>{
        this.setState({response:res.data.message});
        this.setState({errorResponse:null});
      }).catch((error) => {
        // Error
        this.setState({errorResponse:null});
        if (error.response) {
            // The request was made and the server responded with a status code
             console.log(error.response.data);
             console.log(error.response.status);
             console.log(error.response.headers);
             const data = JSON.stringify(error.response.data.message);
             this.setState({errorResponse:data});
            
           } else if (error.request) {
             console.log("Request ="+error.message);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    });

      }else{
        alert("Please Enter Email..!!");
      }
    }

    onForgotSubmit(event){
      event.preventDefault();
      var emailVal=this.state.email;
      if(emailVal!=null&&emailVal.length>0){
        const  url="http://192.168.8.105:4000/forgot_password";

        const bodyFormData = new FormData();
        bodyFormData.append('email',emailVal);


        var headers= {
          'Content-Type': 'application/json',
          'api_env': 'qa' 
        }

        axios.post(url,bodyFormData,{"headers":headers}).
      then((res)=>{
        this.setState({response:res.data.message});
        this.setState({errorResponse:null});
      }).catch((error) => {
        // Error
        this.setState({errorResponse:null});
        if (error.response) {
            // The request was made and the server responded with a status code
             console.log(error.response.data);
             console.log(error.response.status);
             console.log(error.response.headers);
             const data = JSON.stringify(error.response.data.message);
             this.setState({errorResponse:data});
            
           } else if (error.request) {
             console.log("Request ="+error.message);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    });

      }else{
        alert("Please Enter Email..!!");
      }
    }




  handleSubmit(event) {
    var emailVal=this.state.email;
    var passVal=this.state.password;
    if((emailVal!=null&&emailVal.length>0)&&(passVal!=null&&passVal.length>0)){
       const  url="http://192.168.8.105:4000/login";
     const bodyFormData = new FormData();
     bodyFormData.append('email',emailVal);
     bodyFormData.append('password',passVal);


     

     var headers= {
        'Content-Type': 'application/json',
        'api_env': 'qa' 
    }


     axios.post(url,bodyFormData,{"headers":headers}).
      then((res)=>{
        this.setState({response:"User Logged In Successfully..!!"});
        this.setState({errorResponse:null});
      }).catch((error) => {
        // Error
        this.setState({errorResponse:null});
        if (error.response) {
             console.log(error.response.data);
             console.log(error.response.status);
             console.log(error.response.headers);
             const data = JSON.stringify(error.response.data.message);
             this.setState({errorResponse:data});
            
           } else if (error.request) {
            console.log("Request ="+error.message);
        } else {
            console.log('Error', error.message);
        }
        console.log(error.config);
    });

    }else{
      alert("Please fill details");
    }
    
    event.preventDefault();
  }



    render(){



      var hiddenStyle={
        display:'none'
      }
      var show={
        display:'block'
      }

      var horizontal={
          color: "black",
          textalign: "center",
          padding: "14px",
          textdecoration: "none",
          float:"right",
          paddingRight:"200px"    
      }
      

        var style=  {
            "list-style-type": "none",
            fontSize: 16,
            textAlign: "left",
            float:"left",
            width: "jsutify",
            margin: "10px",
            textColor:"black"
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


        return(


          <div >


         {this.state.isLogin? <div ref="login">
          <form >
             
             <label>Email</label>
            <input  type="text" value={this.state.email}
             placeholder="Enter Email"
               onChange={this.onEmailChange
             }/>
    
             <br/>
    
             <label>Password</label>
             <input  type="password" value={this.state.password}
             placeholder="Enter Password"
               onChange={this.onPasswordChange
             }/>
    
             <br/>
    
             <div className='button'>
             <button className='button' onClick={this.handleSubmit}>Login</button>
    
              <br/>



              <div style={horizontal} className='rows'>
              <label textColor='grey'  style={style} 
                onClick={this.onForgotPasswordClick}>Forgot Password?</label>
              <label color='blue' style={style}   onClick={this.onSignUpTextClick}>SignUp</label>
              </div>

                  {this.state.errorResponse?<p>{
                  this.state.errorResponse}</p>:<p></p>}
    
                  {this.state.response?<p>{
                  this.state.response}</p>:<p></p>} 
    
    
          </div>
          
        </form>
          </div>:null}
        

         {
         this.state.isSignUp?<div ref="signup" >
                    
                    <h2>SignUp</h2>

              <input  type="text" value={this.state.email}
               placeholder="Email"
               onChange={this.onEmailChange
                }/>

               <button className='button' onClick={this.onSingUpSubmit}>Submit</button>
                
                <div style={horizontal} className='rows'>
                <label textColor='grey' style={style} onClick={this.onForgotPasswordClick}>Forgot Password?</label>
                <label color='blue'   style={style}    onClick={this.onLoginTextClick}>Login</label>
                </div>

                {this.state.errorResponse?<p>{
                  this.state.errorResponse}</p>:<p></p>}
    
                  {this.state.response?<p>{
                  this.state.response}</p>:<p></p>} 

         </div>:null
           }
          
            {
              this.state.isForGot?<div ref="forgot" >
                
                <h2>Forgot Password</h2>

             <input  type="text" value={this.state.email}
               placeholder="Email"
               onChange={this.onEmailChange
             }/>

             <button className='button' onClick={this.onForgotSubmit}>Submit</button>
             <div style={horizontal} className='rows'>
                <label textColor='grey' style={style} onClick={this.onSignUpTextClick}>SignUp</label>
                <label color='blue'   style={style}  onClick={this.onLoginTextClick}>Login</label>
                </div>


{this.state.errorResponse?<p>{
  this.state.errorResponse}</p>:<p></p>}

  {this.state.response?<p>{
  this.state.response}</p>:<p></p>} 

             </div>:null
            }



          
           
        </div>
         

          

        

        );
    }
}








export default Login;

