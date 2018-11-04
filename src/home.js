import React from 'react';



class home extends React.Component{

    constructor(props){
         super();
         this.state={
             age:props.age
         } 
      }
    

    clickToIncrese(){
        this.setState({
            age : this.state.age + 3
        });


        
    }


    render(){
        var style=  {
            "list-style-type": "none",
            fontSize: 20,
            textAlign: "left",
            float:"left"
        }
        var letterStyle = {
            padding: 10,
            margin: 10,
            backgroundColor: "#ffde00",
            color: "#333",
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: 32,
            textAlign: "center",
            float:"left",
            width: "30%"
        };

        var buttonStyle={
        aligncontent: 'inherit',
    justifyitems: 'legacy',
    placeitems: 'auto',
    columnspan: 'all',
    whitespace: 'pre-line'
        }


        var emp=[
            {
                name:"suraj",
                age:"10"
            },
            {
                name:"sam",
                age:"20"
            }
        ]

        

        console.log(this.props);
        return(

            <div  class="left" style={letterStyle}>
                <h1>Home</h1>

                <p> {this.props.user.hobby}</p>
                <p> {this.props.user.name}</p>


                <h4>Hobbies</h4>
                <div class="container">
                    <ul style={style} >

                     {this.props.user.hobbies.map((hobby)=>
                                      <li>{hobby}</li>
                                         )}
</ul>

                  <p>{this.state.age}</p>

                   <div class="container" float="left">

                   <button style={style} onClick={() => this.clickToIncrese()}>
                   Click
                   </button>
                   <button style={style} onClick={() => this.props.greet()}>
                   Me
                   </button>

                   </div>

                  

                    </div>



            </div>

        );
    }
}

export default home;