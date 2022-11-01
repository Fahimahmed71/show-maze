import React from "react";
import { SplideSlide } from "@splidejs/react-splide";
import { FaPlay } from "react-icons/fa";

const SplideSlider = ({ slider }) => {
  const { img, name, discription } = slider;

  return (
    <SplideSlide>
      <div className="bg-gradient-to-r from-slate-600 to-neutral-500 w-full bg-cover relative">
        <div className="absolute md:top-1/4 top-1/3 left-1/2 transform -translate-x-1/2 z-50">
          <h1 className=" text-neutral-400 md:text-6xl  text-xl text-center">
            {name}
          </h1>
          <h1 className="mt-5 md:block hidden text-neutral-300 text-center">
            {discription}
          </h1>
          <button className="flex gap-2 items-center mt-5 mx-auto bg-fuchsia-600 hover:bg-fuchsia-400 hover:animate-pulse font-semibold md:text-lg text-xs md:px-5 px-4 md:py-3 py-2 text-white rounded-full">
            Watch Now <FaPlay className="" />
          </button>
        </div>

        <img
          className="w-full object-cover mix-blend-overlay brightness-50"
          src={img}
          alt=""
        />
      </div>
    </SplideSlide>
  );
};

export default SplideSlider;
