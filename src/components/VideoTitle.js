const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-full h-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white md:bg-gradient-to-r md:from-black">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{description}</p>
      <div className="my-4 md:my-0">
        <button className="bg-white text-black py-1 md:py-2 px-3 md:px-8 mx-2 rounded-lg text-xl hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white py-2 px-8 mx-2 rounded-lg opacity-85 text-xl">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
