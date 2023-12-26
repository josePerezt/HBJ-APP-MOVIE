import { ALLMOVIES, ALLTV, TOPMOVIES, TOPTV } from "./type";

const initialState = {
  allMovies: [],
  allTv: [],
  topMovies: [],
  topTv: [],
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
    case TOPTV:
      return {
        ...state,
        topTv: payload,
      };
    default: {
      return { ...state };
    }
  }
};

export default reducer;
