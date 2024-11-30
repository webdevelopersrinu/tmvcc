import React from "react";
import HistoryData from "../components/HistoryData";
import { JUNIOR_CRICKET } from "../utils/constants/JuniorCricket/JuniorCricketImages";
import JuniorCricket3 from "../assets/JuniorCricket/JuniorCricket3.jpg";

function JuniorCricket() {
  return (
    <div>
      <h1 className="mt-4 pl-6 text-3xl py-2 font-bold">Junior Cricket</h1>
      <div className="px-4 py-2 pb-0 float-left lg:w-5/12 md:w-3/5 ">
        <img src={JuniorCricket3} alt="Junior Cricket" />
      </div>

      <HistoryData />
      <div className="px-6 flex items-start justify-center py-3">
        {JUNIOR_CRICKET.map((item, index) => (
          <div key={index} className="w-5/12 px-3">
            <img src={item.img} alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default JuniorCricket;
