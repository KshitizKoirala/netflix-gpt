import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TMDB_TOP_RATED_MOVIES_API_URL } from "../utils/constants";
import { TMDB_API_OPTIONS } from "../utils/config";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(TMDB_TOP_RATED_MOVIES_API_URL, TMDB_API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json?.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
