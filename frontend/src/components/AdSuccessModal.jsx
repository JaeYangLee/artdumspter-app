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
          className="flex flex-col rounded-lg bg-backgroundColor shadow-[4px_4px_0px_0px] border"
        >
          <section className="flex flex-row items-center justify-between py-2">
            <header className="px-2">
              <h1 className="text-lg font-bold text-left"></h1>
            </header>

            <div className="px-2 flex flex-row items-center justify-center gap-2">
              <p className="text-green-500 text-xs">●</p>
              <p className="text-yellow-400 text-xs">●</p>
              <p onClick={onSuccessModalClose} className="text-red-500 text-xs">
                ●
              </p>
            </div>
          </section>

          <hr className="w-full" />

          <section className="flex flex-col items-center justify-center py-4 px-4">
            <div className="flex flex-col items-center justify-center">
              <BsCheckCircleFill className="text-green-500 size-16 " />

              <h1 className="pt-4 text-lg font-bold">{title}</h1>
              <p className="text-sm text-center">
                <span>{subject}</span>
                {message}
              </p>
            </div>

            <button
              onClick={onSuccessModalClose}
              className="px-2 mt-8 border rounded bg-primary text-backgroundColor border-black shadow-black shadow-[2px_2px_0px_0px]"
            >
              Okay
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default AdSuccessModal;
