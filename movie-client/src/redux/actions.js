import { ALLMOVIES, AllTV } from "./type";
import axios from "axios";

const URL = "http://localhost:3001/";

// accion para obtener peliculas
export const movies = () => {
  return async function (dispatch) {
    const { data } = await axios(URL + "allMovies");
    dispatch({ type: ALLMOVIES, payload: data });
  };
};

export const tv = () => {
  return async function (dispatch) {
    const { data } = await axios(URL + "allTv");
    dispatch({ type: AllTV, payload: data });
  };
};
