import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestions from "./GptMoviesSuggestions";
import { BACKGROUND_IMAGE } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div className="">
      <div className="fixed -z-10">
        <img className="" alt="background-banner" src={BACKGROUND_IMAGE} />
      </div>
      <GptSearchBar />
      <GptMoviesSuggestions />
    </div>
  );
};

export default GptSearchPage;
