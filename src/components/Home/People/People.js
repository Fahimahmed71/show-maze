import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Peoples from "./Peoples/Peoples";
import ReactPaginate from "react-paginate";
import "./People.css";
import ScrollUp from "../../ScrollUp/ScrollUp";
import Footer from "../../Footer/Footer";

const People = () => {
  const [people, setPeople] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [text, setText] = useState("");
  const [search, setSearch] = useState([]);

  const userPerPage = 30;
  const pagination = pageNumber * userPerPage;

  const textLowerCase = text.toLowerCase();

  useEffect(() => {
    fetch("https://api.tvmaze.com/people")
      .then((res) => res.json())
      .then((data) => {
        const match = data.filter((searchData) =>
          searchData.name.toLowerCase().includes(textLowerCase)
        );
        setSearch(match);
        setPeople(data);
      });
  }, [textLowerCase]);

  const handleSearch = (e) => {
    setText(e.target.value);
  };

  const displayUser = search
    .slice(pagination, pagination + userPerPage)
    .map((peoples) => {
      return <Peoples peoples={peoples} key={peoples.id} />;
    });

  const pageCount = Math.ceil(people.length / userPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // console.log(people.slice(0, 10));

  return (
    <section className="pt-20">
      <input
        onChange={handleSearch}
        className="mx-auto block md:h-10 h-9 text-white md:text-base text-sm rounded-full md:pr-7 pr-0 pl-5 placeholder:text-white placeholder:italic bg-blue-900 focus:outline-none"
        type="search"
        name="search"
        id="search"
        placeholder="Search Show"
      />
      <dl className="grid md:grid-cols-5 grid-cols-2 gap-5 md:mx-auto md:px-0 px-5 container pt-10">
        {displayUser}
      </dl>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={changePage}
        activeClassName="active"
        className="text-white flex flex-wrap gap-3 justify-center items-center my-10 pagination px-5"
      />
      <ScrollUp />
      <Footer />
    </section>
  );
};

export default People;
