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
    <div>
      <div>
        <VideoTitle title={original_title} description={overview} />
      </div>
      <div>
        <VideoBackground movieId={id} />
      </div>
    </div>
  );
};

export default MainContainer;
