import { motion } from 'framer-motion';
import React, { useContext, useRef } from 'react';
import { widthContext } from '../App';
import { dot2, zigzag2 } from '../assets/element';
import { img4 } from '../assets/img';
import { SectionWrapper } from '../hoc';
import { fadeIn, zoomIn } from '../utils/motion';

const Desc = () => {
  const ref = useRef();
  const width = useContext(widthContext);

  const explore = () => {
    if (width > 1023) {
      window.scrollTo({
        top: ref.current.offsetTop + 500,
        behavior: 'smooth',
      });
    } else if (width > 767) {
      window.scrollTo({
        top: ref.current.offsetTop + 300,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: ref.current.offsetTop + 175,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <p className=" z-10 text-black md:text-sm text-center sm:text-start lg:text-lg mt-5 sm:mt-2 mb-5">
        We offer a trifecta of delicious coffee, mouthwatering food, and warm hospitality that is sure to brighten your
        day.
      </p>
      <button
        ref={ref}
        onClick={explore}
        className=" py-3 w-fit mx-auto md:mx-0 text-base btn-Active lg:text-xl text-white bg-main font-semibold px-10 rounded-md border-2 border-black"
      >
        Explore Now
      </button>
    </>
  );
};

const Hero = () => {
  const width = useContext(widthContext);

  return (
    <section className="overflow-x-hidden  bg-slate-50 ">
      <div className="flex sm:flex-row flex-col max-w-[1040px] z-0 relative pb-10 w-11/12 mx-auto mb-32 mt-5 ">
        <div className=" -top-5 sm:top-1/2 sm:-translate-y-1/2 absolute z-10 mt-10 sm:mt-0 w-11/12 sm:w-1/2 h-fit">
          <motion.div variants={zoomIn(1.5, 0.3)} className="absolute z-10 top-0">
            <img
              src={dot2}
              alt="img1"
              loading="lazy"
              className=" w-24 md::w-28 lg:w-40 -translate-y-5 sm:-translate-y-12"
            />
          </motion.div>
          <motion.div
            variants={fadeIn('right', 'spring', 1, 1.5)}
            className="w-full bg-slate-50/60 backdrop-blur  sm:px-5 py-3"
          >
            <h1 className=" w-full font-bold text-3xl lg:text-[40px] xl:text-[42px] leading-none text-main">
              Create a
              <span className="ml-3 lg:ml-0 lg:mx-3 before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-accentGreen relative inline-block">
                <span className="font-semibold text-3xl lg:text-[40px] xl:text-[42px] text-main relative">
                  productive
                </span>
              </span>
              and comfortable environment
            </h1>
            {width > 640 && <Desc />}
          </motion.div>
        </div>
        <div className=" w-full h-fit pt-[70px] sm:pt-0 sm:w-3/5 sm:ml-auto relative">
          <div className="w-full fit bg-main rounded-t-full">
            <motion.div variants={zoomIn(0.1, 1)}>
              <img
                src={img4}
                alt="hero"
                loading="lazy"
                className="w-full h-auto object-contain rounded-t-full border-main border-2"
              />
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn('up', 'tween', 1.5, 0.3)}
            className=" absolute w-1/3  bg-main/70 -my-30 backdrop-blur-md -bottom-5  md:-bottom-8  -right-5 "
          >
            <img src={zigzag2} alt="zigHero" className="w-full h-auto -rotate-90" />
          </motion.div>
        </div>
        {width <= 639 && <Desc />}
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, '');
