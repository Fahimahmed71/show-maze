import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../../Footer/Footer";
import ScrollUp from "../../ScrollUp/ScrollUp";
import Schedules from "./Schedules/Schedules";

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/schedule/full")
      .then((res) => res.json())
      .then((data) => {
        setSchedule(data);
      });
  }, []);

  return (
    <>
      <section className=" container mx-auto pt-20">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"></th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  AirDate
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  AirTime
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  RunTime
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Status
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Country
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Type
                </th>
              </tr>
            </thead>
            {schedule.slice(0, 100).map((schedules) => (
              <Schedules schedules={schedules} key={schedules.id} />
            ))}
          </table>
          <ScrollUp />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Schedule;
