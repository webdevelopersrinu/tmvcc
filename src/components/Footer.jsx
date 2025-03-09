import React from "react";
import { COPANY_IMG } from "../utils/constants/Footer/companyData";
import {
  FIND_US,
  INFORMATION,
  SOCIAL_MEDIA,
} from "../utils/constants/Footer/footerLinks";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#3F49AB] text-white">
      {/* company data */}
      <div>
        <img
          src={COPANY_IMG[0]}
          alt="copany image"
          className="py-3 px-4 lg:px-36 w-36"
        />
        {/* <div className="grid lg:grid-cols-2 lg:gap-4  grid-cols-1  ">
          {COPANY_IMG.slice(1).map((img) => (
            <img src={img} alt="copany image" />
          ))}
        </div> */}
      </div>

      {/* Footer Data */}
      <div className="text-white p-4">
        <div className="flex items-start lg:items-center justify-start lg:justify-around lg:flex-row flex-col ">
          {/* map */}
          <div>
            <h1 className="text-2xl font-bold py-3 border-b-2">Find us</h1>
            <div className="py-7">
              <iframe
                src={FIND_US}
                width="300"
                height="150"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                frameborder="0"
              ></iframe>
            </div>
          </div>
          {/* Information */}
          <div>
            <h1 className="text-2xl font-bold py-3 border-b-2">Information</h1>
            <div className="py-7 flex flex-col gap-2">
              {INFORMATION.map((item, index) => (
                <Link to={item.link} key={index} className="inline-block">
                  <span className="font-semibold text-xl"> {item.name} </span>
                </Link>
              ))}
            </div>
          </div>
          {/* Social Media */}
          <div>
            <h1 className="text-2xl font-bold py-3 border-b-2">Social Media</h1>
            <div className="py-7 flex flex-col gap-2">
              {SOCIAL_MEDIA.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  target="_blank"
                  className="flex  items-center gap-2 text-2xl"
                >
                  {item.icon}
                  <span className="font-semibold text-xl"> {item.name} </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-xl py-2 text-center">
        Email us at
        <p className="py-2">
          contact@tmvcricket.club (or) traffordmetrovics.cc@gmail.com
        </p>
      </p>
      <div className="bg-copy-right-color text-black text-xl py-2 text-center">
        © TMV Cricket Club 2024 | All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
