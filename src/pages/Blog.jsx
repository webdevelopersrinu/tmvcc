import React from "react";
import CardsData from "../components/CardsData";
import { CARD_DATA } from "../utils/constants/cards/cardData";
import { Link } from "react-router-dom";
// import ImageCarousel from "../components/ImageCarousel";
import { CAROUSEL_IMG } from "../utils/constants/HomePage/carouselmg";

function Blog() {
  return (
    <div className="bg-black">
      <h1 className="text-white text-center py-2 text-2xl font-semibold">
        Blog
      </h1>
      {/* <ImageCarousel images={CAROUSEL_IMG} /> */}
      <div className="flex items-center justify-center flex-col gap-3">
        <img src={CAROUSEL_IMG[1].imgUrl} alt="" />
        <img src={CAROUSEL_IMG[5].imgUrl} alt="" />
      </div>
      <div>
        <Link to="/newsletter">
          <button className="text-white bg-primary-color py-4 px-4 rounded-lg ml-5 font-bold text-3xl tracking-wide ">
            newsletter
          </button>
        </Link>
      </div>

      <div className="bg-black flex items-center justify-center flex-wrap">
        {CARD_DATA.map((item) => (
          <CardsData cardData={item} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
