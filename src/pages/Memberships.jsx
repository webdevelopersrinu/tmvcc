import React from "react";
import { Link } from "react-router-dom";

function Memberships() {
  return (
    <div className="p-3 text-center">
      <h1 className="text-4xl font-bold py-3">Memberships</h1>
      <section className="text-xl py-3">
        Are you new to the club? Fantastic! We are a registered Community
        Amateur Sports Club (CASC # CH12794) open to the community and warmly
        welcome new members to apply for membership at
        <Link to={"/contact"}  className="underline px-2 hover:text-primary-color ">
          TMVCC
        </Link>
        Join us and become a part of something truly special!
      </section>
      <section className="text-xl py-3">
        Already an existing member? Great news! You should already have access
        to our membership system. If you have any questions or need further
        information, don't hesitate to contact the Club via email -
        contact@tmvcricket.club And we'll be back in touch!
      </section>
    </div>
  );
}

export default Memberships;
