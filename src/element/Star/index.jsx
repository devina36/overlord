import React from 'react';
import { star } from '../../assets/element';

const Star = ({ value, height, width, spacing }) => {
  const decimals = Number(value) % 1;
  const star = [];
  let leftPost = 0;

  for (let i = 0; i < 5 && i < value - decimals; i++) {
    leftPost = leftPost + width;
    star.push(
      <div
        key={`star-${i}`}
        className=" absolute z-10  bg-yellow-300 mask"
        style={{
          left: i * width,
          width: width,
          height: height,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  if (decimals > 0 && value <= 5) {
    star.push(
      <div
        key={`starDecimal`}
        className=" absolute z-10 inline-flex bg-yellow-300 mask"
        style={{
          left: leftPost,
          height: height,
          width: decimals * width - spacing,
        }}
      ></div>
    );
  }

  const startPlaceholder = [];
  for (let i = 0; i < 5; i++) {
    startPlaceholder.push(
      <div
        className="absolute z-10  bg-gray-600 mask"
        key={`starplace-${i}`}
        style={{
          left: i * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>
    );
  }
  return (
    <>
      <div className=" relative  max-w-[200px]" style={{ height: height }}>
        {startPlaceholder}
        {star}
      </div>
    </>
  );
};

export default Star;
