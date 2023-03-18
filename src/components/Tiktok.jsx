import { motion } from 'framer-motion';
import React from 'react';
import { zigzag, nut } from '../assets/element';
import { videos } from '../constant';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
import CardVideo from './CardVideo';

const Tiktok = () => {
  return (
    <>
      <div className="z-0 overflow-hidden relative bg-slate-50 ">
        <div
          className=" z-10 flex flex-col max-w-[1040px] pt-20 pb-20
       w-11/12 mx-auto"
        >
          <div className=" z-10 text-center text-2xl mb-10 font-semibold">
            <h3 className="">Follow Us on Tiktok</h3>
            <h3>@overlord.delight</h3>
          </div>

          <div className="z-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {videos.map((video, index) => (
              <motion.div key={video.id} variants={fadeIn('right', 'spring', index * 0.5, 1.5)}>
                <CardVideo url={video.src_video} />
              </motion.div>
            ))}
          </div>
        </div>
        <div className=" z-0 absolute top-10">
          <img src={zigzag} alt="zig-tik" className="w-32" />
        </div>
        <div className=" z-0 absolute opacity-80  -bottom-14 right-0">
          <img src={nut} alt="zig-tik" className="w-40" />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tiktok, 'contact');
