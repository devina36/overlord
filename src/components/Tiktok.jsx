import { motion } from 'framer-motion';
import React from 'react';
import { zigzag } from '../assets/element';
import { videos } from '../constant';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
import CardVideo from './CardVideo';

const Tiktok = () => {
  return (
    <>
      <div className="z-0 overflow-hidden relative bg-slate-50 ">
        <div className=" z-10 flex flex-col max-w-[1040px] py-20 w-11/12 mx-auto">
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
        <div className=" z-0 w-1/2 max-w-[700px] absolute opacity-60 top-10 -left-1/4">
          <img src={zigzag} width={150} height={150} alt="zig-tik" className="w-full h-auto" />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tiktok, 'contact');
