import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    movies;
  return (
    nowPlayingMovies && (
      <div className=" bg-black">
        {/* 
      MovieList - Popular
        - MovieCards * n
      MovieList - Now Playing
      MovieList - Now Trending
      MovieList - Horror
    */}
        <div className="mt-0 md:-mt-72 relative z-20">
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        </div>
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Top Rated"} movies={topRatedMovies} />
        <MovieList title={"Upcoming"} movies={upcomingMovies} />
      </div>
    )
  );
};

export default SecondaryContainer;
