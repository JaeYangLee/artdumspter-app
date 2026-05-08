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
          className="flex flex-col bg-backgroundColor border rounded-lg shadow-[4px_4px_0px_0px]"
        >
          <section className="flex flex-row items-center justify-between py-2">
            <header className="px-2">
              <h1 className="font-bold text-left"></h1>
            </header>

            <div className="flex flex-row items-center justify-center gap-2 px-2">
              <p className="text-xs text-green-500">●</p>
              <p className="text-xs text-yellow-400">●</p>
              <p onClick={onErrorModalClose} className="text-xs text-red-500">
                ●
              </p>
            </div>
          </section>

          <hr className="w-full" />

          <section className="flex-col items-center justify-center px-4">
            <div className="flex flex-col items-center justify-center py-4">
              <BsExclamationCircleFill className="text-red-500 size-12" />
              <h1 className="pt-4 text-lg font-bold">{title}</h1>
              <p className="font-light">
                <span>{subject}</span>
                {message}
              </p>
            </div>

            <div className="flex items-center justify-center w-full py-2">
              <button
                onClick={onErrorModalClose}
                className="flex items-end my-2 px-2 text-white border rounded bg-primary border-black shadow-black shadow-[2px_2px_0px_0px]"
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
