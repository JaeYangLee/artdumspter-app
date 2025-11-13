import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import AdAuthModal from "../components/AdAuthModal";
function AdLandingPage() {
  const [isAuthModalOpen, setAuthModelOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center w-screen h-screen md:flex-row pt-14">
        <div className="flex flex-col items-center justify-center h-full gap-8 p-4 bg-gray-400 md:items-start md:w-full">
          <section className="flex flex-col items-center justify-center md:items-start">
            <h1 className="text-4xl font-bold text-center md:text-left">
              Welcome to ArtDumpster*
            </h1>
            <p className="text-sm text-center md:text-left">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </section>
          <section className="flex flex-row items-center justify-center w-full gap-2 md:items-start md:justify-start">
            <button
              onClick={() => setAuthModelOpen(true)}
              className="flex flex-row items-center gap-2 p-2 px-4 text-white bg-black border rounded"
            >
              Get Started
              <span className="hidden md:flex">
                <BsArrowRight />
              </span>
            </button>
          </section>
        </div>

        <div className="h-full md:w-[40vw] flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">AD*</h1>
        </div>
      </div>

      <AdAuthModal
        isAuthModalOpen={isAuthModalOpen}
        onAuthModalClose={() => setAuthModelOpen(false)}
      />
    </>
  );
}

export default AdLandingPage;
