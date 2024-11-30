import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import { CAROUSEL_IMG } from "../utils/constants/HomePage/carouselmg";
import CardsData from "../components/CardsData";
import { CARD_DATA } from "../utils/constants/cards/cardData";

const App = () => {
  return (
    <div>
      <ImageCarousel images={CAROUSEL_IMG} />
      <div className="bg-black flex items-center justify-center">
        {CARD_DATA.map((item) => (
          <CardsData cardData={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
