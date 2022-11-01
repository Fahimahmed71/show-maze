import React from "react";

const Casts = ({ casts }) => {
  const name = casts?.character?.name;
  const img = casts?.character?.image?.original;
  const url = casts?.character?.url;
  const birthday = casts?.person?.birthday;
  const country = casts?.person?.country?.name;
  const gender = casts?.person?.gender;

  console.log(casts);
  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block"
      >
        <img
          alt="actor"
          src={img}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-md"
        />

        <div className="relative p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
            {name}
          </p>

          <div className="mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <h1 className="text-fuchsia-500 font-semibold">{country}</h1>
              <h1 className="text-white">{gender}</h1>
              <h1 className="text-white">{birthday}</h1>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default Casts;
