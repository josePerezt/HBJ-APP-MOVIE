import { ALLMOVIES, AllTV } from "./type";

const initialState = {
  allMovies: [],
  allTv: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALLMOVIES:
      return {
        ...state,
        allMovies: payload,
      };
    case AllTV:
      return {
        ...state,
        allTv: payload,
      };
    default: {
      return { ...state };
    }
  }
};

export default reducer;
