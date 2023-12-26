import { ALLMOVIES, ALLTV, TOPMOVIES, TOPTV } from "./type";
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
    dispatch({ type: ALLTV, payload: data });
  };
};

export const topMovies = () => {
  return async function (dispatch) {
    const { data } = await axios(URL + "topMovies");
    dispatch({ type: TOPMOVIES, payload: data });
  };
};

export const topTv = () => {
  return async function (dispatch) {
    const { data } = await axios(URL + "topTv");
    dispatch({ type: TOPTV, payload: data });
  };
};
