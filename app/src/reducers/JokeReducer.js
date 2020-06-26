import { FETCHING_JOKE_SUCCESS, FETCHING_JOKE_START,FETCHING_JOKE_FAILURE } from "../actions";

const initialState = {
  CNJoke: '',
  isFetching: false,
  isLoading: false,
  error: '',
};

export const jokeReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_JOKE_START:
    return {
      ...state,
      isFetching: true,
      error: ""
    };
  case FETCHING_JOKE_SUCCESS:
    return {
      ...state,
      CNJoke: action.payload,
      isFetching: false,
      error: ""
    };
    case FETCHING_JOKE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}