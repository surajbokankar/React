import { createStore } from "redux";

const initialState = {
  initialText: "hello",
  listItem: []
};

const reducer = (state=initialState, action) => {
  switch(action.type){
      case "OnChang":
      return Object.assign({},state,{initialText:action.text});

      case 'ADD_ITEMS':
      if(state.initialText!=null&&state.initialText.length>0)
      return Object.assign({},state,{listItem:state.listItem.concat(state.initialText),initialText:''});

      default:
      return state;
  }

  return state;
};

const store = createStore(reducer);

export default store;
