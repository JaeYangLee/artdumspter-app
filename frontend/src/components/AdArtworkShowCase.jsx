import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";

function AdArtworkShowCase({
  user,
  artwork,
  isArtworkShowcaseOpen,
  onArtworkShowcaseClose,
}) {
  if (!isArtworkShowcaseOpen) return null;
  return (
    <>
      <div
        onClick={onArtworkShowcaseClose}
        className="fixed top-0 inset-0 z-70 bg-black/70 flex flex-col items-center justify-center p-4"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col justify-center"
        >
          <div className="w-full flex justify-end p-2">
            <BsXLg
              onClick={onArtworkShowcaseClose}
              className="text-backgroundColor"
            />
          </div>

          <div className="bg-backgroundColor flex flex-col md:flex-row text-textColor">
            <section className="w-full flex md:hidden bg-backgroundColor p-2 items-center justify-between">
              <div className="flex flex-row items-center justify-center gap-2">
                <BsPersonCircle className="size-8" />
                <p className="font-bold">username</p>
              </div>

              <BsThreeDots className="size-8" />
            </section>

            <section className="bg-black flex flex-col items-center justify-center">
              <img
                src={`http://localhost:5000/${artwork.image_url}`}
                alt={artwork.title}
                className="w-full max-w-full h-auto"
              />
            </section>

            <section className="w-full md:w-[40vw] bg-backgroundColor">
              <header className="w-full md:flex hidden bg-backgroundColor p-2 items-center justify-between">
                <div className="flex flex-row items-center justify-center gap-2">
                  <BsPersonCircle className="size-8" />
                  <p className="font-bold">username</p>
                </div>

                <BsThreeDots className="size-8" />
              </header>

              <hr className="opacity-20" />

              <div className="h-full flex-col flex">
                <div className="p-2">
                  <h1 className="font-bold">{artwork.title}</h1>
                  <p className="text-xs">
                    {new Date(artwork.create_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>

                <hr className="opacity-20" />

                <div className="flex flex-col p-2">
                  <p className="font-bold">
                    {`•Art style: `}
                    <span className="font-light">{artwork.artstyle_name}</span>
                  </p>
                  <p className="font-bold">
                    {`•Tool: `}
                    <span className="font-light">{artwork.tool_name}</span>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdArtworkShowCase;
