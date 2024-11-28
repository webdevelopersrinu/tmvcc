import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import { CAROUSEL_IMG } from "../utils/constants/HomePage/carouselmg";

const App = () => {
  return (
    <div>
      <ImageCarousel images={CAROUSEL_IMG} />
    </div>
  );
};

export default App;
