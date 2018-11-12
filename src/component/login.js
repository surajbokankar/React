import React, { Component } from 'react';
import axios from 'axios';
import header from '../header';


class Login extends React.Component{
    
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


          
          {this.state.errorResponse?<p>{
              this.state.errorResponse}</p>:<p></p>}

{this.state.response?<p>{
              this.state.response}</p>:<p></p>} 


      </div>
      
    </form>

        );
    }
}

export default Login;

