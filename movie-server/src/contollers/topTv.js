require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");

const topTv = async () => {
  const API_URL = "https://api.themoviedb.org/3/tv/top_rated";
  const IMAGE_URL = "https://image.tmdb.org/t/p/original";

  const { data } = await axios(API_URL, {
    params: {
      api_key: API_KEY,
    },
  });
  const { results } = data;
  const newData = results.map(({ id, name, poster_path }) => {
    const programTV = {
      id,
      name,
      image: IMAGE_URL + poster_path,
    };
    return programTV;
  });
  return newData;
};

module.exports = topTv;
