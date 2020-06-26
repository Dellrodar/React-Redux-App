import axios from 'axios';

export const FETCHING_JOKE_START = "FETCHING_JOKE_START";
export const FETCHING_JOKE_SUCCESS = "FETCHING_JOKE_SUCCESS";
export const FETCHING_JOKE_FAILURE = "FETCHING_JOKE_FAILURE";

const headers = {
  Accept: "application/json"
};

export const getJoke = () => dispatch => {
  dispatch({ type: FETCHING_JOKE_START });
  axios
    .get("http://api.icndb.com/jokes/random", { headers })
    .then(res => {
      dispatch({ type: FETCHING_JOKE_SUCCESS, payload: res.data.value.joke });
    })
    .catch(err => {
      dispatch({
        type: FETCHING_JOKE_FAILURE,
        payload: err.response.message
      });
    });
};