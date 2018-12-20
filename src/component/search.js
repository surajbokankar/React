import React from "react";
//import Input from "@material-ui/core/Input";
//import TextField from "@material-ui/core/TextField";
import { connect } from 'react-redux';
import constant from "../common/Constant";
import Api from './Api';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//import ListItemAvatar from '@material-ui/core/ListItemAvatar';


function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

function Search(props) {
  console.log('Response',props);
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

      {/* <ul onScroll={ props.onScroll }>
        {props.repos.map((data, index) => {
          return (
            <li key={index}>
           
              <a href={data.html_url}>{data.name}</a>
            </li>
          );
        })}
      </ul> */}

      <Grid >
            <Typography variant="h6" className='title'>
              Github Repos:
            </Typography>
            <div >
              {/* <List >
                   {props.repos.map((data, index) => {
                    return (
                      <ListItem
                      button
                      >
                    <ListItemText>
                      <a href={data.html_url}>{data.name}</a>
                      
                      </ListItemText>
                  </ListItem>




                 
                     
                    );
                  })}
                  
                  
              </List> */}
                {props.repos.map((data, index) => {
                  
                  return(<ul>

                    <li>{MediaCard(data)}</li>
                  </ul>);
                  
                  
                  
                  })}
              
            </div>
          </Grid>
    </div>
  );
}

const mapStateToProps = state => {
  console.log("mapStateToProps", state);
  return {
    inputSearchValue: state.inputSearchValue,
    repos: state.repos
  };
 // return state;
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

const MediaCard = (key) => {
  
    return (
      <div
        className="mediaCard"
      >
        <div

          onClick={() => this.onTitleClick(key)}
          onKeyPress={console.log('on Key pressed')}
          role="button"
          tabIndex="0"
        >
          <div
            className="leftList"
          >
            <div style={{
              width: '80%',
              height: '0px',
              paddingLeft: '3%'
            }}
            >
              <div style={{ marginTop: '2%' }}>
                <img
                  alt="App Icon"
                  src=""
                />

                <div className="cardTitleDiv">
                  <label >
                    {key.name}
                  </label>

                </div>
              </div>

              <div
                className="middleView"
              >
                <div
                 className="middleDiv"
                >
                  <label className="middleContentLabel">
                    244
                  </label>
                  <label className="middleContentText">Views</label>
                </div>
                <div
                  className="middleDiv"
                >
                  <label className="middleContentLabel">
                    2345
                  </label>
                  <label className="middleContentText">Installs</label>
                </div>
                <div
                  style={{
                    textAlign: '-webkit-left',
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection:'column'
                  }}
                >
                  <label className="middleContentLabel">
                    2000
                  </label>
                  <label className="middleContentText">Reviews</label>
                </div>
              </div>
            </div>

            <div
              className="page-break"
            >
              <div
                className="ratingAvg"
              >
                <label
                  className="ratingTextLabel"
                >
                  Average Rating
                </label>
                <label
                  className="ratingCountLabel"
                >
                  {Math.round(500 / 100)}
                </label>
              </div>
              <div
                className="createdDiv"
              >
                <label className="createdLabel">Last Created On</label>
                <label className="createdValueLable">fdsfsdfsdf</label>
              </div>
              <div
                className="createdDiv"
              >
                <label className="createdLabel">Last Updated On</label>
                <label className="createdValueLable">dsdssdsdfsf</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
  
};




export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Search);
