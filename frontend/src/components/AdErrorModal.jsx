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
          className="flex flex-col items-center justify-center w-full gap-4 p-2 rounded bg-backgroundColor"
        >
          <section className="flex flex-col items-center justify-center p-2">
            <BsExclamationCircleFill className="text-red-500 size-12" />
            <h1 className="pt-2 text-lg font-bold">{title}</h1>
            <p className="font-light">
              <span>{subject}</span>
              {message}
            </p>
          </section>

          <button
            onClick={onErrorModalClose}
            className="my-2 px-2 text-white border rounded bg-primary border-black shadow-black shadow-[2px_2px_0px_0px]"
          >
            Okay
          </button>
        </div>
      </div>
    </>
  );
}

export default AdErrorModal;
