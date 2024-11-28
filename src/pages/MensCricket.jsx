import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CricketCard from "../components/CricketCard";
import { CRICKET_DATA } from "../utils/constants/MensCricket/MensCricketData";

function MensCricket() {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (id > 4 || id < 1) {
      console.log("hiiiiiiiiiiiii");
      navigate("/");
    }
  }, [id, navigate]);
  if (id > 4 || id < 1) {
    return null;
  }
  return (
    <div>
      <CricketCard CricketData={CRICKET_DATA[id-1]} />
    </div>
  );
}

export default MensCricket;
