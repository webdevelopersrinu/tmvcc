import { CAROUSEL_IMG } from "../utils/constants/HomePage/carouselmg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ImageCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,
  };
  return (
    <div className="bg-black">
      <div className="lg:mx-60 md:mx-40 mx-7">
        <Slider {...settings}>
          {CAROUSEL_IMG.map((item) => (
            <div className="w-[80%] mx-auto">
              <img src={item.imgUrl} alt="carousel image" className="w-full" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ImageCarousel;
