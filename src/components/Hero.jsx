import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { rounded, zigzag2 } from '../assets/element';
import { img4 } from '../assets/img';
import { SectionWrapper } from '../hoc';
import { fadeIn, slideIn, zoomIn } from '../utils/motion';

const Desc = () => {
  return (
    <>
      <p className=" z-10 text-black md:text-sm text-center sm:text-start lg:text-lg mt-2 mb-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quos saepe libero at iure consectetur
        accusantium quia sequi facilis sunt.
      </p>
      <button className=" py-3 w-fit mx-auto md:mx-0 text-base btn-Active lg:text-xl text-black bg-accentOrange font-semibold px-10 rounded-md border-2 border-black">
        Explore Now
      </button>
    </>
  );
};

const Hero = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return (
    <section className="overflow-x-hidden pb-10 bg-white">
      <div className="flex sm:flex-row flex-col max-w-[1040px] z-0 relative w-11/12 mx-auto sm:mb-0 mt-5">
        <div className=" -top-5 sm:top-1/2 sm:-translate-y-1/2 absolute z-10 mt-16 sm:mt-0 w-11/12 sm:w-1/2 h-fit">
          <motion.div variants={zoomIn(1.5, 0.3)} className="absolute z-10 top-0">
            <img
              src={rounded}
              alt="img1"
              loading="lazy"
              className=" w-24 md::w-28 lg:w-40 -translate-y-16 sm:-translate-y-20 lg:-translate-y-28"
            />
          </motion.div>
          <motion.div
            variants={fadeIn('right', 'spring', 1, 1.5)}
            className="w-full bg-white/60 backdrop-blur  sm:px-5 py-3"
          >
            <h1 className=" w-full font-bold text-3xl lg:text-[40px] xl:text-[42px] leading-none text-main">
              Create a
              <span className="ml-3 before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-accentGreen relative inline-block">
                <span className="font-semibold text-main relative">productive</span>
              </span>
              and comfortable environment
            </h1>
            {width > 640 && <Desc />}
          </motion.div>
        </div>
        <div className=" w-full pt-[70px] sm:pt-0 sm:w-3/5 sm:ml-auto relative">
          <motion.div variants={zoomIn(0.1, 1)}>
            <img
              src={img4}
              alt="hero"
              loading="lazy"
              className="w-full  object-contain rounded-t-full border-main border-2"
            />
          </motion.div>

          <div className=" absolute -bottom-8 -rotate-90 -right-5 ">
            <motion.img
              variants={slideIn('up', 'tween', 1.5, 0.3)}
              src={zigzag2}
              alt="zigHero"
              className="w-24 sm:w-28 lg:w-40 "
            />
          </div>
        </div>
        {width <= 639 && <Desc />}
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, '');
