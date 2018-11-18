import { createStore } from 'redux';

const initialState={
    count: 3
};

const initialText={
    inputValue:'suraj'
}


const reducer = (state =initialState , action) =>{
    console.log('reducer running',action);

    switch(action.type){
      case 'Increment':
      return Object.assign({},state,{count: state.count +1})

      case 'Decrement':
      return Object.assign({},state,{count: state.count -1})

      case 'INPUT_CHANGE':
      return Object.assign({},state,{inputValue:action.text});
      
      default:
      return state;
    }

    return state;
}

const store=createStore(reducer);

export default store;
