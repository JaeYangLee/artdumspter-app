function AdThemeModal({ isThemeModalOpen, onThemeModalClose }) {
  if (!isThemeModalOpen) return null;
  return (
    <>
      <div
        onClick={onThemeModalClose}
        className="fixed inset-0 top-0 flex flex-col items-center justify-center w-screen h-screen bg-black/50 z-60"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-backgroundColor border shadow-[4px_4px_0px_0px] rounded-lg"
        >
          <section className="flex flex-row items-center justify-between py-2 rounded-t bg-primary">
            <header className="px-2">
              <h1 className="font-bold text-left select-none text-backgroundColor">
                Theme
              </h1>
            </header>

            <div className="flex flex-row items-center justify-center gap-2 px-2">
              <p className="text-xs text-green-500 cursor-pointer">●</p>
              <p className="text-xs text-yellow-400 cursor-pointer">●</p>
              <p
                onClick={onThemeModalClose}
                className="text-xs text-red-500 cursor-pointer"
              >
                ●
              </p>
            </div>
          </section>

          <section className="flex flex-col items-center justify-center gap-4 p-4 bg-backgroundColor">
            <h1>Choose your theme:</h1>
            <div className="flex flex-row items-center justify-center w-full gap-8">
              <button className="px-2 border rounded shadow-[2px_2px_0px_0px] cursor-pointer">
                Light
              </button>
              <button className="cursor-pointer px-2 border rounded shadow-[2px_2px_0px_0px] bg-primary text-backgroundColor border-textColor shadow-textColor">
                Dark
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default AdThemeModal;
