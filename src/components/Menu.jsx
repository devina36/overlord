import { motion } from 'framer-motion';
import React from 'react';
import { dot } from '../assets/element';
import { menu } from '../constant';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';

const Menu = () => {
  const fade = (i) => {
    if (i % 2 === 0) {
      fadeIn('down', 'spring', 0.5, 0.5);
    } else {
      fadeIn('up', 'spring', 0.5, 0.5);
    }
  };

  return (
    <div className="z-10 overflow-x-hidden relative bg-slate-50 -mt-10 md:-mt-28">
      <div className=" max-w-[1040px] w-11/12 mx-auto py-20">
        <p className=" text-secondary text-center tracking-widest">Menu</p>
        <h3 className="text-center text-3xl mb-10 md:mb-20 font-semibold">Our Signature Dish</h3>
        <div className="flex flex-col sm:flex-row w-full gap-5 sm:align-baseline justify-between relative">
          {menu.map((item, i) => (
            <motion.div
              variants={i % 2 === 0 ? fadeIn('down', 'spring', 0.75, 1) : fadeIn('up', 'spring', 0.75, 1)}
              key={item.id}
              className="flex items-center flex-row gap-x-3 sm:flex-col z-10 w-full sm:w-1/3 md:max-w-[250px] h-fit even:flex-row-reverse even:sm:flex-col even:md:my-32 odd:md:self-end first:odd:self-start "
            >
              <div className=" w-1/2 sm:w-full ">
                <img
                  src={item.link}
                  width={250}
                  height={250}
                  alt={`menu-${item.id}`}
                  className="object-cover w-full  aspect-square"
                />
              </div>
              <div className="w-1/2 sm:w-full">
                <h4 className=" font-semibold text-xl sm:mt-5 mb-3">{item.title}</h4>
                <p className="w-full text-sm text-stone-700">{item.desc}</p>
              </div>
            </motion.div>
          ))}
          <div className="absolute z-0 -bottom-20 md:bottom-0 -left-20  md:left-0">
            <img src={dot} width={128} height={128} alt="dot-menu" className=" h-28 md:h-32 w-auto" />
          </div>
          <div className="absolute z-0 -top-10 md:top-0 -right-20 md:right-0">
            <img src={dot} width={128} height={128} alt="dot-menu-2" className=" md:rotate-90 h-32 w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Menu, 'menu');
