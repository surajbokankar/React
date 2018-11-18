import React from "react";
import Search from "./search";
import store from './store/store';

class SearchView extends React.Component {

constructor(props){
  super(props);
  this.state={
    data:store.getState()
  }
}

  render() {
    return (
      <div>
         
        <Search store={store}/>
      </div>
    );
  }

  componentDidMount() {

    console.log('component called',this.state.data);
  }
}



export default SearchView;
   