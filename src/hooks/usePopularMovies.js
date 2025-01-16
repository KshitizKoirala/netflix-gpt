import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TMDB_POPULAR_MOVIES_API_URL } from "../utils/constants";
import { TMDB_API_OPTIONS } from "../utils/config";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(TMDB_POPULAR_MOVIES_API_URL, TMDB_API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json?.results));
  };

  useEffect(() => {
    if (!popularMovies) getPopularMovies();
  }, []);
};

export default usePopularMovies;
