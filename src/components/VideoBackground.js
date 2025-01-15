import { useSelector } from "react-redux";
import useGetTrailerVideos from "../hooks/useGetTrailerVideos";

const VideoBackground = ({ movieId }) => {
  useGetTrailerVideos(movieId);
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  return (
    <div>
      <div className="">
        <iframe
          className="w-full aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?autoplay=1&mute=1&loop=1&playlist=" +
            trailerVideo?.key
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
