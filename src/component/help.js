import React from 'react';
import Counter from './container/Counter';
import store from './store/';
import MyApps from './myApps';


class Help extends React.Component{
  render(){
      return(
      <div>
          <Counter store={store}/>
  
        
          
      </div>);
  };
}


export default Help;