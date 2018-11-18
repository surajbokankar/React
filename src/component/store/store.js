import { createStore } from 'redux';
import constant from '../../common/Constant';


const initialState={
    repos:[],
    inputSearchValue:''
}


const reducer=(state = initialState, action)=>{


    switch(action.type){
        case constant.ON_CHANGE:
        return Object.assign({},state,{inputSearchValue:action.text});

        case constant.ON_REPO:
        return Object.assign({},state,{repos:action.repos});

        default :
        return state;
    }

   return state;

}







const store=createStore(reducer);

export default store;