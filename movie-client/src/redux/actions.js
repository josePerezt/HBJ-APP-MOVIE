import { ALLMOVIES } from "./type";
import axios from "axios";

const URL = "http://localhost:3001/";

// accion para obtener peliculas
export const movies = () => {
  return async function (dispatch) {
    const { data } = await axios(URL + "allMovies");
    dispatch({ type: ALLMOVIES, payload: data });
    console.log(data);
  };
};
