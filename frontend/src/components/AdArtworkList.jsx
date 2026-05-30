import React from "react";
import AdArtworkCard from "./AdArtworkCard";

function AdArtworkList({ artworks }) {
  if (!artworks?.length) {
    return <p>No Artworks Yet... </p>;
  }

  return (
    <>
      <div className="flex w-screen h-screen bg-gray">
        {artworks.map((artwork) => (
          <AdArtworkCard key={artwork.artwork_id} artwork={artwork} />
        ))}
      </div>
    </>
  );
}

export default AdArtworkList;
