import React from "react";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import constant from "../common/Constant";
import Api from './Api';


function Search(props) {
  console.log('Response',props.repos);
  return (
    <div>
      <h1>Repo Search</h1>

      {/* <TextField
                id="email"
                type="text"
                style={{ marginRight: 20, marginLeft: 20, width: "80%" }}
                margin="normal"
              /> */}

      <form onSubmit={(evt)=>{props.handleSubmit(evt,props.inputSearchValue)}}>
        <input
          type="text"
          value={props.inputSearchValue}
          onChange={props.onInputChange}
        />
      </form>

      <ul>
        {props.repos.map((data, index) => {
          return (
            <li key={index}>
           
              <a href={data.html_url}>{data.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  console.log("mapStateToProps", state);
  return {
    inputSearchValue: state.inputSearchValue,
    repos: state.repos
  };
  return state;
};

const mapStateToDispatch = dispatch => {
  console.log("dispatcher running");
  return {
    onInputChange: event => {
      const action = {
        type: constant.ON_CHANGE,
        text: event.target.value
      };
      dispatch(action);
    },
    handleSubmit: (event,query) => {
      //To Prevent page getting refreshed..
      event.preventDefault();
      Api.getReposAxios(dispatch,query);

      
    }
  };
};




export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Search);
