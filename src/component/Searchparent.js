import React from "react";
import Search from "./search";
import store from "./store/store";

class SearchView extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    setTimeout(() => {
      this.setState({
        repos: [],
        inputSearchValue: "android"
      });
    }, 5000);
  }

  render() {
    return (
      <div>
        <Search store={store} />
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount", this.state.repos);
  }

  componentWillMount() {
    console.log("componentWillMount", this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      repos: nextProps.repos,
      inputSearchValue: nextProps.inputSearchValue
    });
    console.log("componentWillReceiveProps", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate(preProps, prvState) {
    console.log("componentDidUpdate", preProps, prvState);
    
  }

  componentWillUnmount() {
     console.log("componentWillUnmount",this.props);
  }
}

export default SearchView;
