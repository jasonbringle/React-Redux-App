import axios from 'axios';
export const FETCHING_JOKE_START = "FETCHING_JOKE_START";
export const FETCHING_JOKE_SUCCESS = "FETCHING_JOKE_SUCCESS";
export const FETCHING_JOKE_FAILURE = "FETCHING_JOKE_FAILURE";

 export const getJoke = () => dispatch => {
     dispatch({ type: FETCHING_JOKE_START});
     axios
     .get(`https://api.icndb.com/jokes/random/1`)
     .then(res => {
        // console.log(res);
        dispatch({ type: FETCHING_JOKE_SUCCESS, payload: res.data.value[0].joke })}
        )
     .catch(err => {
       console.log("error", err);
       dispatch({ type: FETCHING_JOKE_FAILURE, payload: err.request.onerror.name})
     });
 }