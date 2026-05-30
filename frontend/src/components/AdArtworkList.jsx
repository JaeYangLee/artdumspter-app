import React from "react";
import AdArtworkCard from "./AdArtworkCard";

function AdArtworkList({ artworks }) {
  if (!artworks?.length) {
    return <p>No Artworks Yet... </p>;
  }

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 p-4 space-y-4">
        {artworks.map((artwork) => (
          <AdArtworkCard key={artwork.artwork_id} artwork={artwork} />
        ))}
      </div>
    </>
  );
}

export default AdArtworkList;
