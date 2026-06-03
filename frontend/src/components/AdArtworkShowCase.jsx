import React from "react";
import { BsXLg } from "react-icons/bs";

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
        className="fixed inset-0 top-0 flex flex-col items-center justify-start w-screen h-screen px-4 pt-12 md:pt-0 md:justify-center bg-black/80 z-70"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-end justify-end w-full py-2 text-3xl text-backgroundColor">
            <BsXLg className="size-4 md:size-8" />
          </div>

          <div className="flex flex-col w-full md:flex-row">
            <section className="flex flex-col items-center justify-center bg-black w-full md:w-[30vw]">
              <img
                src={`http://localhost:5000/${artwork.image_url}`}
                alt={artwork.title}
                className="object-contain"
              />
            </section>
            <section className="flex flex-col h-full p-2 bg-backgroundColor">
              <p>{artwork.title}</p>
              <p>{artwork.description}</p>
              <p>{artwork.tool_name}</p>
              <p>{artwork.artstyle_name}</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdArtworkShowCase;
