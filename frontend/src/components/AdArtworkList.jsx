import React from "react";
import AdArtworkCard from "./AdArtworkCard";
import { FaRegFaceFrown } from "react-icons/fa6";

function AdArtworkList({ user, artworks, onDelete, onEdit }) {
  if (!artworks?.length) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-backgroundColor gap-4 px-4 ">
        <FaRegFaceFrown className="text-primary size-16 md:size-24 lg:size-32" />

        <p className="text-primary font-light text-lg text-center md:text-2xl lg:text-3xl">
          Nothing in the dumpster yet...
        </p>

        <p className="text-center text-xs  text-primary font-light md:text-sm lg:text-lg">
          Finished artwork, unfinished sketches, random experiments, or creative
          mistakes, they're all welcome here!
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="p-4 bg-backgroundColor">
        <div className="columns-2 md:columns-3 sm:columns-2 lg:columns-3 xl:columns-4">
          {artworks.map((artwork) => (
            <AdArtworkCard
              key={artwork.artwork_id}
              user={user}
              artwork={artwork}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default AdArtworkList;
