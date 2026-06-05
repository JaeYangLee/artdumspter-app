import React, { useState } from "react";
import AdArtworkShowCase from "./AdArtworkShowCase";

function AdArtworkCard({ user, artwork }) {
  const [isArtworkShowcaseOpen, setArtworkShowcaseOpen] = useState(false);
  return (
    <>
      <div className="mb-4 overflow-hidden transition duration-300 bg-white shadow-md break-inside-avoid rounded-xl hover:shadow-xl">
        <img
          src={`http://localhost:5000/${artwork.image_url}`}
          alt={artwork.title}
          onClick={() => setArtworkShowcaseOpen(true)}
          className="object-cover w-full transition duration-300 hover:scale-105"
        />
      </div>

      <AdArtworkShowCase
        user={user}
        artwork={artwork}
        isArtworkShowcaseOpen={isArtworkShowcaseOpen}
        onArtworkShowcaseClose={() => setArtworkShowcaseOpen(false)}
      />
    </>
  );
}

export default AdArtworkCard;
