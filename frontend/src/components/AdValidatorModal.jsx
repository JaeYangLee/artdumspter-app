import React, { useState } from "react";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

function AdValidatorModal({
  user,
  artwork,
  title,
  subject,
  message,
  onDelete,
  isValidatorModalOpen,
  onValidatorModalClose,
}) {
  if (!isValidatorModalOpen) return null;

  const handleDelete = async () => {
    try {
      await onDelete();

      onValidatorModalClose();
    } catch (err) {
      console.error(
        "[DELETE /AdValidatorModal.jsx]: Error deleting user!",
        err.message,
      );
    }
  };
  return (
    <>
      <div
        onClick={onValidatorModalClose}
        className="fixed inset-0 top-0 flex flex-col items-center justify-center w-screen h-screen pt-16 bg-black/50 z-90"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col border shadow-[4px_4px_0px_0px] bg-white rounded-lg animate-modal-scale"
        >
          <section className="flex flex-row items-center justify-between py-2 rounded-t bg-primary">
            <header className="px-2">
              <h1 className="font-bold text-left select-none text-backgroundColor">
                Delete {subject}
              </h1>
            </header>

            <div className="flex flex-row items-center justify-center gap-2 px-2">
              <p className="text-xs text-green-500 cursor-pointer">●</p>
              <p className="text-xs text-yellow-400 cursor-pointer">●</p>
              <p
                onClick={onValidatorModalClose}
                className="text-xs text-red-500 cursor-pointer"
              >
                ●
              </p>
            </div>
          </section>

          <hr />

          <section className="flex flex-col items-center justify-center gap-4 p-4">
            <div className="flex flex-col items-center justify-center">
              <BsFillExclamationTriangleFill className="text-yellow-400 size-16" />

              <h1 className="pt-4 text-lg font-bold">{title}</h1>
              <p className="">{message}</p>
            </div>

            <div className="flex flex-row items-center justify-end w-full gap-2 pt-2">
              <button
                onClick={handleDelete}
                className="text-backgroundColor px-2 bg-red-500 border rounded border-textColor shadow-textColor shadow-[2px_2px_0px_0px] hover:bg-textColor transition duration-200 cursor-pointer"
              >
                Delete
              </button>
              <button
                onClick={onValidatorModalClose}
                className="px-2 border rounded text-gray-600 shadow-textColor border-textColor shadow-[2px_2px_0px_0px] hover:bg-gray-400 hover:text-backgroundColor cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default AdValidatorModal;
