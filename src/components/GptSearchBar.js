import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config?.language);
  let currentLanguage = lang?.[languageKey];

  return (
    <div className="pt-[8%] flex justify-center">
      <form className="w-1/2 bg-black text-white grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-10 text-black font-semibold"
          type="text"
          placeholder={currentLanguage?.gptSearchPlaceholder}
        />
        <button className="px-4 m-4 bg-red-700  rounded-lg col-span-2">
          {currentLanguage?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
