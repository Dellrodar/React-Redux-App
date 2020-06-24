import { GET_JOKES, GET_RANDOM_JOKE, CLEAR_JOKES } from "../actions";

const initialState = [];

export const jokeReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_JOKES:
      return state;
    case GET_RANDOM_JOKE:
      return state;
    case CLEAR_JOKES:
      return state;
    default:
      return state;
  }
}