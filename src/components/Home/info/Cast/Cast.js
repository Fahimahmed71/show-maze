import React, { useEffect, useState } from "react";
import Casts from "./Casts/Casts";

const Cast = ({ id }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const url = `https://api.tvmaze.com/shows/${id}/cast`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setCast(data));
  }, [id]);

  return (
    <section className="mt-10">
      <h1 className="text-fuchsia-400 text-center text-4xl font-semibold tracking-wider">
        Casts
      </h1>
      <dl className="grid md:grid-cols-5 gap-5 mt-10">
        {cast.map((casts) => (
          <Casts casts={casts} key={casts.character.id} />
        ))}
      </dl>
    </section>
  );
};

export default Cast;
