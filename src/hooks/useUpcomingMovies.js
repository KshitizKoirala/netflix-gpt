import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TMDB_UPCOMING_MOVIES_API_URL } from "../utils/constants";
import { TMDB_API_OPTIONS } from "../utils/config";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(TMDB_UPCOMING_MOVIES_API_URL, TMDB_API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json?.results));
  };

  useEffect(() => {
    if (!upcomingMovies) getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
