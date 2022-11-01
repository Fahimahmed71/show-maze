import React from "react";
import gif from "./Loading.gif";

const Loading = () => {
  return (
    <section>
      <img className="w-screen" src={gif} alt="" />
    </section>
  );
};

export default Loading;
