import React from "react";

function AdArtworkCard({ artwork }) {
  return (
    <>
      <div className="break-inside-avoid mb-4 rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300">
        <img
          src={`http://localhost:5000/${artwork.image_url}`}
          alt={artwork.title}
          className="w-full object-cover hover:scale-105 transition duration-300"
        />
      </div>
    </>
  );
}

export default AdArtworkCard;
