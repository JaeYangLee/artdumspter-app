import { BsCheckCircleFill } from "react-icons/bs";

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
        className="fixed top-0 flex items-center justify-center w-screen h-screen px-4 z-100 inset-0 bg-black/60"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col rounded-lg bg-backgroundColor shadow-[4px_4px_0px_0px] border"
        >
          <section className="flex flex-row items-center justify-between py-2">
            <header className="px-2">
              <h1 className="text-lg font-bold text-left"></h1>
            </header>

            <div className="flex flex-row items-center justify-center gap-2 px-2">
              <p className="text-xs text-green-500">●</p>
              <p className="text-xs text-yellow-400">●</p>
              <p onClick={onSuccessModalClose} className="text-xs text-red-500">
                ●
              </p>
            </div>
          </section>

          <hr className="w-full" />

          <section className="flex flex-col items-center justify-center px-4 py-4">
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
