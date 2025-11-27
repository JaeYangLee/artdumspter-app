import { BsCheckCircleFill } from "react-icons/bs";
import { useFetchUserById } from "../hooks/useFetchUserById";

function AdSuccessModal({
  title,
  subject,
  message,
  isSuccessModalOpen,
  onSuccessModalClose,
}) {
  if (!isSuccessModalOpen) return null;
  return (
    <>
      <div
        onClick={onSuccessModalClose}
        className="fixed top-0 flex items-center justify-center w-screen h-screen px-4 z-60 bg-black/50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center justify-center w-full p-4 rounded bg-backgroundColor shadow-[4px_4px_0px_0px]"
        >
          <section className="flex flex-col items-center justify-center">
            <BsCheckCircleFill className="text-green-500 size-16 " />

            <h1 className="pt-4 text-lg font-bold">{title}</h1>
            <p className="text-sm">
              <span>{subject}</span>
              {message}
            </p>
          </section>

          <button
            onClick={onSuccessModalClose}
            className="px-2 mt-8 border rounded bg-primary text-backgroundColor border-black shadow-black shadow-[2px_2px_0px_0px]"
          >
            Okay
          </button>
        </div>
      </div>
    </>
  );
}

export default AdSuccessModal;
