import React from "react";

function CricketCard({ CricketData }) {
  const { name, data, img } = CricketData;
  return (
    <div className="py-6">
      <h1 className="text-center text-3xl font-bold">{name}</h1>
      <div className="flex items-center justify-center flex-col py-3">
        <p className="text-center pt-5 pb-1 text-xl">{data}</p>
        <img src={img} alt={name} className="w-6/12 lg:w-3/12"/>
      </div>
    </div>
  );
}

export default CricketCard;
