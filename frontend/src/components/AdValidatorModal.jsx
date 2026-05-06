import React from "react";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

function AdValidatorModal({
  user,
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
      await onDelete(user.user_id);

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
        className="fixed top-0 flex flex-col items-center justify-center w-screen h-screen pt-16 bg-black/50 z-60"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center justify-center gap-8 p-4 bg-white rounded-lg"
        >
          <section className="flex flex-col items-center justify-center">
            <BsFillExclamationTriangleFill className="text-yellow-600 size-12" />
            <h1 className="text-lg font-bold">{title}</h1>
            <p>{message}</p>
          </section>

          <section className="flex flex-row items-center justify-end w-full gap-2">
            <button
              onClick={handleDelete}
              className="px-2 bg-red-400 border rounded border-textColor"
            >
              Delete
            </button>
            <button
              onClick={onValidatorModalClose}
              className="px-2 border rounded opacity-60"
            >
              Cancel
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default AdValidatorModal;
