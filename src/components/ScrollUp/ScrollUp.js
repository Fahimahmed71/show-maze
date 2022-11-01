import React from "react";
import BackToTop from "react-back-to-top-button";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollUp = () => {
  return (
    <BackToTop showOnScrollUp showAt={100} speed={1500} easing="easeInOutQuint">
      <BsFillArrowUpCircleFill className="text-white animate-pulse" />
    </BackToTop>
  );
};

export default ScrollUp;
