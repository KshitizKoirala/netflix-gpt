import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMoviesSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70">
      <div className="">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieResults[index].id}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMoviesSuggestions;
