import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';

const Review = () => {
  const refScroll = useRef();

  const scroll = (offset) => {
    refScroll.current.scrollLeft += offset;
  };

  return (
    <div className="my-5 overflow-x-hidden max-w-[1040px] w-11/12 mx-auto grid grid-cols-12 gap-5 lg:gap-10 py-20">
      <div className=" col-span-12 sm:col-span-6 lg:col-span-5">
        <motion.div variants={fadeIn('left', 'spring', 0.75, 0.75)} className=" max-w-[400px]">
          <p className=" text-secondary tracking-widest mb-5">Review</p>
          <h3 className=" text-3xl md:text-4xl mb-3 font-semibold tracking-wide">What People Says About Overlord</h3>
          <dd>We always providing the best to make our customer pleasent with our services</dd>
        </motion.div>
      </div>
      <div className=" col-span-12 sm:col-span-6 lg:col-span-7">
        <div className="flex justify-end -translate-x-2 mb-5 gap-x-5">
          <button
            onClick={() => scroll(-312)}
            className=" rounded-full btn-Active bg-accentGreen border-2 border-black"
          >
            <HiArrowLeft className=" fill-main" size={20} />
          </button>
          <button
            onClick={() => scroll(312)}
            className=" rounded-full btn-Active bg-accentGreen border-2 border-black "
          >
            <HiArrowRight className=" fill-main" size={20} />
          </button>
        </div>
        <div
          ref={refScroll}
          className="grid grid-flow-col overflow-y-auto scroll-smooth overscroll-x-contain snap-x snap-mandatory gap-3 scrollbar"
          style={{ overflowX: 'scroll' }}
        >
          <article className=" w-[280px] sm:w-[320px] py-3 px-3 h-44 sm:h-48 bg-main text-white snap-start">1</article>
          <article className=" w-[280px] sm:w-[320px] h-44 sm:h-48 bg-main text-white snap-start">2</article>
          <article className=" w-[280px] sm:w-[320px] h-44 sm:h-48 bg-main text-white snap-start">3</article>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Review, 'review');
