import React from 'react';



class home extends React.Component{

    constructor(props){
         super();
         this.state={
             age:props.age,
             name:props.name,
             homeLink:"Change Link"
         } 
      }
    

    clickToIncrese(){
        this.setState({
            age : this.state.age + 3
        });
}


    changeNameOfHeader(){
        this.props.changeLink(this.state.homeLink);
    }

    onInputChange(event){
       this.setState({
           homeLink:event.target.value
       });
    }
    



    //Componet Lift Cycle

    componentWillMount(){
        console.log("componentWillMount");
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps",nextProps);
    }

    shouldComponentUpdate(nextProps,newState){
        console.log("shouldComponentUpdate",nextProps,newState);
        return true;
    }
    componentDidUpdate(preProps,preState){
        console.log("componentDidUpdate",preProps,preState);
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
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

                <p> {this.props.name}</p>
                <p> {this.props.age}</p>
             


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


                   <br/>
                   <br/>
                   <hr/>

                   <input value={this.state.homeLink} onChange={this.onInputChange.bind(this)}></input>

                   <button style={style} onClick={this.changeNameOfHeader.bind(this)}>
                     Change Header Link
                   </button>

                   </div>

                  

                    </div>



            </div>

        );
    }
}

export default home;