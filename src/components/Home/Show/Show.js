import React, { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import ScrollUp from "../../ScrollUp/ScrollUp";
import Shows from "./Shows/Shows";

const Show = () => {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState([]);
  const [text, setText] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 20;
  const pagination = pageNumber * userPerPage;

  const inputSearchRef = useRef("");

  const textLowerCase = text.toLowerCase();

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => {
        const match = data.filter((searchData) =>
          searchData.name.toLowerCase().includes(textLowerCase)
        );
        setSearch(match);
        setShows(data);
      });
  }, [textLowerCase]);

  const handleSearch = (e) => {
    setText(e.target.value);
  };

  const displayUser = search
    .slice(pagination, pagination + userPerPage)
    .map((shows) => {
      return <Shows shows={shows} key={shows.id} search={search}></Shows>;
    });

  const pageCount = Math.ceil(shows.length / userPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <section className="mt-20 container mx-auto ">
      <div className="relative flex items-center shadow-2xl">
        <input
          className="mx-auto block md:h-10 h-9 text-white md:text-base text-sm rounded-full md:pr-7 pr-0 pl-5 placeholder:text-white placeholder:italic bg-blue-900 focus:outline-none"
          type="search"
          name="search"
          id="search"
          onChange={handleSearch}
          ref={inputSearchRef}
          placeholder="Search Show"
        />
      </div>

      <dl className="mt-5 lg:mx-20 mx-14">
        <h1 className="text-white font-medium md:text-3xl text-base ">
          TV SHOW
        </h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 ">
          {displayUser}
        </div>
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={changePage}
          activeClassName="active"
          className="text-white flex flex-wrap gap-3 justify-center items-center my-10 pagination px-5"
        />
      </dl>
      <ScrollUp />
    </section>
  );
};

export default Show;
