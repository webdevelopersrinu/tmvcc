import React from "react";

function ResultData({ resultData }) {
  const { img, title, firstTitle, firstLink, secondTitle, secondLink } =
    resultData;
  return (
    <div className="bg-[#F2F4F8] text-[#3B4954]">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-center py-3 text-xl font-bold">{title}</h1>
        <img src={img} alt="" />
      </div>
      <div className="px-6">
        {firstLink && (
          <p className="text-xl py-4">
            {firstTitle} -{" "}
            <a href={firstLink} className="font-bold underline">
              SCORECARD
            </a>
          </p>
        )}
        {secondTitle && (
          <p className="text-xl py-4">
            {secondTitle} -{" "}
            <a href={secondLink} className="font-bold underline">
              SCORECARD
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export default ResultData;
