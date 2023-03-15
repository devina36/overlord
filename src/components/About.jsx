import React from 'react';
import { comma, zigzag2, zigzag3 } from '../assets/element';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { fadeIn, zoomIn } from '../utils/motion';

const About = () => {
  return (
    <div className=" bg-accentGreen  pt-5 pb-5 relative">
      <div className="z-10 md:pt-0  max-w-[1040px] w-11/12 flex items-center justify-center md:justify-start flex-col md:flex-row  mx-auto">
        <div className="z-10  basis-full justify-center md:justify-start md:basis-2/5 flex flex-row items-center gap-3">
          <div className="basis-1/3 flex flex-col ">
            <div className="border-4 border-txt rounded-xl transform -translate-x-6 -translate-y-8  scale-95 -rotate-6">
              <motion.img
                variants={fadeIn('up', 'spring', 0, 0.75)}
                src="/assets/food3.jpeg"
                alt="img1"
                loading="lazy"
                className=" rounded-lg"
              />
            </div>
            <div className="border-4 border-txt rounded-xl transform -translate-x-8 scale-125 ">
              <motion.img
                variants={fadeIn('up', 'spring', 1, 0.75)}
                src="/assets/img7.jpeg"
                alt="img1"
                loading="lazy"
                className=" rounded-lg"
              />
            </div>
          </div>
          <div className=" basis-1/3 flex flex-col gap-y-3">
            <div className=" border-4 border-txt rounded-xl rotate-6 translate-x-5 -translate-y-10 scale-[1.2]">
              <motion.img
                variants={fadeIn('up', 'spring', 0.5, 0.75)}
                src="/assets/img1.jpeg"
                alt="img1"
                loading="lazy"
                className=" rounded-lg"
              />
            </div>
            <div className=" border-4 border-txt rounded-xl translate-x-4 -translate-y-4">
              <motion.img
                variants={fadeIn('up', 'spring', 1.5, 0.75)}
                src="/assets/food2.jpeg"
                alt="img1"
                loading="lazy"
                className=" rounded-lg"
              />
            </div>
            <div className="border-4 border-txt rounded-xl rotate-[10deg] scale-110">
              <motion.img
                variants={fadeIn('up', 'spring', 2, 0.75)}
                src="/assets/img8.jpeg"
                alt="img1"
                loading="lazy"
                className=" rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="z-20 order-first md:order-last basis-full mb-20 md:basis-3/5">
          <div className=" flex justify-center items-center">
            <h2 className=" w-fit before:block before:absolute before:min-w-fit before:-inset-1 before:-skew-y-3 before:bg-accentOrange relative inline-block">
              <span className="font-bold text-txt text-3xl relative ">Who We Are</span>
            </h2>
          </div>
          <motion.div
            variants={zoomIn(0.5, 0.5)}
            className=" mx-auto w-full md:w-[93%] lg:w-[85%] xl:w-full relative mt-10"
          >
            <div className="absolute z-10 top-0 -translate-y-10 -right-3 md:-right-12 lg:-right-16 ">
              <img src={comma} alt="" className="w-16 lg:w-20 lg:h-20" />
            </div>
            <div className="absolute z-10 top-0 -translate-y-10 -left-3 md:-left-12 lg:-left-16 transform -scale-x-[1]">
              <img src={comma} alt="" className="w-16 lg:w-20 lg:h-20" />
            </div>
            <p className=" md:text-base lg:text-[22px] text-txt text-center font-semibold ">
              Welcome to our cafe, a community-oriented space where you can work, relax, and connect with others. Our
              locally owned establishment values inclusivity, sustainability, and customer service. We offer high-speed
              internet. Come visit us and be a part of our thriving community
            </p>
          </motion.div>
        </div>
      </div>
      <div className="z-0 absolute -top-20 rotate-180 right-0">
        <img src={zigzag2} alt="zig-about" className="w-24 md:w-28 lg:w-36" />
      </div>
      <div className="z-0 absolute -bottom-5 -rotate-45 -left-5 ">
        <img src={zigzag3} alt="nut-about" className="w-24 md:w-28 lg:w-36" />
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
