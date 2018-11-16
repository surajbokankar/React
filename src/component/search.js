import React from "react";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import constant from "../common/Constant";

function Search(props) {
  return (
    <div>
      <h1>Repo Search</h1>

      {/* <TextField
                id="email"
                type="text"
                style={{ marginRight: 20, marginLeft: 20, width: "80%" }}
                margin="normal"
              /> */}

      <form onSubmit={props.handleSubmit}>
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
    handleSubmit: event => {
      //To Prevent page getting refreshed..
      event.preventDefault();

      let query = "utils";

      fetch(`https://api.github.com/search/repositories?q=${query}`)
        .then(response => {
          console.log("response", response);
          return response.json();
        })
        .then(data => {
          console.log("do we have data?", data);
          const action = {
            type: constant.ON_REPO,
            repos: data.items
          };
          dispatch(action);
        });
    }
  };
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Search);
