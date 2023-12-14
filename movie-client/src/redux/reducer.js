import { ALLMOVIES } from "./type";

const initialState = {
  allMovies: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALLMOVIES:
      return {
        ...state,
        allMovies: payload,
      };
    default: {
      return { ...state };
    }
  }
};

export default reducer;
