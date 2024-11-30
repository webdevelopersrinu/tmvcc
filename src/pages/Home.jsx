import React from "react";
import MembershipsIMg from "./../assets/Memberships.png";
import ImageCarousel from "../components/ImageCarousel";
import { CAROUSEL_IMG } from "../utils/constants/HomePage/carouselmg";
import CardsData from "../components/CardsData";
import { CARD_DATA } from "../utils/constants/cards/cardData";
import { Link } from "react-router-dom";
import InstagramData from "../components/InstagramData";

const App = () => {
  return (
    <div className="bg-black">
      <ImageCarousel images={CAROUSEL_IMG} />
      <div className="bg-black flex items-center justify-center flex-wrap">
        {CARD_DATA.map((item) => (
          <CardsData cardData={item} />
        ))}
      </div>
      <div className="flex items-center justify-center py-4">
        <Link to="/memberships">
          <img src={MembershipsIMg} alt="Memberships image" />
        </Link>
      </div>
      <section>
        <InstagramData/>
      </section>
    </div>
  );
};

export default App;
