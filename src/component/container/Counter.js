

import React from 'react';
import {connect} from 'react-redux';
import Button from "@material-ui/core/Button"; 
import TextField from '@material-ui/core/TextField/TextField';





function counter(props){
    console.log('render props',props);
    return(
        <div>
          <h1> Simple Redux Example..</h1>
          <p>Count: {props.count}</p>
          {/* <Button onClick={props.onIncremetClick}>Increment</Button>
          <Button onClick={props.onDecrementClick}>Decrement</Button> */}

          <input
           type="text"
           value={props.inputValue}
           onChange={props.onTextChange}
          />
           

        </div>
    );
}


function masStateToProps(state){
    console.log('masStateToProps',state);
    return{
        count:state.count
    }
}

function mapStateToInput(state){
    console.log('mapStateToInput',state);
    return{
        inputValue:state.inputValue
    }
}


function mapToDispatchText(dispatch){

    console.log('Dispacher Running');

    return{
        onTextChange : (event) =>{
          const action={
              type:"INPUT_CHANGE" , text:event.target.value
          };
          dispatch(action);
        }

    }

}

function masToDispatch(dispatch){
return{
    onIncremetClick : () =>{
        console.log('Increment');
        const action={
        type:"Increment"
        };
        dispatch(action);
    },

    onDecrementClick : () =>{
        console.log('Decrement');

        const action={
            type:"Decrement"
        }
        dispatch(action);
    }

}
}





export default connect(mapStateToInput,mapToDispatchText)(counter);