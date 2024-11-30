import React from "react";
import MembershipsCard from "../components/MembershipsCard";
import { MEMBERSHIPS_CARD_DATA } from "../utils/constants/membership/cardData";

function Memberships() {
  return (
    <div className="p-3 text-center">
      <h1 className="text-4xl font-bold py-3">Membership</h1>
      {
        MEMBERSHIPS_CARD_DATA.map(item=><MembershipsCard cardData={item}/>)
      }
    </div>
  );
}

export default Memberships;
