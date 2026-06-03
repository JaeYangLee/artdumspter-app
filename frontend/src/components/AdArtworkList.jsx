import React from "react";
import AdArtworkCard from "./AdArtworkCard";

function AdArtworkList({ artworks }) {
  if (!artworks?.length) {
    return <p>No Artworks Yet... </p>;
  }

  return (
    <>
      <div className="p-4">
        <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4">
          {artworks.map((artwork) => (
            <AdArtworkCard key={artwork.artwork_id} artwork={artwork} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AdArtworkList;
