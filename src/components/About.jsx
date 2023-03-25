import React from 'react';
import { food1, food2, food3, img1, img2, img3, img4, img6, img7, img8 } from '../assets/img';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  const image = [
    { link: [img7, img2] },
    { link: [img1, img6] },
    { link: [img2, food2, img4] },
    { link: [img8, food1] },
    { link: [food3, img3] },
  ];
  return (
    <div className="bg-main overflow-x-hidden -mt-20 relative">
      <div className=" relative z-10 max-w-[1040px] w-full md:w-11/12 mx-auto pt-20">
        <div className="text-white text-center w-11/12 md:w-3/4 mx-auto mb-16">
          <p className="text-center text-secondary tracking-widest">Overview</p>
          <div className="  relative flex justify-center items-center mb-5">
            <h2 className=" w-fit before:hidden before:absolute before:min-w-fit before:-inset-1 before:-skew-y-3 before:bg-accentGreen relative inline-block">
              <span className="font-semibold text-white text-3xl relative tracking-wide">Who We Are</span>
            </h2>
          </div>
          <motion.p
            variants={textVariant(0.75)}
            className=" md:text-lg text-secondary text-center font-semibold tracking-[0.015] md:leading-[1.5]"
          >
            <span className=" text-xl">"</span> Welcome to our cafe, a community-oriented space where you can work,
            relax, and connect with others. Our locally owned establishment values inclusivity, sustainability, and
            customer service. We offer high-speed internet. Come visit us and be a part of our thriving community{' '}
            <span className=" text-xl">"</span>
          </motion.p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-x-1 md:gap-x-2 lg:gap-x-3 place-items-end">
          {image.map((item, i) => (
            <div
              key={i}
              className="w-full first:hidden first:sm:grid last:hidden grid last:sm:grid grid-flow-row gap-1 md:gap-2 lg:gap-3"
            >
              {item.link.map((link, index) => (
                <img
                  src={link}
                  key={`link-${link}-${index}`}
                  alt={`link-${link}-${index}`}
                  className="border-2 lg:border-4 border-txt rounded-lg"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
