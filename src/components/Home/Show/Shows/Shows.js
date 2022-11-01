import React from "react";
import { useNavigate } from "react-router-dom";
import "./Shows.css";

const Shows = ({ shows, search }) => {
  const { original } = shows.image;
  const { name } = shows;

  const navigate = useNavigate();

  const handleBtnClc = (e) => {
    navigate(`/info/${e}`);
  };

  return (
    <div className="max-w-sm shows md:hover:scale-110 mt-10">
      <img alt="Loading" src={original} className="h-96 w-full object-cover" />

      <button
        onClick={() => handleBtnClc(name)}
        className="text-lg font-bold text-white block mx-auto bg-violet-500 hover:bg-violet-300 w-full py-2"
      >
        {name}
      </button>
    </div>
  );
};

export default Shows;
