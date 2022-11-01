import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Cast from "./Cast/Cast";

const Info = () => {
  const { infoId } = useParams();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const url = `https://api.tvmaze.com/singlesearch/shows?q=${infoId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  const {
    averageRuntime,
    ended,
    name,
    language,
    status,
    summary,
    premiered,
    officialSite,
  } = info;

  const image = info?.image?.original;
  const network = info?.network?.name;
  const rating = info?.rating?.average;
  const id = info?.id;

  return (
    <section className="relative">
      <img
        className="w-full brightness-50 opacity-30 absolute -z-10 object-cover"
        src={image}
        alt=""
      />

      <dl className="relative z-10 top-40 mx-10">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-semibold text-center text-7xl ">
          {name}
        </h1>
        <h1 className="text-neutral-400 text-center mt-2 text-xl">{network}</h1>

        <dl className="mt-10">
          <p className="text-white text-center ">{summary}</p>

          <h1 className="text-neutral-300 text-center mt-5 text-3xl font-bold">
            Rating: <span className="text-yellow-300 ">{rating}</span>
          </h1>

          <div className="mt-3 flex gap-5 justify-center">
            <h1 className="text-neutral-300">Runtime: {averageRuntime}min</h1>
            <h1 className="text-neutral-300">Language: {language}</h1>
          </div>

          <div className="flex gap-5 flex-wrap justify-center mt-3">
            <h1 className="text-neutral-300">Status: {status}</h1>
            <h1 className="text-neutral-300">Premiered: {premiered}</h1>
            <h1 className="text-neutral-300">Ended: {ended}</h1>
            <a
              className="text-neutral-300 "
              href={officialSite}
              target="_blank"
              rel="noreferrer"
            >
              Website:{" "}
              <span className="underline hover:text-blue-400">{name}</span>
            </a>
          </div>
        </dl>
        <Cast id={id} />
      </dl>
    </section>
  );
};

export default Info;
