import React from "react";
import { Link } from "react-router-dom";

function CardsData({ cardData }) {
  const { img, title, link } = cardData;
  return (
    <div className="w-4/12 md:w-3/12 p-5  text-white">
      <div className=" w-full  border-white border-2 hover:border-none">
        <Link to={link}>
          <img src={img} alt="card image" className="w-full" />
        </Link>
      </div>
      <Link to={link}>
        <h1 className="text-center text-xs font-semibold py-3 sm:text-xl md:font-bold ">
          {title}
        </h1>
      </Link>
    </div>
  );
}

export default CardsData;
