import React from "react";
import index from "jss";
import { connect } from 'react-redux';
import Constant from '../common/Constant';

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
                return <li key={index}
                       onClick={()=>props.onItemDelete(index)}
                >
                {item} 
                </li> 
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
                type:Constant.ON_CHNAGE,text:event.target.value
            }
            dispatch(action);
        },
        onButtonClick : (eve) =>{
         eve.preventDefault();
         const action={
             type:Constant.ADD_ITEMS
         }
         dispatch(action);
        },
        onItemDelete:(index)=>{
            const action={
                type:Constant.ITEM_DELETE,index:index
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
