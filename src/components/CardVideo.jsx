import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { HiPlay } from 'react-icons/hi';

const CardVideo = ({ url }) => {
  const [play, setPlay] = useState(false);
  const videoRef = useRef();

  const handlePlay = async () => {
    videoRef.current.play();
    setPlay(true);
  };
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Overlord Delight Cafe at Mojoroto, Kota Kediri, Jawa Timur. Create a productive and comfortable environment. Something Delight and Tasty - Office at 3PM - 12AM."
          data-rh="true"
        ></meta>
      </Helmet>
      <div className="relative">
        <video ref={videoRef} onEnded={() => setPlay(false)} className=" w-10/12 mx-auto md:w-full h-auto rounded-lg">
          <source src={url} type="video/mp4"></source>
        </video>
        <div
          type="button"
          onClick={handlePlay}
          className={`${
            play ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          } transition-all duration-200 ease-in-out absolute top-1/2 right-1/2 translate-y-1/2 translate-x-1/2`}
        >
          <HiPlay size={60} className=" fill-main bg-white/70 rounded-full" />
        </div>
      </div>
    </>
  );
};

export default CardVideo;
