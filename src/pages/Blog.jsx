import React from "react";
import CardsData from "../components/CardsData";
import { CARD_DATA } from "../utils/constants/cards/cardData";

function Blog() {
  return (
    <div className="bg-black">
      <div className="bg-black flex items-center justify-center">
        {CARD_DATA.map((item) => (
          <CardsData cardData={item} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
