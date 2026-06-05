import React from "react";
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
        className="fixed inset-0 top-0 flex flex-col items-center justify-start w-screen h-screen px-4 pt-4 md:pt-0 md:justify-center bg-black/90 z-70"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-end justify-end w-full py-2 text-3xl text-backgroundColor">
            <BsXLg className="size-4 md:size-8" />
          </div>

          <div className="flex flex-row items-center justify-between w-full p-2 md:hidden bg-backgroundColor">
            <h1 className="text-sm font-bold">Username</h1>
            <BsThreeDots />
          </div>

          <div className="flex flex-col w-full md:flex-row">
            <section className="flex flex-col items-center justify-center bg-black w-full md:w-[50vw]">
              <img
                src={`http://localhost:5000/${artwork.image_url}`}
                alt={artwork.title}
                className="object-contain"
              />
            </section>

            <section className="flex flex-col h-full py-2 bg-backgroundColor md:w-[30vw] gap-2">
              <div className="flex-row items-center justify-between hidden w-full px-2 md:flex md:">
                <h1 className="font-bold ">Username</h1>
                <BsThreeDots />
              </div>

              <hr className="hidden md:flex" />

              <div className="flex flex-col gap-2">
                <div className="flex flex-col px-2 pb-4">
                  <h1 className="text-sm font-bold text-textColor">
                    {artwork.title}
                  </h1>

                  <p className="pb-4 text-xs font-light opacity-50">
                    {new Date(artwork.create_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>

                  <p className="hidden md:flex p-2 border rounded h-[10vh] md:h-[40vh] text-gray-500 italic font-light text-xs">{`" ${artwork.description} "`}</p>

                  <button>Description</button>
                </div>

                <hr />

                <div className="flex flex-col">
                  <p className="px-2 text-sm font-bold">
                    • Art style:
                    <span className="font-normal capitalize">
                      {artwork.artstyle_name}
                    </span>
                  </p>
                  <p className="px-2 text-sm font-bold">
                    • Tool:
                    <span className="font-normal capitalize">
                      {artwork.tool_name}
                    </span>
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
