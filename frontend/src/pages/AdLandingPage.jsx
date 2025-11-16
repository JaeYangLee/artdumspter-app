import { useState } from "react";
function AdLandingPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen ">
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center">
          <section className="w-full h-full flex flex-col items-center justify-center">
            <div className="text-center md:text-start p-4">
              <h1 className="font-bold text-2xl">
                Welcome to <span>ArtDumpster*</span>
              </h1>
              <h3 className="text-lg">Explore Unfiltered Art.</h3>
            </div>
          </section>

          <section className="w-full h-full flex flex-col items-center justify-center ">
            <div className="flex flex-col items-center justify-center gap-4 border rounded-lg p-4">
              <form className="flex flex-col items-center justify-center gap-2 ">
                <input
                  type="email"
                  placeholder="Enter email..."
                  className="px-2 border rounded"
                />
                <input
                  type="password"
                  placeholder="Enter password..."
                  className="px-2 border rounded"
                />
                <button className="w-full px-2 border rounded">Log in</button>
              </form>

              <hr className="w-full" />

              <button className="px-2 rounded border">
                Create new art account
              </button>
            </div>
          </section>
        </div>

        <footer className="w-ful bg-violet-400"></footer>
      </div>
    </>
  );
}

export default AdLandingPage;
