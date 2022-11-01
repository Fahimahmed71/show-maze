import React, { useEffect, useState } from "react";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import SplideSlider from "./SplideSlider/SplideSlider";
import "./Header.css";

const Header = () => {
  const [header, setHeader] = useState([]);

  useEffect(() => {
    fetch("headerData.json")
      .then((res) => res.json())
      .then((data) => setHeader(data));
  }, []);

  return (
    <header>
      <Splide
        options={{
          type: "loop",
          autoplay: true,
        }}
        aria-label="My Favorite Images"
      >
        {header.map((slider) => (
          <SplideSlider slider={slider} key={slider.id}></SplideSlider>
        ))}
      </Splide>
    </header>
  );
};

export default Header;
