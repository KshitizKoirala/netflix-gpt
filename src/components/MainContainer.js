import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const moviesData = useSelector((store) => store.movies?.nowPlayingMovies);

  // Early return as the movies will not be loaded in the store in the first render
  if (!moviesData) return;

  const mainMovie = moviesData[0];
  //   console.log(mainMovie);

  const { id, original_title, overview } = mainMovie;

  return (
    <div className="md:pt-0 bg-black pt-[30%]">
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
