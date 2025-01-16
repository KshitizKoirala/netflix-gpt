import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="px-6">
      <div className="font-semibold text-2xl text-white">
        <h1 className="py-4 pl-4">{title}</h1>
      </div>
      <div className="flex overflow-x-scroll scheme-dark">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
