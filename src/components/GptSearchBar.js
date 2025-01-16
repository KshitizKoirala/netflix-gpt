import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// import OpenAiClient from "../utils/openAi";
import lang from "../utils/languageConstants";
import { TMDB_MOVIE_DETAIL_API_URL } from "../utils/constants";
import { TMDB_API_OPTIONS } from "../utils/config";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const languageKey = useSelector((store) => store.config?.language);

  const currentLanguage = lang?.[languageKey];

  const searchMovieTMDB = async (movieName) => {
    // console.log("movieName", movieName);
    const data = await fetch(
      TMDB_MOVIE_DETAIL_API_URL + movieName,
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);

    // Make an API call to OPENAI and get Movie Results
    // const gptQuery =
    //   "Act as a Movie Recommendation Systema nd suggest some movies for the query: " +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma separated like the example results given ahead. Exaple Result: Gara, Sholay, Don, Golmaal, Kohi Mil Gaya";
    // const gptResults = await OpenAiClient.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // console.log(gptResults);
    const gptMovies = [
      "Andaz Apna apna",
      "Hera Feri",
      "Chupke Chupke",
      "Jaan Bhi Do Yaaro",
      "Padosan",
    ];

    /**
     * NOTE Since searchMovieTMDB is an async function, it returns a promise
     * So we must wait for the promise to resolve using Promise.all()
     */
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbReults = await Promise.all(promiseArray);

    // console.log("movieDetails", tmdbReults);
    dispatch(
      addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbReults })
    );
  };

  return (
    <div className="pt-[30%] md:pt-[8%] flex justify-center">
      <form
        className="w-full m-2 md:w-1/2 bg-black text-white grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9 md:col-span-10 text-black font-semibold"
          type="text"
          placeholder={currentLanguage?.gptSearchPlaceholder}
        />
        <button
          className="px-4 m-4 bg-red-700 rounded-lg col-span-3 md:col-span-2"
          onClick={handleGptSearchClick}
        >
          {currentLanguage?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
