import React from "react";

const Schedules = ({ schedules }) => {
  const { airdate, airtime, runtime } = schedules;
  const { name, status, type } = schedules._embedded.show;

  const countryName = schedules?._embedded?.show?.network?.country?.name;
  const img = schedules._embedded?.show?.image?.original;

  console.log();
  return (
    <>
      <tbody className="divide-y divide-gray-200">
        <tr>
          <img className="w-14" src={img} alt="" />
          <td className="whitespace-nowrap px-2 py-2 font-medium text-fuchsia-400">
            {name}
          </td>
          <td className="whitespace-nowrap px-2 py-2 text-pink-500">
            {airdate}
          </td>
          <td className="whitespace-nowrap px-2 py-2 text-white">{airtime}</td>
          <td className="whitespace-nowrap px-2 py-2 text-white">
            {runtime} min
          </td>
          <td className="whitespace-nowrap px-2 py-2 text-white">{status}</td>
          <td className="whitespace-nowrap px-2 py-2 text-white">
            {countryName}
          </td>
          <td className="whitespace-nowrap px-2 py-2 text-white">{type}</td>
        </tr>
      </tbody>
    </>
  );
};

export default Schedules;
