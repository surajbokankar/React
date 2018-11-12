import React, { Component } from 'react';
import axios from 'axios';
import header from '../header';


class Login extends React.Component{
    
    


  constructor(props) {
    super(props);
    this.state={
      isSignUp:false,
      isForGotPass:false
    } 
  }



    render(){
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


        return(


        <div>
            {this.state.isSignUp?<SignUp/>:<LoginCom type={this.state.isSignUp}/>}
        </div>
         

          

        

        );
    }
}



class SignUp extends React.Component{
  render(){
    return(<div>
      SignUp
    </div>);
  };
}

class LoginCom extends React.Component{


  state={
    response:null,
    errorResponse:null
};

  constructor(props) {
    super(props);
    this.state = {email: '',password:''};

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange=this.onPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.isSignUp=false;

    this.onForgotPasswordClick = this.onForgotPasswordClick.bind(this);


  }

  onEmailChange(event) {
    this.setState({email: event.target.value});
  }

  onPasswordChange(event){
    this.setState({password: event.target.value});
  }

  onForgotPasswordClick(event){
    this.setState({isSignUp:true})
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
        if (error.response) {
            // The request was made and the server responded with a status code
             console.log(error.response.data);
             console.log(error.response.status);
             console.log(error.response.headers);
             const data = JSON.stringify(error.response.data.message);
             this.setState({errorResponse:data});
            
           } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log("Request ="+error.message);
        } else {
            // Something happened in setting up the request that triggered an Error
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
    return(<div>
       <form>
         
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

          <br/>

          <h4 textColor='grey' onClick={this.onForgotPasswordClick}>Forgot Password?</h4>
          <h4 color='blue'>SignUp</h4>
          


          
          {this.state.errorResponse?<p>{
              this.state.errorResponse}</p>:<p></p>}

{this.state.response?<p>{
              this.state.response}</p>:<p></p>} 


      </div>
      
    </form>
    </div>);
  }
}






export default Login;

