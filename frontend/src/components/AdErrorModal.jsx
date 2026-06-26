import React from "react";
import { BsExclamationCircleFill } from "react-icons/bs";

function AdErrorModal({
  title,
  subject,
  message,
  isErrorModalOpen,
  onErrorModalClose,
}) {
  if (!isErrorModalOpen) return null;

  return (
    <>
      <div
        onClick={onErrorModalClose}
        className="fixed top-0 flex flex-col items-center justify-center w-screen h-screen p-4 z-60 bg-black/50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col bg-backgroundColor border border-textColor rounded-lg shadow-[4px_4px_0px_0px] animate-modal-scale"
        >
          <section className="flex flex-row items-center justify-between py-2 rounded-t border-textColor bg-primary">
            <header className="px-2">
              <h1 className="font-bold text-left"></h1>
            </header>

            <div className="flex flex-row items-center justify-center gap-2 px-2">
              <p className="text-xs text-green-500 cursor-pointer">●</p>
              <p className="text-xs text-yellow-400 cursor-pointer">●</p>
              <p
                onClick={onErrorModalClose}
                className="text-xs text-red-500 cursor-pointer"
              >
                ●
              </p>
            </div>
          </section>

          <hr className="w-full" />

          <section className="flex-col items-center justify-center px-4">
            <div className="flex flex-col items-center justify-center py-4">
              <BsExclamationCircleFill className="text-red-500 size-12" />
              <h1 className="pt-4 text-lg font-bold text-textColor">{title}</h1>
              <p className="font-light text-textColor">
                <span>{subject}</span>
                {message}
              </p>
            </div>

            <div className="flex items-center justify-center w-full py-2">
              <button
                onClick={onErrorModalClose}
                className="hover:bg-backgroundColor flex items-end my-2 px-2 text-white border rounded bg-primary border-textColor shadow-textColor shadow-[2px_2px_0px_0px] hover:cursor-pointer"
              >
                Okay
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default AdErrorModal;
