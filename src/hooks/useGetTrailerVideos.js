import { useDispatch } from "react-redux";
import {
  TMDB_API_OPTIONS,
  TMDB_MOVIE_VIDEOS_LIST_API_URL,
} from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useGetTrailerVideos = (movieId) => {
  /** We have two options, i.e either create the state or use the super store REDUX */
  const dispatch = useDispatch();
  //   const [trailerKey, setTrailerKey] = useState(null);
  //   const trailerId = useRef(null)

  const getMovieVideos = async () => {
    const VIDEO_API = TMDB_MOVIE_VIDEOS_LIST_API_URL.replace(
      "{{movieId}}",
      movieId
    );
    // console.log(VIDEO_API);
    const data = await fetch(VIDEO_API, TMDB_API_OPTIONS);
    const json = await data.json();
    const filterData = json?.results.filter(
      (movie) => movie.type === "Trailer"
    );
    const trailer = filterData?.[0] ?? json?.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
    // setTrailerKey(trailer.key);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useGetTrailerVideos;
