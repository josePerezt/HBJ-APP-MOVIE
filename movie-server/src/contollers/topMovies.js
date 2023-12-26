require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

const topMovies = async () => {
  const API_URL = "https://api.themoviedb.org/3/movie/top_rated";
  const IMAGE_URL = "https://image.tmdb.org/t/p/original";

  const { data } = await axios(API_URL, {
    params: {
      api_key: API_KEY,
    },
  });
  const { results } = data;
  const newData = results.map((items) => {
    const movie = {
      id: items.id,
      language: items.language,
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

module.exports = topMovies;
