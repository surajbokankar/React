import React from "react";
import index from "jss";
import { connect } from 'react-redux';

const style = {
  display: "block",
  backgroundColor: "#FFF",
  float: "left"
};




function Lister(props) {
    console.log('state',props)
  return (
    <div>
      <input type="text" value={props.initialText}  onChange={props.inputChange}/>

      <ul style={style}>
        {
            props.listItem.map((item,index)=>{
                return <li key={index}> {item} </li> 
            })
        }
      </ul>
      <button onClick={props.onButtonClick}>Submit</button>
    </div>
  );
}







function mapToDispatchState(dispatch){
    console.log('displatch call');
      return({
        inputChange: (event)=>{
            const action={
                type:"OnChang",text:event.target.value
            }
            dispatch(action);
        },
        onButtonClick : (eve) =>{
         eve.preventDefault();
         const action={
             type:'ADD_ITEMS'
         }
         dispatch(action);
        }
    
      })
    
}



function mapToState(state){
return({
    initialText:state.initialText,
    listItem:state.listItem
});

}


export default connect(mapToState,mapToDispatchState)(Lister);
