import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import AdArtworkSettingsModal from "./AdArtworkSettingsModal";

function AdArtworkShowCase({
  user,
  artwork,
  onDelete,
  onEdit,
  isArtworkShowcaseOpen,
  onArtworkShowcaseClose,
}) {
  const [isArtworkSettingsModalOpen, setArtworkSettingsModalOpen] =
    useState(false);

  if (!isArtworkShowcaseOpen) return null;
  return (
    <>
      <div
        onClick={onArtworkShowcaseClose}
        className="fixed inset-0 top-0 flex flex-col items-center justify-center w-screen h-screen z-70 bg-black/70"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center justify-center px-4 transition duration-100 bg-back animate-modal-scale"
        >
          <div className="flex flex-row items-end justify-end w-full py-1">
            <BsXLg
              onClick={onArtworkShowcaseClose}
              className="font-bold text-backgroundColor size-4"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full md:flex-row bg-backgroundColor shadow-[4px_4px_0px_0px] shadow-textColor">
            <div className="flex flex-row items-center justify-between w-full p-2 md:hidden">
              <div className="flex flex-row items-center justify-center gap-2">
                <BsPersonCircle className="size-8" />
                <h1 className="font-bold">{user?.username}</h1>
              </div>

              <BsThreeDots
                type="button"
                onClick={() => setArtworkSettingsModalOpen(true)}
                className="size-5"
              />
            </div>

            <div className="flex items-center justify-center bg-black">
              <img
                src={`http://localhost:5000/${artwork.image_url}`}
                alt={artwork.title}
                className="object-contain w-full h-full md:w-auto md:h-[80vh]"
              />
            </div>

            <div className="flex flex-col w-full md:w-[40vw] h-full ">
              <div className="justify-between hidden p-2 lex-row bg-back md:flex">
                <div className="flex flex-row items-center gap-2 justify-b">
                  <BsPersonCircle className="size-8" />
                  <h1 className="font-bold">{user.username}</h1>
                </div>

                <BsThreeDots
                  type="button"
                  onClick={() => setArtworkSettingsModalOpen(true)}
                  className="size-8"
                />
              </div>

              <div className="flex flex-col items-start justify-start h-full">
                <div className="w-full p-2">
                  <h1 className="font-bold">{artwork.title}</h1>
                  <p className="text-xs font-light">
                    {new Date(artwork.create_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>

                <hr className="w-full opacity-20" />

                <div className="w-full p-2 opacity-60">
                  <p className="hidden p-2 italic font-light border rounded border-black/50 md:flex">
                    {`"${artwork.description}" -${user.username}`}
                  </p>
                </div>

                <div className="flex flex-col w-full h-full md:justify-end">
                  <hr className="hidden w-full md:flex opacity-20" />
                  <p className="px-2 pt-2 font-bold">
                    {`Art style: `}
                    <span className="px-2 font-normal">
                      {artwork.artstyle_name}
                    </span>
                  </p>
                  <p className="px-2 font-bold">
                    {`Tool used: `}
                    <span className="font-normal">{artwork.tool_name}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdArtworkSettingsModal
        artwork={artwork}
        onDelete={onDelete}
        onEdit={onEdit}
        isArtworkSettingsOpen={isArtworkSettingsModalOpen}
        onArtworkSettings={() => setArtworkSettingsModalOpen(false)}
      />
    </>
  );
}

export default AdArtworkShowCase;
