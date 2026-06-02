import React from "react";

function AdArtworkShowCase({
  artwork,
  isArtworkShowcaseOpen,
  onArtworkShowcaseClose,
}) {
  if (!isArtworkShowcaseOpen) return null;
  return (
    <>
      <div
        onClick={onArtworkShowcaseClose}
        className="fixed inset-0 top-0 flex justify-center w-screen h-screen pt-16 z-70 bg-black/50"
      >
        <div
          onClick={onArtworkShowcaseClose}
          className="flex flex-col p-4 md:flex-row"
        >
          <section className="flex flex-col">
            <img
              src={`http://localhost:5000/${artwork.image_url}`}
              alt={artwork.title}
              className="object-cover"
            />
          </section>

          <section className="bg-white">
            <h1>{artwork.title}</h1>
          </section>
        </div>
      </div>
    </>
  );
}

export default AdArtworkShowCase;
