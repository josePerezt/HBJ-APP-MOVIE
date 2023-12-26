import { ALLMOVIES, ALLTV, TOPMOVIES } from "./type";

const initialState = {
  allMovies: [],
  allTv: [],
  topMovies: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALLMOVIES:
      return {
        ...state,
        allMovies: payload,
      };
    case ALLTV:
      return {
        ...state,
        allTv: payload,
      };
    case TOPMOVIES:
      return {
        ...state,
        topMovies: payload,
      };
    default: {
      return { ...state };
    }
  }
};

export default reducer;
