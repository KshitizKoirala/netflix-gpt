import { TMDB_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  //   console.log(TMDB_IMAGE_URL + posterPath);
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 m-2">
      <img alt="movie card" src={TMDB_IMAGE_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
