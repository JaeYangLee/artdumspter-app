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
        className="fixed inset-0 top-0 flex flex-col items-center justify-start w-screen h-screen px-4 pt-12 md:items-center bg-black/80 z-70"
      >
        <div className="flex flex-col items-center justify-center">
          <p className="w-full text-right text-backgroundColor">x</p>
          <div className="flex flex-col w-full md:flex-row">
            <section className="md:w-[70vw] bg-black">
              <img
                src={`http://localhost:5000/${artwork.image_url}`}
                alt={artwork.title}
                className="object-contain"
              />
            </section>
            <section className="md:w-1/2 bg-backgroundColor">
              <p>{artwork.title}</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdArtworkShowCase;
