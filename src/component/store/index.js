import { createStore } from "redux";
import constant from '../../common/Constant';

const initialState = {
  initialText: "hello",
  listItem: []
};

const reducer = (state=initialState, action) => {
  switch(action.type){
      case constant.ON_CHNAGE:
      return Object.assign({},state,{initialText:action.text});

      case constant.ADD_ITEMS:
      if(state.initialText!=null&&state.initialText.length>0)
      return Object.assign({},state,{listItem:state.listItem.concat(state.initialText),initialText:''});

      case constant.ITEM_DELETE:
      const copyOfItems=state.listItem.slice();
      copyOfItems.splice(action.index,1);
      return Object.assign({},state,{listItem:copyOfItems});

      default:
      return state;
  }

  return state;
};

const store = createStore(reducer);

export default store;
