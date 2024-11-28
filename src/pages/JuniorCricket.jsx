import React from "react";
import HistoryData from "../components/HistoryData";
import { JUNIOR_CRICKET } from "../utils/constants/JuniorCricket/JuniorCricketImages";

function JuniorCricket() {
  return (
    <div>
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
