const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-full h-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{description}</p>
      <div className="">
        <button className="bg-white text-black py-2 px-8 mx-2 rounded-lg text-xl hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white py-2 px-8 mx-2 rounded-lg opacity-85 text-xl">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
