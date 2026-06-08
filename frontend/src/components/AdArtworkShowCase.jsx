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
        className="fixed inset-0 top-0 flex flex-col items-center justify-center w-screen h-screen z-70 bg-black/70"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center justify-center px-4"
        >
          <div className="flex flex-row items-end justify-end w-full py-1">
            <BsXLg
              onClick={onArtworkShowcaseClose}
              className="font-bold text-backgroundColor size-4"
            />
          </div>

          <div className="flex flex-col items-center justify-center w-full h-full md:flex-row">
            <div className="flex flex-row items-center justify-between w-full p-2 bg-backgroundColor md:hidden">
              <div className="flex flex-row items-center justify-center gap-2">
                <BsPersonCircle />
                <h1 className="font-bold">username</h1>
              </div>

              <BsThreeDots className="size-8" />
            </div>

            <div className="flex items-center justify-center bg-black">
              <img
                src={`http://localhost:5000/${artwork.image_url}`}
                alt={artwork.title}
                className="object-contain max-w-full max-h-full"
              />
            </div>

            <div className="w-full h-full bg-backgroundColor">
              <div className="justify-between hidden p-2 lex-row bg-back md:flex">
                <div className="flex flex-row items-center gap-2 justify-b">
                  <BsPersonCircle className="size-8" />
                  <h1 className="font-bold">username</h1>
                </div>

                <BsThreeDots className="size-8" />
              </div>

              <div className="flex flex-col items-start justify-start max-h-full">
                <div className="p-2">
                  <h1 className="font-bold">{artwork.title}</h1>
                  <p className="text-xs font-light">
                    {new Date(artwork.create_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>

                <hr className="w-full" />

                <div className="flex flex-col justify-endp-2">
                  <p className="font-bold">
                    {`Art style: `}
                    <span className="font-normal">{artwork.artstyle_name}</span>
                  </p>
                  <p className="font-bold">
                    {`Tool used: `}
                    <span className="font-normal">{artwork.tool_name}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdArtworkShowCase;
