import React from "react";
import { Link } from "react-router-dom";

function MembershipsCard({ cardData }) {
  const { name, link, price, renewalDate, startDate } = cardData;
  return (
    <div className="bg-[#F6F6F6] my-4 border border-t-primary-color border-t-4 flex items-center justify-between px-4 shadow-xl">
      <Link to={link}>
        <div >
          <h1 className="text-3xl font-bold py-4">{name}</h1>
          <div className="text-xs sm:text-lg  flex items-center sm:gap-2 flex-col py-2">
            <p>Start Date: {startDate}</p>
            <p>Renewal Date: {renewalDate}</p>
          </div>
        </div>
      </Link>
      <div className="flex items-center gap-3">
        <p className="text-xl font-semibold">{price}</p>
        <button className="py-3 px-2 rounded-lg bg-primary-color text-white font-bold ">
          Purchase
        </button>
      </div>
    </div>
  );
}

export default MembershipsCard;
