import { CAROUSEL_IMG } from "../utils/constants/HomePage/carouselmg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

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
    <div className="bg-black py-4 z-10 px-7 ">
      <div className="lg:mx-5 md:mx-8 mx-2">
        <Slider {...settings}>
          {CAROUSEL_IMG.map((item) => (
            <Link to={item.link}>
              <div className="w-[90%] mx-auto -z-20 border  border-white shadow-sm shadow-white hover:border-none hover:shadow-none">
                <img
                  src={item.imgUrl}
                  alt="carousel image"
                  className="w-full "
                />
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ImageCarousel;
