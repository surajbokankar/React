

import constant from '../common/Constant';
import axios from 'axios';



function getRepos(dispatch,query){
   // let query = "hello";

   let user=`https://api.github.com/search/repositories?q=${query}`;
   

    fetch(user)
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


function getReposAxios(dispatch,query){
  console.log('Axios running',query);
  let user=`https://api.github.com/search/repositories?q=${query}`;
  axios.get(user)
  .then(function (response) {
    // handle success
    console.log('do we have data?',response);
    const action={
      type:constant.ON_REPO,
      repos:response.data.items
    }
    dispatch(action);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
}

export default{
  getRepos,
  getReposAxios
}