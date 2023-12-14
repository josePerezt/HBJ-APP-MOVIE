require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");

const allTv = async () => {
  const API_URL = "https://api.themoviedb.org/3/discover/tv";
  const IMAGE_URL = "https://image.tmdb.org/t/p/original";

  const { data } = await axios(API_URL, {
    params: {
      api_key: API_KEY,
    },
  });
  const { results } = data;

  const newData = results.map((items, index) => {
    return {
      items: items.name,
      id: index,
    };
  });
  return newData;
};

module.exports = allTv;
