import React from "react";
import Search from "./search";
import store from './store/store';

class SearchView extends React.Component {
  render() {
    return (
      <div>
         
        <Search store={store}/>
      </div>
    );
  }
}

export default SearchView;
   