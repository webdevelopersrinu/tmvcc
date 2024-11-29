import React from "react";
import { Link } from "react-router-dom";

function MembershipsCard({ cardData }) {
  const { name, link, price } = cardData;
  return (
    <div className="bg-[#F6F6F6] my-3 border border-t-primary-color border-t-4 flex items-center justify-between px-4">
      <Link to={link}>
        <h1 className="text-3xl font-bold py-4">{name}</h1>
      </Link>
      <div className="flex items-center gap-3">
        <p className="text-xl font-semibold">{price}</p>
        <button className="py-3 px-2 rounded-lg bg-primary-color text-white font-bold ">Purchase</button>
      </div>
    </div>
  );
}

export default MembershipsCard;
