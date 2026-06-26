import React, { useState } from "react";
import AdArtworkShowCase from "./AdArtworkShowCase";

function AdArtworkCard({ user, artwork, onDelete, onEdit }) {
  const [isArtworkShowcaseOpen, setArtworkShowcaseOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setArtworkShowcaseOpen(true)}
        className="relative mb-4 overflow-hidden transition duration-300 bg-white shadow-md group break-inside-avoid rounded-xl hover:shadow-xl active:scale-88"
      >
        <img
          src={`http://localhost:5000/${artwork.image_url}`}
          alt={artwork.title}
          className="object-cover w-full transition duration-300 hover:scale-105"
        />

        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-linear-to-t from-black/60 to-transparent group-hover:opacity-100"></div>

        <div className="absolute bottom-0 left-0 w-full p-3 transition-all duration-500 transform translate-y-full opacity-0 text-backgroundColor group-hover:translate-y-0 group-hover:opacity-100 ">
          <p className="w-full text-sm font-bold truncate md:text-lg text-textColor">
            {artwork.title}
          </p>
          <p className="w-full text-xs font-light md:text-sm text-textColor">
            {new Date(artwork.create_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      <AdArtworkShowCase
        user={user}
        artwork={artwork}
        onDelete={onDelete}
        onEdit={onEdit}
        isArtworkShowcaseOpen={isArtworkShowcaseOpen}
        onArtworkShowcaseClose={() => setArtworkShowcaseOpen(false)}
      />
    </>
  );
}

export default AdArtworkCard;
