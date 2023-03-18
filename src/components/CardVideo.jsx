import React, { useRef, useState } from 'react';
import { HiPlay } from 'react-icons/hi';

const CardVideo = ({ url }) => {
  const [play, setPlay] = useState(false);
  const videoRef = useRef();

  const handlePlay = async () => {
    videoRef.current.play();
    setPlay(true);
  };
  return (
    <div className=" relative w-10/12 mx-auto md:w-full h-auto">
      <video
        ref={videoRef}
        onEnded={() => setPlay(false)}
        src={url}
        type="video/mp4"
        width="100%"
        className=" rounded-lg"
      ></video>

      <button
        onClick={handlePlay}
        className={`${
          play ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        } transition-all duration-200 ease-in-out absolute top-1/2 right-1/2 translate-y-1/2 translate-x-1/2`}
      >
        <HiPlay size={60} className=" fill-main bg-white/70 rounded-full" />
      </button>
    </div>
  );
};

export default CardVideo;
