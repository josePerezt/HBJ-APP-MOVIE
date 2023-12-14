require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");

const allMovies = async () => {
  const API_URL = "https://api.themoviedb.org/3/discover/movie";
  const IMAGE_URL = "https://image.tmdb.org/t/p/original";
  const { data } = await axios.get(API_URL, {
    params: {
      api_key: API_KEY,
    },
  });
  const { results } = data;
  const newData = results.map((items, index) => {
    const movie = {
      id: ++index,
      language: items.original_language,
      title: items.title,
      overview: items.overview,
      vote: items.vote_average,
      vote_count: items.vote_count,
      image: IMAGE_URL + items.poster_path,
    };
    return movie;
  });
  return newData;
};

module.exports = allMovies;
