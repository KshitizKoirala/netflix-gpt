export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
